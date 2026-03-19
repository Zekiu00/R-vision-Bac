const http = require("http");
const fs = require("fs");
const path = require("path");

const host = "0.0.0.0";
const port = process.env.PORT ? Number(process.env.PORT) : 4173;
const rootDir = __dirname;
const remoteUser = process.env.REMOTE_USER || "";
const remotePass = process.env.REMOTE_PASS || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function send(response, statusCode, body, contentType) {
  const headers = { "Content-Type": contentType };

  // Keep critical app files fresh so installed PWAs update reliably.
  if (
    contentType.startsWith("text/html") ||
    contentType.includes("manifest") ||
    contentType.includes("javascript")
  ) {
    headers["Cache-Control"] = "no-store, must-revalidate";
  }

  response.writeHead(statusCode, headers);
  response.end(body);
}

function isAuthorized(request) {
  if (!remoteUser || !remotePass) {
    return true;
  }

  const header = request.headers.authorization || "";
  if (!header.startsWith("Basic ")) {
    return false;
  }

  try {
    const encoded = header.slice(6);
    const decoded = Buffer.from(encoded, "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex === -1) {
      return false;
    }

    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);
    return user === remoteUser && pass === remotePass;
  } catch (error) {
    return false;
  }
}

function requestAuthentication(response) {
  response.writeHead(401, {
    "Content-Type": "text/plain; charset=utf-8",
    "WWW-Authenticate": 'Basic realm="Revision Bac"'
  });
  response.end("Authentification requise");
}

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const fullPath = path.join(rootDir, requestedPath);
  const normalized = path.normalize(fullPath);

  if (!normalized.startsWith(rootDir)) {
    return null;
  }

  return normalized;
}

const server = http.createServer((request, response) => {
  if (!isAuthorized(request)) {
    requestAuthentication(response);
    return;
  }

  const filePath = resolveFile(request.url || "/");

  if (!filePath) {
    send(response, 403, "Acces refuse", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === "ENOENT") {
        send(response, 404, "Fichier introuvable", "text/plain; charset=utf-8");
        return;
      }

      send(response, 500, "Erreur serveur", "text/plain; charset=utf-8");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    send(response, 200, data, contentType);
  });
});

server.listen(port, host, () => {
  console.log(`Serveur demarre sur http://localhost:${port}`);
  console.log("Accessible sur ton reseau local si ton pare-feu Windows l'autorise.");
  if (remoteUser && remotePass) {
    console.log(`Protection activee avec l'identifiant: ${remoteUser}`);
  }
});
