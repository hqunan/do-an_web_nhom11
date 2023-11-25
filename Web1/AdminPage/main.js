var signin_wrapper = document.getElementById('signin-wrapper');
var login_wrapper = document.getElementById('login-wrapper');
var modal_signin = document.getElementById('modal-signin');
var modal_login = document.getElementById('modal-login');
var modal_search = document.getElementById('modal-search');
var modal_user_search = document.getElementById('user-page-modal-search');
var modal_product_detail = document.getElementById('user-page-modal-product-detail');
var modal_bill_detail = document.getElementById('modal-billDetail');
var sectionStranger = document.getElementById('stranger-page');
var sectionUser = document.getElementById('user-page')
var sectionCart = document.getElementById('user-cart-page');
function showSectionStranger() {
      localStorage.removeItem('userlogin');
      sectionCart.style.display = 'none';
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'block';
      scrollToTop()
}
function showSectionUser() {
      sectionCart.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionUser.style.display = 'block';
      createAdmin();
      createProduct();
      showProductUser(0);
      helloUser('user-page-helloUser');
      showQuantityOfCart('user-page-cart-quantity');
      createSlideShowArray();
      moveSlideShow('user_page_slideShow_img');
      scrollToTop()
}
function showSectionCart() {
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionCart.style.display = 'block';
      createAdmin();
      createProduct();
      showCart();
      helloUser('user-cart-page-helloUser');
      showQuantityOfCart('user-cart-page-cart-quantity');
      scrollToTop();
}
function showTimeNow() {
      let time_now = document.getElementById('time-now');
      let date = new Date();
      /* let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate(); */
      let date_hour = date.getHours();
      if(date_hour < 10) {
            date_hour = date_hour.toString();
            date_hour = 0 + date_hour
      } else {
            date_hour = date_hour.toString();
      }
      let date_minute = date.getMinutes();
      if(date_minute < 10) {
            date_minute = date_minute.toString();
            date_minute = 0 + date_minute
      } else {
            date_minute = date_minute.toString();
      }
      let date_second = date.getSeconds();
      if(date_second < 10) {
            date_second = date_second.toString();
            date_second = 0 + date_second
      } else {
            date_second = date_second.toString();
      }
      let timeNowTemp = `${date_hour}:${date_minute}:${date_second}`;
      time_now.innerHTML = timeNowTemp;
}
setInterval(showTimeNow,1000);
function showSignin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
      modal_signin.style.display = 'block';
      signin_wrapper.style.display = 'block';
}
function showLogin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
      modal_login.style.display = 'block';
      login_wrapper.style.display = 'block';
}
function closeLogin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
}
function closeSignin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
}
/*-----------------------------------------------------------------------------------------------------  */
//?                                                              Validate
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCharsForEmail = "<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=";
var specialCharsForPhoneNumber = "@.<>!#$%^&*()_+[]{}?:;|'\"\\,/~`-=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function checkForSpecialChar(string){
      for(i = 0; i < specialChars.length;i++){
            if(string.indexOf(specialChars[i]) > -1){
                  return true;
            }
      }
      return false;
}
function checkForSpecialCharForEmail(string){
      for(i = 0; i < specialCharsForEmail.length;i++){
            if(string.indexOf(specialCharsForEmail[i]) > -1){
                  return true;
            }
      }
      return false;
}
function checkForSpecialCharForPhoneNumber(string){
      for(i = 0; i < specialCharsForPhoneNumber.length;i++){
            if(string.indexOf(specialCharsForPhoneNumber[i]) > -1){
                  return true;
            }
      }
      return false;
}
//? Test 
/* var temp = 'minh0772912452';
if (checkForPhoneNumber(temp) == true) { //! check
      console.log('not valid'); //? Có kí tự đặc biệt
} else if (checkForPhoneNumber(temp) == false) {
      console.log('valid');   //? Không có kí tự đặc biệt
} */
/* -------------------------------------------------------------------------------------------------------------------- */

function validateSignin() {
      var flag = true;
      var fullname = document.getElementById('signin-fullname').value;
      var fullname_error = document.getElementById('signin-fullname-error');
      var username = document.getElementById('signin-username').value;
      var username_error = document.getElementById('signin-username-error');
      var email = document.getElementById('signin-email').value;
      var email_error = document.getElementById('signin-email-error');
      var phone = document.getElementById('signin-phone').value;
      var phone_error = document.getElementById('signin-phone-error');
      var password = document.getElementById('signin-password').value;
      var password_error = document.getElementById('signin-password-error');
      var repassword = document.getElementById('signin-repassword').value;
      var repassword_error = document.getElementById('signin-repassword-error');
      //? Fullname validate
      if (fullname == '' || fullname.length < 4 || checkForSpecialChar(fullname) == true) {
            fullname_error.style.display = 'block';   
            flag = false;
      } else {
            fullname_error.style.display = 'none';
      }
      //? Username validate
      if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
            console.log(username)
            username_error.style.display = 'block';   
            flag = false;
      } else {
            username_error.style.display = 'none';
      }
      //? Email validate
      if (email == '' || email.length < 10 || checkForSpecialCharForEmail(email) == true) {
            email_error.style.display = 'block';    
            flag = false;
      } else {
            email_error.style.display = 'none';   
      }
      //? Phone validate
      if (phone == '' || phone.length > 12 ||phone.length < 5 || checkForSpecialCharForPhoneNumber(phone) == true) {
            phone_error.style.display = 'block';    
            flag = false;
      } else {
            phone_error.style.display = 'none';   
      }
      //? Password validate
      if (password == '' || password.length < 6) {
            password_error.style.display = 'block';    
            flag = false;
      } else {
            password_error.style.display = 'none';   
      }
      //? Repassword validate
      if(repassword != password || repassword == '') {
            repassword_error.style.display = 'block'; 
            flag = false;
      } else {
            repassword_error.style.display = 'none';
      }
      return flag;
}
//?                                                          Signin Login Logout
function signin() {

      let date = new Date();
      let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate();
      let date_hour = date.getHours();
      let date_minute = date.getMinutes();
      let date_second = date.getSeconds();
      let timeCreate = `${date_hour}:${date_minute}:${date_second} <br> ${date_day} - ${date_month} - ${date_year}`;


      var fullname = document.getElementById('signin-fullname');
      var username = document.getElementById('signin-username');
      var email = document.getElementById('signin-email');
      var phone = document.getElementById('signin-phone');
      var password = document.getElementById('signin-password');
      var repassword = document.getElementById('signin-repassword');
      
      if(validateSignin() == true) {
            var user = {
                  fullname:fullname.value,
                  username:username.value,
                  email:email.value,
                  phone:phone.value,
                  password:password.value,
                  date_create:timeCreate,
                  value:10,
            }
            if(localStorage.getItem('userlist') == null) {
                  var userlist = [];
                  userlist.push(user);
                  localStorage.setItem('userlist',JSON.stringify(userlist));
            }
            else {
                  let userlist = JSON.parse(localStorage.getItem('userlist'));
                  userlist.push(user);
                  localStorage.setItem('userlist', JSON.stringify(userlist));
            }
            //! Xóa nội dung
            fullname.value = '';
            username.value = '';
            email.value = '';
            phone.value = '';
            password.value = '';
            repassword.value = '';
            signin_wrapper.style.display = 'none';
            customAlert('Bạn đã đăng ký thành công','success');
            setTimeout(function() {
                  closeSignin();
            showLogin();
            },500)
      }
}
function validateLogin() {
      let flag = true;
      var username = document.getElementById('login-username').value;
      var username_error = document.getElementById('login-username-error');
      var password = document.getElementById('login-password').value;
      var password_error = document.getElementById('login-password-error');
      if (username == '' || username.length < 4 || checkForSpecialChar(username) == true) {
            flag = false;
            username_error.style.display = 'block';

      } else {
            flag = true;
            username_error.style.display = 'none';
      }
      if (password == '' || password.length < 4) {
            flag = false;
            password_error.style.display = 'block';
      } else {
            flag = true;
            password_error.style.display = 'none';
      }
      return flag;
}
function userlogin(username) {
      if(localStorage.getItem('userlogin') == null) {
            var userlist = JSON.parse(localStorage.getItem('userlist'));
            let i;
            for (i = 0; i < userlist.length; i++) {
                  if(userlist[i].username == username) break;
            }
            var temp = {
                  fullname : userlist[i].fullname,
                  username : userlist[i].username,
                  email : userlist[i].email,
                  phone : userlist[i].phone,
                  password : userlist[i].password,
                  value:userlist[i].value,
            }
            localStorage.setItem('userlogin',JSON.stringify(temp));
      } else {
            localStorage.removeItem('userlogin');
            userlogin(username);
      }
      
}
function login () {
      var username = document.getElementById('login-username');
      var username_error = document.getElementById('login-username-error');
      var password = document.getElementById('login-password');
      var password_error = document.getElementById('login-password-error');
      var userlist = JSON.parse(localStorage.getItem('userlist'));
      if(validateLogin() == true) {
            let i = 0;
            while(i < userlist.length) {
                  if(userlist[i].username == username.value) {
                        break;
                  }
                  i++;
            }
            if(i < userlist.length) { //! Check username
                  /* console.log('Đã có username này') */
                  if(userlist[i].password == password.value) { //! Check password
                        userlogin(userlist[i].username);
                        /* console.log('Đã đúng mật khẩu') */
                        if(userlist[i].value == 100) {
                              customAlert('Bạn đã đăng nhập thành công','success');
                              setTimeout(function(){
                                    window.location.href = 'AdminPage/index.html';   //! Link đến web ADMIN
                              },500)
                              
                        } else {
                              username.value = "";
                              password.value = "";
                              customAlert('Bạn đã đăng nhập thành công','success');
                              setTimeout(function() {
                                    closeLogin();
                                    showSectionUser();
                              },500)
                        }

                  } else {
                        /* console.log('Sai mật khẩu') */
                        password_error.style.display = 'block';
                  }
            } else {
                  /* console.log('Không tồn tại username này') */
                  username_error.style.display = 'block';
            }
      }
      
}
//?                                                         Đắng xuất user + admin
function logout() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(showSectionStranger(),500);
      } 
}
function logoutAdmin() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(function(){
                  window.location.href = '/Web1/index.html'; 
            }, 500);
      } 
}
/*! ---------------------------------------------------------------------------------------------- */
//?                                                   Tạo admin + tạo sản phẩm
function createAdmin() {
      if(localStorage.getItem('userlist') == null) {
            var userlist = [];
            var admin = {
                  username: 'admin',
                  password: 'admin',
                  fullname: 'Nhóm 11',
                  sdt:'0562087314',
                  email:'hoangquan016@gmail.com',
                  value:100,
            }
            userlist.push(admin);
            localStorage.setItem('userlist',JSON.stringify(userlist));
      } else {
            var userlist = JSON.parse(localStorage.getItem('userlist'));
            let flag = false;
            for (let i = 0; i < userlist.length; i++) {
                  if(userlist[i].username == 'admin') {
                        flag = true;
                  }
            }
            if(flag == false) {
                  var admin = {
                        username: 'admin',
                        password: 'admin',
                        fullname: 'Nhóm 11',
                        sdt:'0562087314',
                        email:'hoangquan016@gmail.com',
                        value:100,
                  }
                  userlist.push(admin);
                  localStorage.setItem('userlist',JSON.stringify(userlist));
            }
      }
}
//!Propduct 
/*    productId
      img
      name
      price
*/
function createProduct() {
      if (localStorage.getItem('product') == null) {
            var productArray = [
                  {productId:100,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/250_BnjhFXEtjy4tu6aN46rgkfEL3.jpg',name:'Oceanic',price:299000},
                  {productId:101,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_JQisipuTtIHCmWnsFbkeLrd5k.webp',name:'La Vie En Rose',price:329000},
                  {productId:102,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/250_A5lxWQazmYP2eWYaElcOXus0L.webp',name:'Hẹn Thương',price:329000},
                  {productId:103,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/250_CJdqphTj2inAgamCk3IAqUMuz.webp',name:'Say You Do',price:429000},
                  {productId:104,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_YPw7cbVX73VkKefDn0mZsGCX8.jpg',name:'Forever 18',price:329000},
                  {productId:105,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_tp8pYcd4CPbOGkMECGu6CPPWZ.webp',name:'Ariana',price:329000},
                  {productId:106,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/250_3oYcJLT1lFjM9r8gJgVTijvLD.jpg',name:'Bánh Kem Dâu Tây',price:150000},
                  {productId:107,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/250_PbxAPZbO8A1TIAFp2xzmtzFSs.webp',name:'Hộp Quà ',price:240000},
                  {productId:108,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_iFvmV3Ayh7Douflemz3QEGMAn.webp',name:'Dream Catcher',price:320000},
                  {productId:109,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_c2pSbQz2Z3ax0rw5iLiJOtG8b.jpg',name:'Summer Delight',price:250000},
                  {productId:110,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_bJR8QT6rJdAWo8XgCayH8bq8x.webp',name:'Sunny Day',price:290000},
                  {productId:111,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_gO35Rzwuwfl2OwZpBbefqwUeo.jpg',name:'Under Blue Sky',price:230000},
                  {productId:112,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_Z4oZrBsaTyzpSJa6qUR3tFz0l.jpg',name:'Fly Me To The Moon',price:300000},
                  {productId:113,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_RRJVP47MpfsuEZpl3tybkJ5z4.webp',name:'Stuck In Love',price:250000},
                  {productId:114,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_mjmqovrITO5arveNiXOvTO9W8.jpg',name:'Fall For You',price:280000},
                  {productId:115,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_tNjLOmf4wCOI0JIyQk9xXZrzS.jpg',name:'Mindful Soul',price:250000},
                  {productId:116,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_HfmyyqggfVhOZ29BoxCZDNnm5.jpg',name:'Sway Into Love',price:290000},
                  {productId:117,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/product/350_CVxw9miGOzqIeCFGzpGYB2KWQ.jpg',name:'When We Touch',price:390000},
                  {productId:118,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_4z42HTTIY1g2OFtSI38fp3D7u.jpg',name:'Timeless Elegance',price:260000},
                  {productId:119,img: 'https://assets.flowerstore.ph/public/tenantVN/app/assets/images/variant/600_G2Ivx1HMYnMY7Wcb6Kgl2osge.webp',name:'Dear My All',price:270000},
            ]
            localStorage.setItem('product',JSON.stringify(productArray));
            // console.log('da luu tao duoc san pham')
      }
}

function helloUser(helloUserId) {
      let helloUser = document.getElementById(helloUserId);
      let userlogin = JSON.parse(localStorage.getItem('userlogin'))
      if(userlogin.value == 100) {
            helloUser.innerHTML += userlogin.fullname;
      }else {
            helloUser.innerHTML = userlogin.fullname;
      }
}
//! USER

var content = document.getElementById('content');
var PageProduct = document.getElementById('numberOfPageProduct')       //! khai báo Stranger
var content_user = document.getElementById('user-page-content');
var PageProduct_user = document.getElementById('user-page-numberOfPageProduct')       //! khai báo User
//! đổi màu button khi nhấn vào 
function scrollToTop() {
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
          });
}
function showListPageProductStranger() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let numberOfPageProduct = divideProductPage(productArray).length; //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < numberOfPageProduct; i++) {
            PageProductTemp += '<button onclick="showProductStranger('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showListPageProductUser() {
      
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray).length //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductUser('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct_user.innerHTML = PageProductTemp;
}
function showProductStranger(i) {

      showListPageProductStranger();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }
      content.innerHTML = contentTemp;
}
function showProductUser(i) {
      
      showListPageProductUser();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productId+')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }
      content_user.innerHTML = contentTemp;
}
//! ADMIN 
var content_product_table = document.getElementById('content-product-table');
var addProductContainer = document.getElementById('addProduct-container-img');
function addProductAdmin_showIMG() {
      let addProductIMG = document.getElementById('addproduct-img');
      if(addProductIMG.value !== "") {
            addProductContainer.innerHTML = '<img id="showIMGNow"src="'+addProductIMG.value+'" alt="">';
      } else {
            addProductContainer.innerHTML = '';
      }
}
function showListPageProductAdmin() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray).length //? = 5
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductAdmin('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showProductAdmin(i) {
      showListPageProductAdmin();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray);
      var tableProduct = '<tr><th>ID</th> <th>Ảnh</th> <th>Tên sản phẩm</th> <th>Giá</th> <th>Option</th></tr>';
      for(let j = 0; j < pageOfProduct[i].length; j++) {      
            tableProduct += '<tr><td>'+pageOfProduct[i][j].productId+'</td><td><img src="'+pageOfProduct[i][j].img+'" alt=""></td><td class="table-name">'+pageOfProduct[i][j].name+'</td><td class="table-price">'+currency(pageOfProduct[i][j].price)+'</td><td><button class="option-btn-admin" onclick="deleteProduct('+pageOfProduct[i][j].productId+')">Xóa</button><br><button class="option-btn-admin" onclick="changeProductAdmin('+pageOfProduct[i][j].productId+')">Sửa</button></td></tr>';
      }
      content_product_table.innerHTML = tableProduct;
      /* ------ */
}
function changeProductAdmin(id) {
      let productArray = JSON.parse(localStorage.getItem('product'));

      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productArray[i].productId == id) {
                  break;
            }
      }
      addProductName.value = productArray[i].name;
      addProductPrice.value = productArray[i].price;
      addProductImg.value = productArray[i].img;
      addProductAdmin_showIMG()
}
//! chú ý -----------------------------------------------------------------------------------------------------------------------------
function addProductAdmin() {
      let flag = false;
      let productArray = JSON.parse(localStorage.getItem('product'));
      
      var productId = productArray[(productArray.length) - 1].productId + 1;
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      
            if (addProductName.value == '' || addProductPrice.value == '') {
                  customAlert('Thông tin sản phẩm không hợp lệ','warning')
            } else {
                  customAlert('Thêm sản phẩm thành công','success')
                  var productTemp = {
                        productId:productId,
                        img:addProductImg.value,
                        name:addProductName.value,
                        price:parseInt(addProductPrice.value),
                  }
                  for(let i = 0; i < productArray.length; i++) {
                        if(productArray[i].img == addProductImg.value) {
                              flag = true;
                              productArray[i] = productTemp;
                              
                              localStorage.setItem('product',JSON.stringify(productArray));
                              let pageOfProduct = divideProductPage(productArray);
                              addProductAdmin_format();
                              showProductAdmin(pageOfProduct.length-1);
                        }
                  }
                  if(flag == false) {
                        productArray.push(productTemp);
                        localStorage.setItem('product',JSON.stringify(productArray));
                        let pageOfProduct = divideProductPage(productArray);
                        addProductAdmin_format();
                        showProductAdmin(pageOfProduct.length-1);
                  }
            }
}
function addProductAdmin_format() {
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');

      addProductName.value = '';
      addProductImg.value = '';
      addProductPrice.value = '';
      addProductAdmin_showIMG()
}
function deleteProduct(ProductIdDelete) {
      let ans = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(ans == true) {
            let productArray = JSON.parse(localStorage.getItem('product'));
            for (let i = 0; i < productArray.length; i++) {
                  if(productArray[i].productId == ProductIdDelete) {
                        productArray.splice(i,1);
                  }
            }
            localStorage.setItem('product',JSON.stringify(productArray));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showProductAdmin(0);
      }
}

function customAlert(message,type) {
	if (type =='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type =='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 500);
}



function quantitydown() {
      var quantity = document.getElementById('user-page-quantity');
      if(quantity.value != 1) {
            quantity.value--;
      }
}
function quantityup() {
      var quantity = document.getElementById('user-page-quantity');
      quantity.value++;
}
function productDetail(productId) {
      var productDetail = document.getElementById('user-page-product-detail');
      
      modal_product_detail.style.display = 'none';
      productDetail.style.display = 'none';
      let productArray = JSON.parse(localStorage.getItem('product'));
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productId == productArray[i].productId) break;
      }
      productDetail.innerHTML = '<button id="user-page-closeProductDetail" onclick="closeProductDetail()"><i class="fa-solid fa-xmark"></i></button><img src="'+productArray[i].img+'" alt=""><div class="product-detail-right"><h2>'+productArray[i].name+'</h2><h4>Giá : '+currency(productArray[i].price)+'</h4><h4>Số lượng : </h4><button class="product-quantitydown" onclick="quantitydown()">-</button><input type="text" value="1" id="user-page-quantity"><button class="product-quantityup" onclick="quantityup()">+</button><p><button id="user-page-cart-add-btn" onclick="cartAdd('+productArray[i].productId+'),closeProductDetail()">Thêm vào giỏ hàng</button></p></div>'
      
      modal_product_detail.style.display = 'block';
      productDetail.style.display = 'block';
}
function closeProductDetail(){
      var productDetail = document.getElementById('user-page-product-detail');
      productDetail.style.display = 'none';
      modal_product_detail.style.display = 'none';
}
function showQuantityOfCart(cartQuantity) {
      let num = document.getElementById(cartQuantity);
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if(cartArray == '' || cartArray == null) {
            num.innerHTML = 0;
      }else {
            let userlogin = JSON.parse(localStorage.getItem('userlogin'))
            let dem = 0;
            for(let i = 0; i < cartArray.length; i++) {
                  if(userlogin.username == cartArray[i].username) 
                        dem += (1 * cartArray[i].quantity);
            }
            num.innerHTML = dem;
      }
}
function cartAdd(id){
      
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      let productArray = JSON.parse(localStorage.getItem('product'));
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));

      if(cartArray == '' || cartArray == null) {
            let i;
            for (i = 0; i < productArray.length; i++) { //? Tìm vị trí product
                  if(id == productArray[i].productId) break;
            }
            var quantity = document.getElementById('user-page-quantity');
            var productTemp = [{
                  productId:productArray[i].productId, 
                  img: productArray[i].img,
                  name:productArray[i].name,
                  price:productArray[i].price,
                  quantity:parseInt(quantity.value,10),
                  fullname:userlogin.fullname,
                  username:userlogin.username,
                  email:userlogin.email,
                  phone:userlogin.phone,
                  status:'Chưa xử lý',
            }]
            localStorage.setItem('cart',JSON.stringify(productTemp)); 
            customAlert('Thêm vào giỏ hàng thành công', 'success');
      } else {
            var quantity = document.getElementById('user-page-quantity');
            let flag = false;
            for(let i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].productId == id && cartArray[i].username == userlogin.username) {
                        cartArray[i].quantity += parseInt(quantity.value,10); 
                        flag = true;
                        localStorage.setItem('cart',JSON.stringify(cartArray)); 
                        customAlert('Thêm vào giỏ hàng thành công', 'success');
                        break;
                  }
            }
            if(flag == false) {
                  let j = 0;
                  let productArray = JSON.parse(localStorage.getItem('product'));
                  for(j = 0; j < productArray.length; j++) {
                        if(id == productArray[j].productId) break;
                  }
                  var productTemp1 = {
                        productId:productArray[j].productId, 
                        img: productArray[j].img,
                        name:productArray[j].name,
                        price:productArray[j].price,
                        quantity:parseInt(quantity.value,10),
                        fullname:userlogin.fullname,
                        username:userlogin.username,
                        email:userlogin.email,
                        phone:userlogin.phone,
                        status:'Chưa xử lý',
                  }
                  cartArray.push(productTemp1);
                  localStorage.setItem('cart',JSON.stringify(cartArray)); 
                  customAlert('Thêm vào giỏ hàng thành công', 'success');
            }
      }
      showQuantityOfCart('user-page-cart-quantity');
}

//? CART | Giỏ hàng
function deleteCart() {
      var ans = confirm('Bạn có muốn xóa tất cả sản phẩm trong giỏ hàng ?');
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      if(ans == true) {
            for (let i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].username == userlogin.username) {
                        cartArray.splice(i,1);
                        i--;
                  }
            }
            localStorage.setItem('cart',JSON.stringify(cartArray));
            showQuantityOfCart('user-cart-page-cart-quantity');
            showCart();
      }
}
function currency(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';
}
function showCart() {
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      let userlogin = JSON.parse(localStorage.getItem('userlogin'));
      
      var i;
      var cartUser = [];
      for (i = 0; i < cartArray.length; i++) {
            if(cartArray[i].username == userlogin.username) {
                  cartUser.push(cartArray[i]);
            }
      }
      
      if(cartUser == null) {
            var contentCartTable = document.getElementById('user-cart-page-cart-table');
            var totalPriceCart = document.getElementById('user-cart-page-totalprice-cart');
            contentCartTable.innerHTML = '<h3 class="notify">Không có sản phẩm nào trong giỏ hàng</h3>';
            totalPriceCart.innerHTML = '0';
      }
      else {
            var contentCartTable = document.getElementById('user-cart-page-cart-table');
            var totalPriceCart = document.getElementById('user-cart-page-totalprice-cart');
            var cartTable = '<tr><th>Giỏ hàng</th><th class="table-name">Sản phẩm</th><th class="table-price">Giá</th><th class="table-quantity">Số lượng</th><th class="table-total">Tổng</th><th>Tùy chỉnh</th></tr>';
            var tong = 0;
            for (let item of cartUser) {
                  let totalprice = eval(item.price * item.quantity);
                  cartTable += '<tr><td><img src="'+item.img+'" alt=""></td><td class="table-name">'+item.name+'</td><td class="table-price">'+currency(item.price)+'</td><td class="table-quantity" ><button onclick="quantitydown2('+item.productId+')">-</button><input value='+item.quantity+' id="quantity"><button onclick="quantityup2('+item.productId+')">+</button></td><td class="table-total"><span id="cart-totalprice">'+currency(totalprice)+'</span></td> <td><button onclick="removeItemCart('+item.productId+')">X</button></td></tr>'
                  tong += totalprice;
            }
            contentCartTable.innerHTML = cartTable;
            totalPriceCart.innerHTML = currency(tong);
      }
      showQuantityOfCart('user-page-cart-quantity');
}
function quantitydown2(productId) {
      let cartArray = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].productId == productId) {
                  if(cartArray[i].quantity > 1) {
                        cartArray[i].quantity--;
                  }
            }
      }
      localStorage.setItem('cart',JSON.stringify(cartArray));
      showQuantityOfCart('user-cart-page-cart-quantity')
      showCart();
}
function quantityup2(productId) {
      var cartArray = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cartArray.length; i++) {
            if(cartArray[i].productId == productId) {
                  cartArray[i].quantity++;
            }
      }
      localStorage.setItem('cart',JSON.stringify(cartArray));
      showQuantityOfCart('user-cart-page-cart-quantity')
      showCart();
}
function removeItemCart(productId) {
      let alo = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(alo == true) {
            let cartArray = JSON.parse(localStorage.getItem('cart'));
            var i;
            for (i = 0; i < cartArray.length; i++) {
                  if(cartArray[i].productId == productId) break;
            }
            var ans = confirm('Bạn có muốn xóa sản phẩm này ?');
            if(ans == true) {
                  cartArray.splice(i,1);
                  localStorage.setItem('cart',JSON.stringify(cartArray));
                  showCart();
            }
      }
}
function buy() {
      let date = new Date();
      let date_year = date.getFullYear();
      let date_month = date.getMonth() + 1;
      let date_day = date.getDate();
      let date_hour = date.getHours();
      let date_minute = date.getMinutes();
      let date_second = date.getSeconds();
      let timeBuy = `${date_hour}:${date_minute}:${date_second} <br> ${date_day} - ${date_month} - ${date_year}`;
      var ans = confirm('Bạn có muốn thanh toán ?')
      
      
      if(ans == true) {

            if(localStorage.getItem('bill') == null) {
                  let cartArray = JSON.parse(localStorage.getItem('cart'));
                  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
                  let billList = [];
                  //? Quy ước phần tử đầu tiên là thông tin customer
                  billIndex = {
                        customer : userlogin,
                        info:'',//! phải có khởi tạo để sử dụng += ở dưới
                  }
                  let i = 0;
                  var tong = 0;
                  while(i < cartArray.length) {
                        if(cartArray[i].username == userlogin.username) {
                              billIndex.time = timeBuy;
                              billIndex.info += ''+cartArray[i].quantity+' x '+cartArray[i].name+'<br>';
                              billIndex.id =  billList.length;
                              billIndex.status = "Chưa xử lý";
                              tong += (cartArray[i].quantity * cartArray[i].price);
                              cartArray.splice(i,1);
                              i--;
                        }
                        localStorage.setItem('cart',JSON.stringify(cartArray));
                        i++;
                  }
                  billIndex.totalprice = tong;
                  showCart();
                  showQuantityOfCart('user-cart-page-cart-quantity')
                  billList.push(billIndex);
                  localStorage.setItem('bill',JSON.stringify(billList));
                  customAlert('Bạn đã đặt hàng thành công','success');
            } else {
                  let userlogin = JSON.parse(localStorage.getItem('userlogin'));
                  let cartArray = JSON.parse(localStorage.getItem('cart'));
                  let billList = JSON.parse(localStorage.getItem('bill'));
                  //? Quy ước phần tử đầu tiên là thông tin customer
                  let billIndex = {
                        customer: userlogin,
                        info:'', //! phải có khởi tạo để sử dụng += ở dưới
                  }
                  let i = 0;
                  var tong = 0;
                  while(i < cartArray.length) {
                        if(cartArray[i].username == userlogin.username) {
                              billIndex.time = timeBuy;
                              billIndex.info += ''+cartArray[i].quantity+' x '+cartArray[i].name+'<br>';
                              billIndex.id =  billList.length;
                              billIndex.status = "Chưa xử lý";
                              tong += (cartArray[i].quantity * cartArray[i].price);
                              /* console.log(tong); */
                              cartArray.splice(i,1);
                              i--;
                        }
                        localStorage.setItem('cart',JSON.stringify(cartArray))
                        i++;
                  }
                  billIndex.totalprice = tong;
                  showCart();
                  showQuantityOfCart('user-cart-page-cart-quantity')
                  billList.push(billIndex);
                  localStorage.setItem('bill',JSON.stringify(billList));
                  customAlert('Bạn đã đặt hàng thành công','success');
           }
      }
}

function opencontent(id) {
      closecontent();
      var temp = document.getElementById(id);
      temp.style.display = 'block';
}
function closecontent() {
      let product = document.getElementById('content-product-admin');
      let order = document.getElementById('content-order-admin');
      let user = document.getElementById('content-user-admin');
      product.style.display = 'none';
      order.style.display = 'none';
      user.style.display = 'none';

}
//? Đơn hàng
function showBillAdmin() {
      if(JSON.parse(localStorage.getItem('bill')) == null) {
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
      } else {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';

            for (let i = 0; i < billArray.length; i++) {
                  billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
                  if(billArray[i].status == "Chưa xử lý") {
                        billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'
                  } else {
                        billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'
                  }
                  billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';
            }
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
      }
}
function onclickTagTr(event,id) {
      if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
            removeItemBill(id);
      } else {
            showBillDetail(id);
      }
}
function removeItemBill(id) {
      let ans = confirm("Bạn có muốn xóa đơn hàng này ?");
      if(ans == true) {
            let billArray = JSON.parse(localStorage.getItem('bill'));
            let i ;
            for (i = 0; i < billArray.length; i++) {
                  if(billArray[i].id == id) 
                        billArray.splice(i,1);
            }
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
      }
}
function billAdmincolorStatus(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billAdminStatus = document.getElementById('billAdmin-status');
      if(billArray[i].status == "Chưa xử lý") {
            billAdminStatus.style.color = "red"; 
      } else {
            billAdminStatus.style.color = 'blue'; 
      }
}
function showBillDetail(id) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billDetail = document.getElementById('billDetail');

      /* let heightPage = document.body.offsetHeight;
      modal_bill_detail.style.height = (heightPage+1)+ 'px'; */

      modal_bill_detail.style.display = 'block';
      billDetail.style.display = 'block';
      var i;
      for (i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id) {
                  break;
            }
      }
      let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
      billDetail.innerHTML = billDetailTemp;
      billDetailcolorStatus(i)
}
function billDetailcolorStatus(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billdetailStatus = document.getElementById('billdetail-status');
      if(billArray[i].status == "Chưa xử lý") {
            billdetailStatus.style.color = "red"; 
      } else {
            billdetailStatus.style.color = 'blue'; 
      }
}
function billComplete(i) {
      let billArray = JSON.parse(localStorage.getItem('bill'));
      if(billArray[i].status == 'Chưa xử lý') {
            billArray[i].status = "Đã xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
            billDetailcolorStatus(i)
      } else {
            billArray[i].status = "Chưa xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();
            let billdetailStatus = document.getElementById('billdetail-status');
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
            billDetailcolorStatus(i)
      }
}
function closeBillDetail() {
      let billDetail = document.getElementById('billDetail');
      billDetail.style.display = 'none';
      modal_bill_detail.style.display = 'none';
}
//? Quản lý Khách hàng
var manageUser = document.getElementById('content-user-admin');
function showUserList() {
      let userlist = JSON.parse(localStorage.getItem('userlist'));
      let manageUser = document.getElementById('content-user-admin');
      
      let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'

      for (let i = 1; i < userlist.length; i++) {
            manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].date_create+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
      }
      manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
}
function removeUser(i) {
      let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
      if(ans == true) {
            let userlist = JSON.parse(localStorage.getItem('userlist'));
            userlist.splice(i,1);
            localStorage.setItem('userlist',JSON.stringify(userlist));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showUserList();
      }
}
function showSearch() {
      modal_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_search.style.height = heightPage+'px';
}
function showSearchUser() {
      modal_user_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_user_search.style.height = heightPage+'px';
}

function closeSearch() {
      modal_search.style.display = 'none';
}
function closeSearchUser() {
      modal_user_search.style.display = 'none';
}
function searchUser() {
      
      let searchProductArray;
      
      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');

      let search = document.getElementById('user-page-search-info').value.toLowerCase();
      let search_product = document.getElementById('user-page-search-product-wrapper');
      let searchProductTemp = '';
      
      searchProductArray = searchProductPriceUser();

      if(search == '') {
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
                  search_product.innerHTML = '';
            } else {
                  for (let i = 0; i < searchProductArray.length; i++) {
                        searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productId+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;
            }
      } else {
            for (let i = 0; i < searchProductArray.length; i++) {
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                  searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productId+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;
      }
}
function searchStranger() {
      let searchProductArray;

      let searchProductPriceFrom = document.getElementById('search-price-from');
      let searchProductPriceTo = document.getElementById('search-price-to');

      let search = document.getElementById('search-info').value.toLowerCase();
      let search_product = document.getElementById('search-product-wrapper');

      let searchProductTemp = '';
      searchProductArray = searchProductPrice();

      if(search == '') {
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
                  search_product.innerHTML = '';
            } else {
                  for (let i = 0; i < searchProductArray.length; i++) {
                        searchProductTemp += '<div class="search-product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;
            }     
      } else {
            for (let i = 0; i < searchProductArray.length; i++) {
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                        searchProductTemp += '<div class="search-product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;
      }
}
function searchProductPrice() {

      let searchProductPriceFrom = document.getElementById('search-price-from');
      let searchProductPriceTo = document.getElementById('search-price-to');

      let productArray = JSON.parse(localStorage.getItem('product'));
      
      if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
            return productArray;
      }
      else {
            let productArray = JSON.parse(localStorage.getItem('product'));
            let searchProductPriceArray = [];
            for(let i = 0; i < productArray.length; i++) {
                  if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                        searchProductPriceArray.push(productArray[i]);
                  }
            }
            return searchProductPriceArray;
      }
}
function searchProductPriceUser() {

      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');

      let productArray = JSON.parse(localStorage.getItem('product'));
      
      if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
            return productArray;
      }
      else {
            let productArray = JSON.parse(localStorage.getItem('product'));
            let searchProductPriceArray = [];
            for(let i = 0; i < productArray.length; i++) {
                  if(productArray[i].price >= searchProductPriceFrom.value && productArray[i].price <= searchProductPriceTo.value) {
                        searchProductPriceArray.push(productArray[i]);
                  }
            }
            return searchProductPriceArray;
      }
}
//! Slide Show // ĐÃ XONG

function createSlideShowArray() {
      if(localStorage.getItem('slideshow') == null) {
            let slideShowArray = [
                  {slideShowID : 0, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/UZjHB4GICYEIQIyhKajpuhHIieB6Wg9HyFg4nFy9.gif"},
                  {slideShowID : 1, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/mKNNluCvJOMKjIDUzdJBDq0LKuI939qK9zJC6atr.gif"},
                  {slideShowID : 2, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/9BJItFvQLCmOZaR3tYCj2hcuBpuMhlwgZ2a65R9N.gif"},
                  {slideShowID : 3, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/ol989p3XImck4WQpKLC8YBbl11jaZ0x5OOz8U067.gif"},
                  {slideShowID : 4, img : "https://assets.flowerstore.ph/public/tenantVN/app/assets/images/banner/2PJHQer21QRAADNGJwonlV41gmCUUxTzIFKOv5ZV.gif"},
            ];
            localStorage.setItem('slideshow',JSON.stringify(slideShowArray));
      } 
}
var index = 0;
var countDown;
function moveSlideShow(slideShowImg_id) {
      let slideShow = document.getElementById(slideShowImg_id);
      let slideShowArray = JSON.parse(localStorage.getItem('slideshow'));
      
      let numSlides = slideShowArray.length;
      if(index >= numSlides) {
            index = 0;
      } else if(index < 0) {
            index = numSlides - 1;
      }
      slideShow.innerHTML = '<img src="'+slideShowArray[index].img+'" alt="">';
      countDown = setTimeout(function() {
            moveSlideShowAfter(slideShowImg_id);
      },2000)
}
function moveSlideShowBefore(slideShowImg_id) {
      clearTimeout(countDown);
      index--;
      moveSlideShow(slideShowImg_id);
}
function moveSlideShowAfter(slideShowImg_id) {
      clearTimeout(countDown);
      index++;
      moveSlideShow(slideShowImg_id);
}
//! Divide Page Product
function divideProductPage(array) {
      let pageOfProduct = [];
      let productArray = array;
      let pageOfProductTemp = []
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 20) {
                  pageOfProduct.push(pageOfProductTemp);
                  pageOfProductTemp = [];
                  dem = 0;
            }
      }
      pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 22sp : 10 = 2 dư 2)
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}
function divideProductPageAdmin(array) {
      let pageOfProduct = [];
      let productArray = array;
      let pageOfProductTemp = []
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 10) {
                  pageOfProduct.push(pageOfProductTemp);
                  pageOfProductTemp = [];
                  dem = 0;
            }
      }
      pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 22sp : 10 = 2 dư 2)
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}


//! Sort

function showListPageSortedIncrease() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) {
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price > productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }
      let numberOfPageProduct = divideProductPage(productArray).length; //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < numberOfPageProduct; i++) {
            PageProductTemp += '<button onclick="showSortedIncrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showSortedIncrease(i) {
      if(i == null) {
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price > productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';
            for(let j = 0; j < pageOfProduct[i].length; j++) {
                  contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content.innerHTML = contentTemp;
}

function showListPageSortedDecrease() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) {
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price < productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }
      let numberOfPageProduct = divideProductPage(productArray).length; //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < numberOfPageProduct; i++) {
            PageProductTemp += '<button onclick="showSortedDecrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showSortedDecrease(i) {
      if(i == null) {
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price < productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';
            for(let j = 0; j < pageOfProduct[i].length; j++) {
                  contentTemp += '<div class="product" onclick="customAlert(\'Bạn phải đăng nhập để mua hàng\',\'warning\')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content.innerHTML = contentTemp;
}
/*! ------------------------- */
function showListPageSortedIncreaseUser() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) {
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price > productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }
      let numberOfPageProduct = divideProductPage(productArray).length; //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < numberOfPageProduct; i++) {
            PageProductTemp += '<button onclick="showSortedIncrease('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct_user.innerHTML = PageProductTemp;
}
function showSortedIncreaseUser(i) {
      if(i == null) {
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price > productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';
            for(let j = 0; j < pageOfProduct[i].length; j++) {
                  contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productId+')""><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content_user.innerHTML = contentTemp;
}

function showListPageSortedDecreaseUser() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      for(let i = 0; i < productArray.length; i++) {
            for(let j = 0; j < productArray.length - i - 1; j++) {
                  if(productArray[j].price < productArray[j + 1].price) {
                        let temp = productArray[j];
                        productArray[j] = productArray[j + 1];
                        productArray[j + 1] = temp;
                  }
            }
      }
      let numberOfPageProduct = divideProductPage(productArray).length; //? = 3
      let PageProductTemp = '';
      for(let i = 0; i < numberOfPageProduct; i++) {
            PageProductTemp += '<button onclick="showSortedDecrease('+i+'),scrollToTop()">'+(i+1)+'</button>'
      }
      PageProduct_user.innerHTML = PageProductTemp;
}
function showSortedDecreaseUser(i) {
      if(i == null) {
            i = 0;
      }
      let productArray = JSON.parse(localStorage.getItem('product'));
            for(let i = 0; i < productArray.length; i++) {
                  for(let j = 0; j < productArray.length - i - 1; j++) {
                        if(productArray[j].price < productArray[j + 1].price) {
                              let temp = productArray[j];
                              productArray[j] = productArray[j + 1];
                              productArray[j + 1] = temp;
                        }
                  }
            }
            let pageOfProduct = divideProductPage(productArray);
            let contentTemp = '';
            for(let j = 0; j < pageOfProduct[i].length; j++) {
                  contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productId+')""><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
            }
            content_user.innerHTML = contentTemp;
}