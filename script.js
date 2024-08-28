function calculateLength(){
  
    const inputField = document.getElementById('myLength');
    const paragraph = document.getElementById('sid');
    
    inputField.addEventListener('input', () => {
      const inputValue = inputField.value;
      const length = inputValue.length;
      paragraph.textContent = `Length: ${length}`;
    });
    
        
    }