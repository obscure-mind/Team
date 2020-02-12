$(document).ready(() => {
  const $addTodo = $('#todo-button');
  const $todoInput = $('#todo-input');
  
  let mainArray = [];
  let completeArray = [];
  let firstId;
  const colors = ['red','blue','yellow','pink','turquoise','purple']

  $(document).on(`change`, `.check-todo`, function () {

    const changeCheck = parseInt($(this).parent().parent()
      .attr(`id`));


    mainArray.forEach(item => {

      if (changeCheck === item.id) {
        item.checked = !item.checked;
      }
    });
    countTrue();
    //console.log(completeArray, "CO")
  });

  const taskList = glob => {
    let str = '';
    glob.forEach((item) => {
      console.log('Item',item)
        str += `<div id="${item.id}" class="list-element ${item.class} complete" >
          <label><input type="checkbox" class="check-todo" ${item.checked ? 'checked' : ''} /></label>
      <div id=${item.id }  class="color kek" >${item.text}</div></div>`;
    });
return str;
  }

  const countTrue = () => {
    completeArray = mainArray.filter(item => item.checked === true);
  }

$( '.btn-color' ).click(function() {
  completeArray.forEach(item => {
    $('#'+item.id).removeClass();
    $('#'+item.id).addClass('list-element complete ' + $(this).data('color-class'));
  });
});

/*
  $(document).on(`click`, '#10', () => {
    completeArray.forEach(item => {
      console.log(item, "ITEM")
      item.class = ".red";
      console.log(completeArray, "completeArray")
    });
  })

  $(document).on(`click`, '#20', () => {
    
    completeArray.forEach(item => {
     
      item.class = ".pink";
      console.log(completeArray, "completeArray")
    });
  })

  $(document).on(`click`, '#30', () => {
    completeArray.forEach(item => {
      item.class = "purple";
      console.log(completeArray, "completeArray")
    });
  })

  $(document).on(`click`, '#40', () => {
    completeArray.forEach(item => {
      //item.class = "yellow";
      $('#'+item.id).addClass('yellow');
      console.log(completeArray, "completeArray")
    });
  })

  $(document).on(`click`, '#50', () => {
    completeArray.forEach(item => {
      item.class = "blue";
      console.log(completeArray, "completeArray")
    });
  })

  $(document).on(`click`, '#60', () => {
    completeArray.forEach(item => {
      item.class = "turquoise";
      console.log(completeArray, "completeArray")
    });
  })*/





  const render = glob => {

    $(`#out-todo`).html(taskList(glob));
  };

  const fixText = text => {
    return text.trim()
  }

  const addListTask = () => {
    const text = fixText($todoInput.val());
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newTodo = {
      checked: false,
      id: Date.now(),
      text: text.trim(),
      class: randomColor
    };
    
    if (text === '') return;
    mainArray.unshift(newTodo);
    $todoInput.val('');
  };

  $addTodo.on('click', () => {
    addListTask();
    randomChange()
    
    render(mainArray)
    // changeColor()
  });


  let randomNumber 

  let randomChange = () => {
    function random(min, max) {
      return min + Math.random() * (max - min);
    }
  randomNumber = Math.floor(random(1, 7))
console.log(randomNumber, "RANDOM")
  }
  

  $(document).on(`click`, `.btn`, function () {
    if(randomNumber == 1){
      firstId = mainArray[0].id
    $('firstId').addClass("red")
console.log('TEST',this)
  console.log(firstId, "FIR")
    }

  });
  

//   let changeColor = () => {
//     $color = '#f379a2'
// if(randomNumber == 1){
  // firstId = mainArray[0].id
  // console.log(firstId, "FIR")

  // let elem = document.getElementById('firstId');
  // elem.setAttribute('background', red);
  // console.log(mainArray[0], "ITEM")

// }
//  }
// let fun = () =>{
//   $('#firstId').css('background-color', '#f379a2')
// }
//   fun()

  // .removeClass('kek')
  // .addClass('red')
//  $("div").addClass(function(index, currentClass) {
  //       let addedClass;
  //       if ( currentClass === "color" ) {
  //         addedClass = "red";
  //         $("p").text("There is red div");
  //       }
  //       return addedClass;
  //     });
//  .removeClass('kek').addClass('red')
  // let a = mainArray[0]  

// if(randomNumber == 2){
//   mainArray[0].addClass('pink')
// }
// if(randomNumber == 3){
//   mainArray[0].addClass('purple')
// }
// if(randomNumber == 4){
//   mainArray[0].addClass('yellow')
// }
// if(randomNumber == 5){
//   mainArray[0].addClass('blue')
// }
// if(randomNumber == 6){
//   mainArray[0].addClass('turquoise')
// }



//  o = mainArray.forEach(item => {
//     item.class = "lol";
//     console.log(o, "OOO")
  // });

})
