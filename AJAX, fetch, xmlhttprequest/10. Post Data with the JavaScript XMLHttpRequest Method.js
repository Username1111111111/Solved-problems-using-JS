// <script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';

      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
        }
      };
      const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
      xhr.send(body);

    };
  });
// </script>

// <style>
//   body {
//     text-align: center;
//     font-family: "Helvetica", sans-serif;
//   }
//   h1 {
//     font-size: 2em;
//     font-weight: bold;
//   }
//   .box {
//     border-radius: 5px;
//     background-color: #eee;
//     padding: 20px 5px;
//   }
//   button {
//     color: white;
//     background-color: #4791d0;
//     border-radius: 5px;
//     border: 1px solid #4791d0;
//     padding: 5px 10px 8px 10px;
//   }
//   button:hover {
//     background-color: #0F5897;
//     border: 1px solid #0F5897;
//   }
// </style>

// <h1>Cat Friends</h1>
// <p class="message box">
//   Reply from Server will be here
// </p>
// <p>
//   <label for="name">Your name:
//     <input type="text" id="name"/>
//   </label>
//   <button id="sendMessage">
//     Send Message
//   </button>
// </p>
