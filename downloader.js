const readline = require("readline-sync");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Carrega as variáveis do .env

// Pasta onde os vídeos serão salvos
const downloadFolder = path.join(__dirname, "downloads");
if (!fs.existsSync(downloadFolder)) fs.mkdirSync(downloadFolder);

// Pergunta ao usuário se deseja usar o caminho local ou o ambiente global
const useLocalPath =
  readline
    .question("Deseja usar o caminho local para o yt-dlp? (s/n): ")
    .toLowerCase() === "s";

// Caminho para o yt-dlp.exe
let ytDlpPath;
if (useLocalPath) {
  // Usa o caminho do .env
  ytDlpPath = process.env.YT_DLP_PATH;
  if (!ytDlpPath) {
    console.error("❌ Caminho do yt-dlp não encontrado no arquivo .env.");
    process.exit(1);
  }
} else {
  // Usa o yt-dlp do ambiente global
  ytDlpPath = "yt-dlp";
}

// Solicita os links ao usuário
const input = readline.question(
  "Insira os links do YouTube separados por vírgula: "
);

// Converte a entrada em um array de URLs
const videoURLs = input
  .split(",")
  .map((url) => url.trim())
  .filter((url) => url);

// Verifica se há links inseridos
if (videoURLs.length === 0) {
  console.log("Nenhum link inserido. Saindo...");
  process.exit(0);
}

// Função para baixar um vídeo
const downloadVideo = (url) => {
  console.log(`\n🔽 Baixando: ${url}`);

  // Caminho para o FFmpeg
  const ffmpegPath = path.join(
    __dirname,
    "ffmpeg",
    "ffmpeg-master-latest-win64-gpl-shared",
    "bin",
    "ffmpeg.exe"
  );

  // Comando corrigido para baixar vídeo e áudio juntos e fundi-los em MP4
  const command = `"${ytDlpPath}" --ffmpeg-location "${ffmpegPath}" -f "bv*+ba/b" --remux-video mp4 --no-warnings -o "${downloadFolder}/%(title)s.%(ext)s" "${url}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Erro ao baixar ${url}: ${stderr}`);
      return;
    }
    console.log(stdout);
    console.log("✅ Download concluído!\n");
  });
};

// Baixa todos os vídeos da lista
videoURLs.forEach((url) => downloadVideo(url));
