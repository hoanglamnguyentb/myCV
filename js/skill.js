import { getItem, setItem, generateNewId, formatDate, pageReload, debounce, replace, replaceChild } from './utility.js';
import { categories_reset } from './data.js';
showSkills();
let handle = '';
let id = 0;
function showSkills() {
  let categories = getItem('categories');
  let htmlResult = '';
  let categoryLengt = categories.length;
  categories.forEach((category, i) => {
    let htmlChild = '';
    let upDownMenu = '';
    if (i == 0 && i == categoryLengt - 1) {
      upDownMenu = '';
    } else if (i == 0) {
      upDownMenu = `<div class="item-icon-simple category-down" style="cursor: pointer"
														data-id="${category['id']}" data-parent="${category['parent_id']}">
														<i class="bi bi-arrow-down"></i>
													</div>`;
    } else if (i == categoryLengt - 1) {
      upDownMenu = `<div class="item-icon-simple category-up" style="cursor: pointer"
														data-id="${category['id']}" data-parent="${category['parent_id']}">
														<i class="bi bi-arrow-up"></i>
													</div>`;
    } else {
      upDownMenu = `<div class="item-icon-simple category-up" style="cursor: pointer"
														data-id="${category['id']}" data-parent="${category['parent_id']}">
														<i class="bi bi-arrow-up"></i>
														</div>
														<div class="item-icon-simple category-down" style="cursor: pointer"
														data-id="${category['id']}" data-parent="${category['parent_id']}">
														<i class="bi bi-arrow-down"></i>
													</div>`;
    }
    var skills = category['skills'].split(';');
    skills.forEach((skill, j) => {
      htmlChild += `<li class="skill-item" data-parent="${category['id']}">${skill}</li>`;
    });
    htmlResult += `<div class="category category-edit" data-id="${category['id']}">
												<div class="topic-menu" style="display:none">
													${upDownMenu}
													<div class="item-icon-simple icon-red category-delete" style="cursor: pointer"
													data-id="${category['id']}">
													<i class="bi bi-x-lg"></i>
													</div>
												</div>
												<div class="category-title topic-child-title"><span>${category['title']}</span></div>
												<ul class="skill-list">
													${htmlChild}
												</ul>
											</div>`;
  });
  $('#skills-data').html(htmlResult);
}

//Xoá category
$('.page-right').on('click', '.category-delete', function (e) {
  console.log('Hello');
  e.stopPropagation();
  handle = 'delete';
  id = $(this).data('id');
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      handleCategory(id, handle);
      // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      location.reload();
    }
  });
});
//1.4 Các hàm dùng chung Topic
function handleCategory(id = 0, handle = 'add') {
  // param = 1 => thêm; param = 0 => sửa; param = -1 => xoá
  let categories = getItem('categories');
  if (handle == 'add') {
    // Thêm
    let id = generateNewId(topics);
    let title = $('#category-title').val();
    let skills = $('#category-skills').val();
    let category = {
      id: id,
      title: title,
      skills: skills,
    };
    categories.push(category);
  } else if (handle == 'edit') {
    let index = categories.findIndex((item) => item.id == id);
    let title = $('#category-title').val();
    let skills = $('#category-skills').val();
    let new_category = {
      id: id,
      title: title,
      skills: skills,
    };
    categories[index] = new_category;
  } else {
    categories = categories.filter((item) => item.id != id);
  }
  setItem('categories', categories);
  $('#category-title').val('');
  $('#category-skills').val('');
  showSkills();
}

// Đổi vị trí
$('.page-right').on('click', '.category-up', function (e) {
  e.stopPropagation();
  let categories = getItem('categories');
  let id = $(this).data('id');
  let index = categories.findIndex((item) => item.id == id);
  categories = replace(categories, index, 'up');
  setItem('categories', categories);
  location.reload();
});

$('.page-right').on('click', '.category-down', function (e) {
  e.stopPropagation();
  let categories = getItem('categories');
  let id = $(this).data('id');
  let index = categories.findIndex((item) => item.id == id);
  categories = replace(categories, index, 'down');
  setItem('categories', categories);
  location.reload();
});

function showFormHandleCategory(id = 0) {
  if (id != 0) {
    let categories = getItem('categories');
    let category = categories.find((item) => item.id == id);
    $('#category-title').val(category['title']);
    $('#category-skills').val(category['skills']);
  } else {
    $('#category-title').val('');
    $('#category-skills').val('');
  }
  $('#category-title').focus();
  $('.popup-backdrop').fadeIn(300);
  $('.handle-category').animate(
    {
      top: '50px',
    },
    300
  );
}
$('.page-right').on('click', '.category-edit', function (e) {
  console.log('Hello');
  if ($(this).hasClass('category-edit')) {
    console.log('Hello');
    handle = 'edit';
    id = $(this).data('id');
    showFormHandleCategory(id);
  }
});

$('#handle-category').submit(function (e) {
  handleCategory(id, handle);
});
