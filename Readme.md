# index.js
firstly we are getting the elements from the html file into js 
then we have created a object which contains the static data provided 
then we have created a function to create box for each object in the data array it will generate the card based on the data 
inside that fuction we have created a div 
than we are setting the inner html with image and the text and after that we have an addeventListener 
on the box to handle the speech adn we are appending the child to the main section 


 then we are calling the createbox function for each element of te array object after that we we have daclared a variable called voices which is an empty array 

 then we have  Function to get available voices and populate the voice selection dropdown
 inside that function we have   voices = speechSynthesis.getVoices(); this part of code which is for getting the availabe voices 
 then we are creating the option element to show the list of voices 
 
 then we Setting  the value of the option to the voice name
 after that we are setting the text of the content of the option and appending it to html 
    <!-- option.innerText = `${voice.name} ${voice.lang}`; 
    voicesSelect.appendChild(option); -->



then we have a function called handleSpeech  which is used to handle the speech synthesis for the text and box 
after that we are setting the text for the speech synthesis
then we are triggering to the speechText() calling 

then we are adding the active class to the box 
after that we have a setTimeout to remove the active class after the given time 

then we are creating the new speech synthesis

<!-- const message = new SpeechSynthesisUtterance(); -->

then we have Function to set the text message for speech synthesis



then we have Function to trigger speech synthesis which is used to  Use the Speech Synthesis API to speak the text

then we have Function to set the voice for speech synthesis based on user selection

then we finding the the voice nd setting it based on user selection 

then we have a toggle button which will trigger the visibility of the text box when the button is clicked 
then we have another toggle which is on the close button for removing the the shown text box on click of toggle button if the textbox is open  

then we have added a event listener for whenever someone choose any athor option for diffrebt voice from the dropdown 
then another eventlistener will set the value of selected voice from the dropdown 
 then a addeventListener for Read the text from the textarea and trigger speech synthesis when the "read" button is clicked
 inside this eventlistener we are setting the text of the text area with the user given input 
 then we are calling the speakText() to speak the text given by the user


<!-- speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", setVoice);
readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
}); -->

<!-- getVoices(); -->