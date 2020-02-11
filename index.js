$(document).ready(() => {
  const $addTodo = $('#todo-button');
  const $todoInput = $('#todo-input');


  let mainArray = [];

  $(document).on(`change`, `.check-todo`, function () {
    const changeCheck = parseInt($(this).parent()
      .attr(`id`));

    mainArray.forEach(item => {
      if (changeCheck === item.id) {
        item.checked = !item.checked;
      }
    });
  });

  
  const taskList = glob => {
    let str = '';
    glob.forEach((item) => {
        str += `<div id="${item.id}">
          <input type="checkbox" class="check-todo" ${item.checked ? 'checked' : ''} /></div>
      <div id=${item.id }>${item.text}</div>`;
    });
return str;
  }

  const render = glob => {
    $(`#out-todo`).html(taskList(glob));
  };

  const fixText = text => {
    return text.trim()
  }

  const addListTask = () => {
    const text = fixText($todoInput.val());
    const newTodo = {
      checked: false,
      id: Date.now(),
      text: text.trim(),
    };
    
    if (text === '') return;
    mainArray.unshift(newTodo);
    $todoInput.val('');
  };

  $addTodo.on('click', () => {
    addListTask();
    render(mainArray)
   
  });
})
