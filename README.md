
# YouTube Video Downloader (Node.js)
![alt text](image.png)

Este é um script Node.js que permite baixar vídeos do YouTube na melhor qualidade disponível, com áudio e vídeo combinados em um único arquivo. O script suporta múltiplos links de vídeos e salva-os automaticamente com o título original.

## 📌 Recursos
- **Suporte a múltiplos links**: Permite inserir vários links do YouTube separados por vírgula.
- **Qualidade máxima**: Baixa os vídeos com o melhor áudio e vídeo disponíveis, combinados em um único arquivo.
- **Salvamento automático**: Os vídeos são salvos com o título original.
- **Dependência**: Utiliza `yt-dlp` para realizar o download.
- **Requisitos de ambiente**: Certifique-se de ter as variáveis de ambiente corretamente configuradas para o `yt-dlp` e `FFmpeg`.

## 🚀 Instalação e Uso

### 1️⃣ Pré-requisitos
Antes de rodar o script, verifique se os seguintes programas estão instalados no seu sistema:

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Você pode verificar isso rodando `node -v` no terminal.
- **yt-dlp**: Usado para realizar o download dos vídeos. Para que o script funcione corretamente, o `yt-dlp` deve estar disponível no sistema ou na pasta do projeto.
- **FFmpeg**: Necessário para combinar áudio e vídeo em um único arquivo. Siga as instruções abaixo para instalar.

### 🔹 Instalar o `yt-dlp`
#### Windows
1. Baixe o executável `yt-dlp.exe` em [https://github.com/yt-dlp/yt-dlp/releases/latest](https://github.com/yt-dlp/yt-dlp/releases/latest).
2. Mova o arquivo para a pasta do projeto ou para um diretório acessível no sistema (por exemplo, `C:\Windows\System32`).

#### Linux/macOS
```sh
sudo apt install yt-dlp  # Ou
pip install yt-dlp
```

Teste se está instalado corretamente:
```sh
yt-dlp --version
```

### 🔹 Instalar o **FFmpeg**
O FFmpeg é necessário para combinar o áudio e vídeo no formato correto.

#### Windows
- Baixe a versão do [FFmpeg](https://ffmpeg.org/download.html) para Windows e extraia os arquivos.
- Adicione a pasta `bin` do FFmpeg ao **PATH** do sistema.

#### Linux/macOS
```sh
sudo apt install ffmpeg
```

Verifique se o FFmpeg está instalado corretamente:
```sh
ffmpeg -version
```

### 2️⃣ Instalar dependências do Node.js
Após garantir que o `yt-dlp` e o `FFmpeg` estão instalados corretamente, instale as dependências do projeto:
```sh
npm init -y
npm install readline-sync child_process
```

### 3️⃣ Executar o script
Agora, você pode executar o script para começar a baixar os vídeos:
```sh
node downloader.js
```

### 4️⃣ Inserir os links dos vídeos
Quando o script for executado, ele pedirá que você insira os links dos vídeos separados por vírgula. Exemplo:
```
https://www.youtube.com/watch?v=abc123, https://www.youtube.com/watch?v=xyz456
```

O script fará o download dos vídeos e os salvará na pasta `downloads/`.

## 📂 Estrutura do Projeto
```
/video-youtube-downloader
│── downloader.js        # Script responsável por baixar os vídeos
│── package.json         # Arquivo de configuração do Node.js
│── downloads/           # Pasta onde os vídeos serão salvos
└── yt-dlp.exe           # (Opcional) yt-dlp se não estiver instalado globalmente
```

## 🛠 Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **yt-dlp**: Ferramenta para baixar vídeos do YouTube.
- **FFmpeg**: Ferramenta para processar e combinar áudio e vídeo.

## 📜 Licença
Este projeto está sob a licença MIT.
