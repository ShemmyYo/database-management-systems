
document.addEventListener('DOMContentLoaded', function () {
  // Sidebar init
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Modat Init
  let modalEl = document.querySelectorAll('.modal');
  M.Modal.init(modalEl);

  // Date picker Init
  let datePickerEl = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datePickerEl, {
    format: "dd mmmm, yyyy",
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });

  // Option picker Init
  let optionPickerEl = document.querySelectorAll('select');
  M.FormSelect.init(optionPickerEl);

  // Calapsables 
  let calapsablesEl = document.querySelectorAll('.collapsible');
  M.Collapsible.init(calapsablesEl);

  });