let keys = Object.keys(localStorage).sort();
let container = document.getElementById('history');

if (localStorage.length > 0) {
  let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('pass'));
  storedKeys.sort((a, b) => {
    let indexA = parseInt(a.slice(4));
    let indexB = parseInt(b.slice(4));
    return indexB - indexA;
  });

  let index = 0;

  storedKeys.forEach((key) => {
    let date = localStorage.getItem('date' + key.slice(4));
    let month = localStorage.getItem('month' + key.slice(4));
    let year = localStorage.getItem('year' + key.slice(4));
    let value = localStorage.getItem('pass' + key.slice(4));

    let pTag = document.createElement('p');
    pTag.id = 'p' + index;

    let spanTag = document.createElement('span');
    // let span0Tag = document.createElement('span');
    let button = document.createElement('button');
    let deletebtn = document.createElement('button');

    button.innerText = 'Copy';
    button.classList.add('copy-button');
    button.style.background = 'rgb(34, 255, 0)';
    button.style.margin = '0 6px';
    button.style.borderRadius='4px'

    button.style.padding = '3px 6px';

    deletebtn.innerText = 'Remove';
    deletebtn.style.background = 'red';
    deletebtn.style.padding = '3px 4px';
    deletebtn.style.borderRadius='4px'

    let span3Tag = document.createElement('span');
    span3Tag.id = 'span' + index;
    span3Tag.style.padding = '2px 20px';
    span3Tag.style.display = 'flex';
    span3Tag.style.justifyContent = 'center';
    span3Tag.style.background = 'white';
    span3Tag.innerText = value;
    span3Tag.style.borderRadius='4px'


    spanTag.style.color = 'white';
    spanTag.style.display = 'flex';
    spanTag.style.borderRadius='4px'
    spanTag.classList.add('date');

    spanTag.style.background = 'blue';
    spanTag.style.justifyContent = 'center';
    spanTag.innerText = `${date} / ${month} / ${year}`;

    // span0Tag.innerText = 'Password :-';
    // span0Tag.style.display = 'flex';
    // span0Tag.style.padding = '2px 2px';

    // span0Tag.style.justifyContent = 'center';
    // span0Tag.style.background = 'red';
    // span0Tag.style.width = '100px';

    pTag.classList.add('ptag');
    spanTag.classList.add('fontsize');
    span3Tag.classList.add('width');
    span3Tag.classList.add('fontsize');
    button.classList.add('fontsize');
    button.classList.add('cursor');
    deletebtn.classList.add('fontsize');
    deletebtn.classList.add('cursor');
    container.appendChild(pTag);
    pTag.appendChild(spanTag);
    // pTag.appendChild(span0Tag);
    pTag.appendChild(span3Tag);
    pTag.appendChild(button);
    pTag.appendChild(deletebtn);

    // Create a closure to capture the index and key for each button
    (function(index, key) {
      button.addEventListener('click', () => {
        let text = document.getElementById('span' + index);
        const textToCopy = text.innerText;
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            Array.from(document.querySelectorAll('button.copy-button')).forEach((element) => {
              if (element !== button) {
                element.innerText = 'Copy';
                element.style.background = 'rgb(34, 255, 0)';
              }
            });
            button.innerText = 'Copied';
            button.style.background = 'green';
            console.log("Text copied to clipboard!");
          })
          .catch((error) => {
            console.error("Unable to copy text: ", error);
          });
      });

      deletebtn.addEventListener('click', () => {
        let deletefile = confirm('Do you want to delete this password');
        if (deletefile) {
          localStorage.removeItem('date' + key.slice(4));
          localStorage.removeItem('month' + key.slice(4));
          localStorage.removeItem('year' + key.slice(4));
          localStorage.removeItem('pass' + key.slice(4));

          // Remove corresponding HTML element
          let pTag = document.getElementById('p' + index);
          if (pTag) {
            pTag.parentNode.removeChild(pTag);
            
          }
        }
      });
    })(index, key);

    index++;
  });
}

