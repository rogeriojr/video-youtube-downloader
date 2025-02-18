const readline = require("readline-sync");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Pasta onde os vídeos serão salvos
const downloadFolder = path.join(__dirname, "downloads");
if (!fs.existsSync(downloadFolder)) fs.mkdirSync(downloadFolder);

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

  // Comando para baixar o vídeo com o título original
  // Tentando usar o yt-dlp diretamente se disponível
  const command = `yt-dlp -f bestvideo+bestaudio --merge-output-format mp4 -o "${downloadFolder}/%(title)s.%(ext)s" "${url}"`;

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
