import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve sitemap.xml with the correct content-type
  app.get("/sitemap.xml", (_req, res) => {
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.sendFile("sitemap.xml", { root: "dist/public" });
  });

  return httpServer;
}
