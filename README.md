# NativeApp
Aplicação mobile do curso rocketseat com windows 10

Instalar Chocolatey

$ @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

Instalar Node LTS, Python2, JDK e a SDK do Android.

$ choco install nodejs--version 10.16.0

$ choco install -y python2 jdk8

instalar React Native

$ npm install -g react-native-cli

Baixar Android Command line e jogar na pasta C:\Android\Sdk

https://developer.android.com/studio/#downloads

Incluir variavel de ambiente ANDROID_HOME com caminho do sdk (C:\Android\Sdk)

Adicionar na variavel PATH 

  %ANDROID_HOME%\platform-tools
  
  %ANDROID_HOME%\tools
  
$ C:\Android\Sdk\tools\bin\sdkmanager  "platform-tools" "platforms;android-27" "build-tools;27.0.3"

Baixe e instale o emulador

https://www.genymotion.com/fun-zone/


Crie uma pasta dos projetos React e execute o comando abaixo dentro da pasta para iniciar o projeto

$ react-native init AwesomeProject

Entre dentro da pasta criada

$ cd AwesomeProject

Rode a aplicação

$ react-native run-android

## Se der erro no webview $ react-native unlink react-native-webview
