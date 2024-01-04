console.log('Inicialização do Firebase concluída');
const storage = firebase.storage();
console.log('Referência para o Firebase Storage obtida');

function uploadVideo() {
    // Obtenha o elemento de entrada de arquivo
    const fileInput = document.getElementById('videoInput');
    const file = fileInput.files[0];
  
    if (file) {
      // Crie uma referência para o Firebase Storage
      const storageRef = firebase.storage().ref();
  
      // Crie uma referência para o arquivo no Storage (use um nome de arquivo único)
      const videoRef = storageRef.child('videos/' + file.name);
  
      // Faça o upload do arquivo
      videoRef.put(file).then((snapshot) => {
        console.log('Upload concluído', snapshot);
      }).catch((error) => {
        console.error('Erro no upload:', error);
      });
    } else {
      console.log('Selecione um vídeo para fazer upload.');
    }
  }
  

  