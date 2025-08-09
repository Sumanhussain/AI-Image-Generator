// const themeToggle = document.querySelector(".theme-toggle");
// const promptForm = document.querySelector(".prompt-form");
// const promptInput = document.querySelector(".prompt-input");
// const promptBtn = document.querySelector(".prompt-btn");
// const modelSelect = document.querySelector("model-select");
// const countSelect = document.querySelector("count-select");
// const ratioSelect = document.querySelector("ratio-select");

// const examplePrompts = [
//   "A magic forest with glowing plants and fairy homes among giant mushrooms",
//   "An old steampunk airship floating through golden clouds at sunset",
//   "A future Mars colony with glass domes and gardens against red mountains",
//   "A dragon sleeping on gold coins in a crystal cave",
//   "An underwater kingdom with merpeople and glowing coral buildings",
//   "A floating island with waterfalls pouring into clouds below",
//   "A witch's cottage in fall with magic herbs in the garden",
//   "A robot painting in a sunny studio with art supplies around it",
//   "A magical library with floating glowing books and spiral staircases",
//   "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
//   "A cosmic beach with glowing sand and an aurora in the night sky",
//   "A medieval marketplace with colorful tents and street performers",
//   "A cyberpunk city with neon signs and flying cars at night",
//   "A peaceful bamboo forest with a hidden ancient temple",
//   "A giant turtle carrying a village on its back in the ocean",
// ];
// //set theme based on saved perferences or default
// (()=>{
//     const savedTheme = localStorage.getItem("theme");
//     const systemPrefersDark = window.matchMedia("(perfers-color-schem: dark)").matches;

//     const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
//     document.body.classList.toggle("dark-theme", isDarkTheme);
//      themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// } )();

// //swtich between light to dark mood
// const toggleTheme = () => {
//   const isDarkTheme =  document.body.classList.toggle("dark-theme");
//   localStorage.setItem("theme",isDarkTheme ? "dark":"light");
//   themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// };
// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   const modelSelect = modelSelect.value;
//   const imageCount  = parseInt(countSelect.value)|| 1
//   const aspectRatio = ratioSelect .value ||"1/1";
//    const promptText = promptInput.value.trim();

//    console.log(selectedModel,imageCount,aspectRatio,promptText)
// }
// // fill input prompt
// promptBtn.addEventListener("click",()=>{
//     const prompt = examplePrompts[Math.floor(Math.random()*examplePrompts.length)];
//     promptInput.value = prompt;
//     promptInput.focus();
// });

// promptForm.addEventListener("submit",handleFormSubmit);
// themeToggle.addEventListener("click",toggleTheme);



// const themeToggle = document.querySelector(".theme-toggle");
// const promptForm = document.querySelector(".prompt-form");
// const promptInput = document.querySelector(".prompt-input");
// const promptBtn = document.querySelector(".prompt-btn");

// const modelSelect = document.getElementById("model-select");
// const countSelect = document.getElementById("count-select");
// const ratioSelect = document.getElementById("ratio-select");

// const gridGallery = document.querySelector(".gallery-grid");

// const API_KEY ="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";

// const examplePrompts = [
//   "A magic forest with glowing plants and fairy homes among giant mushrooms",
//   "An old steampunk airship floating through golden clouds at sunset",
//   "A future Mars colony with glass domes and gardens against red mountains",
//   "A dragon sleeping on gold coins in a crystal cave",
//   "An underwater kingdom with merpeople and glowing coral buildings",
//   "A floating island with waterfalls pouring into clouds below",
//   "A witch's cottage in fall with magic herbs in the garden",
//   "A robot painting in a sunny studio with art supplies around it",
//   "A magical library with floating glowing books and spiral staircases",
//   "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
//   "A cosmic beach with glowing sand and an aurora in the night sky",
//   "A medieval marketplace with colorful tents and street performers",
//   "A cyberpunk city with neon signs and flying cars at night",
//   "A peaceful bamboo forest with a hidden ancient temple",
//   "A giant turtle carrying a village on its back in the ocean",
// ];

// // set theme based on saved preferences or default
// (() => {
//   const savedTheme = localStorage.getItem("theme");
//   const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
//   document.body.classList.toggle("dark-theme", isDarkTheme);
//   themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// })();

// // switch between light and dark mode
// const toggleTheme = () => {
//   const isDarkTheme = document.body.classList.toggle("dark-theme");
//   localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
//   themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// };

// const baseSize = 512;

//  const getImageDimensions = (aspectRatio)=>{
//    const[width, height] =aspectRatio.split("/").map(Number);
//    const scaleFactor = baseSize /Math.sqrt(width * height);

//    let calculateWidth =Math.round(width*scaleFactor);
//    let calculateHeight =Math.round(height*scaleFactor);

//  calculateWidth = Math.floor(calculateWidth /16) * 16;
//   calculateHeight = Math.floor(calculateHeight /16) * 16;

// return{ width: calculateWidth, height: calculateHeight };
//  };

//  const generateImages =  async(selectedModel, imageCount, aspectRatio, promptText) =>{
//      const MODEL_URL =`https://router.huggingface.co/fal/${selectedModel}`;
//       const { width,height } = getImageDimensions(aspectRatio);

//  const  imagePromises = Array.from({length:imageCount},async(_,i) => {
  
//    try{
//      const response = await fetch(MODEL_URL,{
//         headers: {
// 				Authorization:`Bearer ${API_KEY}`,
// 				"Content-Type": "application/json",
//         "x-use-cache" :"false",
// 			},
// 			method: "POST",
// 			body: JSON.stringify(data)({
//       inputs:promptText,
//       parameters:{width,height},
//       options: {wait_for_model :true, user_cache: false},
//     }),
//      });

//      if(!response.ok) throw new Error((await response.json())?.error);

//      const result = await response.blob();
//      console.log(result);
//      }catch(error){
//         console.log(error);
//      }
//  })
 
//  await Promise.allSettled(imagePromises);
    
//  };


// //create placeholder cards wuth spinners
// const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) =>{

//     gridGallery.innerHTML ="";

//     for (let i = 0; i < imageCount; i++) {
//         gridGallery.innerHTML += `<div class="img-card loading" id="img-card-${i}" style="aspect-Ratio: ${aspectRatio}">
//                 <div class="status-container">
//                     <div class="spinner"></div>
//                     <i class="fa-solid fa-triangle-exclamation"></i>
//                       <p class="status-text">Generating....</p> 
//                 </div>
//                 <img src="/image/g.PNG"  class="result-img">
//             </div>`;
        
//     }
//     generateImages(selectedModel, imageCount, aspectRatio, promptText);
// }


// const handleFormSubmit = (e) => {
//   e.preventDefault();
// // get values
//   const selectedModel = modelSelect.value;
//   const imageCount = parseInt(countSelect.value) || 1;
//   const aspectRatio = ratioSelect.value || "1/1";
//   const promptText = promptInput.value.trim();

//   createImageCards(selectedModel, imageCount, aspectRatio, promptText);
// };

// // fill input prompt
// promptBtn.addEventListener("click", () => {
//   const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
//   promptInput.value = prompt;
//   promptInput.focus();
// });

// promptForm.addEventListener("submit", handleFormSubmit);
// themeToggle.addEventListener("click", toggleTheme);



// const themeToggle = document.querySelector(".theme-toggle");
// const promptForm = document.querySelector(".prompt-form");
// const promptInput = document.querySelector(".prompt-input");
// const promptBtn = document.querySelector(".prompt-btn");

// const modelSelect = document.getElementById("model-select");
// const countSelect = document.getElementById("count-select");
// const ratioSelect = document.getElementById("ratio-select");

// const gridGallery = document.querySelector(".gallery-grid");

// const API_KEY = "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";

// const examplePrompts = [
//   "A magic forest with glowing plants and fairy homes among giant mushrooms",
//   "An old steampunk airship floating through golden clouds at sunset",
//   "A future Mars colony with glass domes and gardens against red mountains",
//   "A dragon sleeping on gold coins in a crystal cave",
//   "An underwater kingdom with merpeople and glowing coral buildings",
//   "A floating island with waterfalls pouring into clouds below",
//   "A witch's cottage in fall with magic herbs in the garden",
//   "A robot painting in a sunny studio with art supplies around it",
//   "A magical library with floating glowing books and spiral staircases",
//   "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
//   "A cosmic beach with glowing sand and an aurora in the night sky",
//   "A medieval marketplace with colorful tents and street performers",
//   "A cyberpunk city with neon signs and flying cars at night",
//   "A peaceful bamboo forest with a hidden ancient temple",
//   "A giant turtle carrying a village on its back in the ocean",
// ];

// // Set theme based on saved preferences or system default
// (() => {
//   const savedTheme = localStorage.getItem("theme");
//   const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
//   document.body.classList.toggle("dark-theme", isDarkTheme);
//   themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// })();

// // Toggle theme light/dark
// const toggleTheme = () => {
//   const isDarkTheme = document.body.classList.toggle("dark-theme");
//   localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
//   themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// };

// // Fixed: Define base size
// const baseSize = 512;

// // Fixed: Get image dimensions based on aspect ratio
// const getImageDimensions = (aspectRatio) => {
//   const [width, height] = aspectRatio.split("/").map(Number);
//   const scaleFactor = baseSize / Math.sqrt(width * height);

//   let calculatedWidth = Math.round(width * scaleFactor);
//   let calculatedHeight = Math.round(height * scaleFactor);

//   calculatedWidth = Math.floor(calculatedWidth / 16) * 16;
//   calculatedHeight = Math.floor(calculatedHeight / 16) * 16;

//   return { width: calculatedWidth, height: calculatedHeight };
// };

// // Fixed: Correct API body and fetch logic
// const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
//   const MODEL_URL = `https://router.huggingface.co/fal/${selectedModel}`;
//   const { width, height } = getImageDimensions(aspectRatio);

//   const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
//     try {
//       const response = await fetch(MODEL_URL, {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//           "x-use-cache": "false",
//         },
//         method: "POST",
//         body: JSON.stringify({
//           inputs: promptText,
//           parameters: { width, height },
//           options: { wait_for_model: true, use_cache: false },
//         }),
//       });

//       if (!response.ok) throw new Error((await response.json())?.error);

//       const result = await response.blob();
//       const imageURL = URL.createObjectURL(result);

//       const imgElement = document.querySelector(`#img-card-${i} .result-img`);
//       imgElement.src = imageURL;

//       const card = document.getElementById(`img-card-${i}`);
//       card.classList.remove("loading");
//     } catch (error) {
//       console.log(error);
//       const card = document.getElementById(`img-card-${i}`);
//       card.querySelector(".status-text").textContent = "Failed to generate";
//       card.querySelector(".spinner").style.display = "none";
//       card.querySelector(".fa-triangle-exclamation").style.display = "block";
//     }
//   });

//   await Promise.allSettled(imagePromises);
// };

// // Create placeholder image cards with spinners
// const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
//   gridGallery.innerHTML = "";

//   for (let i = 0; i < imageCount; i++) {
//     gridGallery.innerHTML += `
//       <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
//         <div class="status-container">
//           <div class="spinner"></div>
//           <i class="fa-solid fa-triangle-exclamation" style="display: none;"></i>
//           <p class="status-text">Generating...</p>
//         </div>
//         <img src="/image/g.PNG" class="result-img" />
//       </div>`;
//   }

//   generateImages(selectedModel, imageCount, aspectRatio, promptText);
// };

// // Handle form submit
// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   const selectedModel = modelSelect.value;
//   const imageCount = parseInt(countSelect.value) || 1;
//   const aspectRatio = ratioSelect.value || "1/1";
//   const promptText = promptInput.value.trim();

//   createImageCards(selectedModel, imageCount, aspectRatio, promptText);
// };

// // Fill prompt input with random example
// promptBtn.addEventListener("click", () => {
//   const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
//   promptInput.value = prompt;
//   promptInput.focus();
// });

// // Event listeners
// promptForm.addEventListener("submit", handleFormSubmit);
// themeToggle.addEventListener("click", toggleTheme);



// const themeToggle = document.querySelector(".theme-toggle");
// const promptForm = document.querySelector(".prompt-form");
// const promptInput = document.querySelector(".prompt-input");
// const promptBtn = document.querySelector(".prompt-btn");

// const modelSelect = document.getElementById("model-select");
// const countSelect = document.getElementById("count-select");
// const ratioSelect = document.getElementById("ratio-select");

// const gridGallery = document.querySelector(".gallery-grid");

// const API_KEY = "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"; // <-- Your Hugging Face key

// const examplePrompts = [
//   "A futuristic city floating above the clouds",
//   "A magical forest with glowing animals",
//   "Cyberpunk warrior in rainy Tokyo street",
//   "A giant crystal castle on an icy mountain",
//   "Astronaut relaxing on Mars with sunset view",
//   "Robot playing guitar in a neon-lit cafe"
// ];

// // Set theme from localStorage or system preference
// (() => {
//   const savedTheme = localStorage.getItem("theme");
//   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
//   document.body.classList.toggle("dark-theme", isDark);
//   themeToggle.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
// })();

// // Toggle theme
// const toggleTheme = () => {
//   const isDark = document.body.classList.toggle("dark-theme");
//   localStorage.setItem("theme", isDark ? "dark" : "light");
//   themeToggle.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
// };

// // Base size for image scaling
// const baseSize = 512;

// // Calculate width/height from aspect ratio
// const getImageDimensions = (aspectRatio) => {
//   const [w, h] = aspectRatio.split("/").map(Number);
//   const scale = baseSize / Math.sqrt(w * h);
//   let width = Math.floor((w * scale) / 16) * 16;
//   let height = Math.floor((h * scale) / 16) * 16;
//   return { width, height };
// };

// const UpdateImageCard = (imageIndex,imageUrl) =>{
//   const imgCard = document .getElementById(`img-card-${imageIndex}`);
//   if(!imgCard) return;

//   imgCard.classList .remove("loading");
//   imgCard .innerHTML=` 
//                 <img src="${imageUrl}"  class="result-img">
//                 <div  class="img-overlay">
//                     <a  href="${imageUrl}"class="img-download-btn" download="${Data.now()}.png">
//                         <i class="fa-solid fa-download"></i> 
//                     </a>
//                 </div>`;
// }

// // Generate images using Hugging Face model
// const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
//   const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
//   const { width, height } = getImageDimensions(aspectRatio);

//   const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
//     try {
//       const response = await fetch(MODEL_URL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           inputs: promptText,
//           parameters: {
//             width,
//             height
//           },
//           options: {
//             wait_for_model: true
//           }
//         })
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText);
//       }

//       const blob = await response.blob();
//       UpdateImageCard(i,URL.createObjectURL(result));
//       const imageURL = URL.createObjectURL(blob);
//       const imgElement = document.querySelector(`#img-card-${i} .result-img`);
//       imgElement.src = imageURL;

//       document.getElementById(`img-card-${i}`).classList.remove("loading");

//     } catch (err) {
//       console.error("Generation Error:", err.message);
//       const card = document.getElementById(`img-card-${i}`);
//       card.querySelector(".status-text").textContent = "Failed";
//       card.querySelector(".spinner").style.display = "none";
//       card.querySelector(".fa-triangle-exclamation").style.display = "block";
//     }
//   });


//   await Promise.allSettled(imagePromises);
// };

// // Create placeholder image cards
// const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
//   gridGallery.innerHTML = "";

//   for (let i = 0; i < imageCount; i++) {
//     gridGallery.innerHTML += `
//       <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
//         <div class="status-container">
//           <div class="spinner"></div>
//           <i class="fa-solid fa-triangle-exclamation" style="display: none;"></i>
//           <p class="status-text">Generating...</p>
//         </div>
//       </div>`;
//   }

//   generateImages(selectedModel, imageCount, aspectRatio, promptText);
// };

// // Form submit handler
// const handleFormSubmit = (e) => {
//   e.preventDefault();
//   const selectedModel = modelSelect.value;
//   const imageCount = parseInt(countSelect.value) || 1;
//   const aspectRatio = ratioSelect.value || "1/1";
//   const promptText = promptInput.value.trim();
//   createImageCards(selectedModel, imageCount, aspectRatio, promptText);
// };

// // Fill input with random prompt
// promptBtn.addEventListener("click", () => {
//   const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
//   promptInput.value = prompt;
//   promptInput.focus();
// });

// // Event listeners
// promptForm.addEventListener("submit", handleFormSubmit);
// themeToggle.addEventListener("click", toggleTheme);




// const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
//   const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
//   const { width, height } = getImageDimensions(aspectRatio);

//   const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
//     try {
//       const response = await fetch(MODEL_URL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           inputs: promptText,
//           parameters: { width, height },
//           options: { wait_for_model: true }
//         }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText);
//       }

//       let imageURL;

//       // Check content-type header
//       const contentType = response.headers.get("Content-Type");

//       if (contentType.includes("application/json")) {
//         const json = await response.json();
//         if (json.hasOwnProperty("generated_image")) {
//           // Some models may respond with "generated_image"
//           imageURL = `data:image/png;base64,${json.generated_image}`;
//         } else if (Array.isArray(json) && json[0]?.hasOwnProperty("image")) {
//           // For responses like [{ image: "base64string..." }]
//           imageURL = `data:image/png;base64,${json[0].image}`;
//         } else {
//           throw new Error("Model returned unexpected JSON.");
//         }
//       } else {
//         // Otherwise, assume it's a blob (binary image)
//         const blob = await response.blob();
//         imageURL = URL.createObjectURL(blob);
//       }

//       const imgElement = document.querySelector(`#img-card-${i} .result-img`);
//       imgElement.src = imageURL;

//       const card = document.getElementById(`img-card-${i}`);
//       card.classList.remove("loading");
//     } catch (err) {
//       console.error("Image generation error:", err.message);
//       const card = document.getElementById(`img-card-${i}`);
//       card.querySelector(".status-text").textContent = "Failed";
//       card.querySelector(".spinner").style.display = "none";
//       card.querySelector(".fa-triangle-exclamation").style.display = "block";
//     }
//   });

//   await Promise.allSettled(imagePromises);
// };



const themeToggle = document.querySelector(".theme-toggle");
const promptForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");

const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");

const gridGallery = document.querySelector(".gallery-grid");

const API_KEY = "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"; // <-- Your Hugging Face key

const examplePrompts = [
  "A futuristic city floating above the clouds",
  "A magical forest with glowing animals",
  "Cyberpunk warrior in rainy Tokyo street",
  "A giant crystal castle on an icy mountain",
  "Astronaut relaxing on Mars with sunset view",
  "Robot playing guitar in a neon-lit cafe"
];

// Set theme from localStorage or system preference
(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();

// Toggle theme
const toggleTheme = () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
};

// Base size for image scaling
const baseSize = 512;

// Calculate width/height from aspect ratio
const getImageDimensions = (aspectRatio) => {
  const [w, h] = aspectRatio.split("/").map(Number);
  const scale = baseSize / Math.sqrt(w * h);
  let width = Math.floor((w * scale) / 16) * 16;
  let height = Math.floor((h * scale) / 16) * 16;
  return { width, height };
};

// Generate images using Hugging Face model
const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
  const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
  const { width, height } = getImageDimensions(aspectRatio);

  const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
    try {
      const response = await fetch(MODEL_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: promptText,
          parameters: {
            width,
            height
          },
          options: {
            wait_for_model: true
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const blob = await response.blob();
      const imageURL = URL.createObjectURL(blob);
      const imgElement = document.querySelector(`#img-card-${i} .result-img`);
      imgElement.src = imageURL;

      document.getElementById(`img-card-${i}`).classList.remove("loading");

    } catch (err) {
      console.error("Generation Error:", err.message);
      const card = document.getElementById(`img-card-${i}`);
      card.querySelector(".status-text").textContent = "Failed";
      card.querySelector(".spinner").style.display = "none";
      card.querySelector(".fa-triangle-exclamation").style.display = "block";
    }
  });

  await Promise.allSettled(imagePromises);
};

// Create placeholder image cards
const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
  gridGallery.innerHTML = "";

  for (let i = 0; i < imageCount; i++) {
    gridGallery.innerHTML += `
      <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
        <div class="status-container">
          <div class="spinner"></div>
          <i class="fa-solid fa-triangle-exclamation" style="display: none;"></i>
          <p class="status-text">Generating...</p>
        </div>
        <img src="/image/g.PNG" class="result-img" />
      </div>`;
  }

  generateImages(selectedModel, imageCount, aspectRatio, promptText);
};

// Form submit handler
const handleFormSubmit = (e) => {
  e.preventDefault();
  const selectedModel = modelSelect.value;
  const imageCount = parseInt(countSelect.value) || 1;
  const aspectRatio = ratioSelect.value || "1/1";
  const promptText = promptInput.value.trim();
  createImageCards(selectedModel, imageCount, aspectRatio, promptText);
};

// Fill input with random prompt
promptBtn.addEventListener("click", () => {
  const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  promptInput.value = prompt;
  promptInput.focus();
});

// Event listeners
promptForm.addEventListener("submit", handleFormSubmit);
themeToggle.addEventListener("click", toggleTheme);
