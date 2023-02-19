// writeSave() ------------------------------------------------------------------------------------>
function writeSave() {
   if($('#writer').val()==''){
      alert('이름을 입력 하시요 ');
      $('#writer').focus();
      return false;
   }
   if($('#subject').val()==''){
      alert('글제목을 입력 하시요 ');
      $('#subject').focus();
      return false;
   }
   if($('#content').val()==''){
      alert('글내용을 입력 하시요 ');
      $('#content').focus();
      return false;
   }
   if($('#pw').val()==''){
      alert('암호을 입력 하시요 ');
      $('#pw').focus();
      return false;
   }
   return true;
}


// confirmIdCheck() ------------------------------------------------------------------------------->
function confirmIdCheck() {
   if($('#id').val()=='') {
      alert('ID를 입력하세요');
   }
   else {
      $.ajax({
         type:'POST',
         data: 'id=' + $( '#id' ).val(),
         url: '/co.kr.test07board/member/idCheck.do',
         dataType:'xml',
         success:function(data) {
            if(data.check == -1) {
               alert('사용 중인 ID입니다.');
               $('#id').val('').focus();
            }
            else if(data.check == 1) {
               alert('사용 가능 한 ID입니다.');
               $('#pw').focus();
            }
         }
      });
   }
}


// memberCheck() ---------------------------------------------------------------------------------->
function memberCheck() {
   if($('#id').val()=='') {
      alert('ID를 입력하세요.');
      $('#id').focus();
      return false;
   }
   if($('#name').val()=='') {
      alert('이름을 입력하세요.');
      $('#name').focus();
      return false;
   }
   if($('#email').val()==''){
      alert('이메일을 입력하세요.');
      $('#email').focus();
      return false;
   }
   if($('#tel').val()=='' && $('#tel2').val()=='' && $('#tel3').val()==''){
      alert('전화번호를 정확히 입력하세요.');
      $('#tel').focus();
      return false;
   }
   return true;
}


// pwCheck() -------------------------------------------------------------------------------------->
function pwCheck() {
   if($('#pw').val()=='') {
      alert('비밀번호를 입력하세요.');
      $('#pw').focus();
      return false;
   }

   if($('#pw2').val()=='') {
      alert('비밀번호 확인을 입력하세요.');
      $('#pw2').focus();
      return false;
   }

   if($('#pw').val() != $('#pw2').val()) {
      alert('비밀번호가 일치하지 않습니다.');
      $('#pw2').val('');
      $('#pw').val('');
      $('#pw').focus();
      return false;
   }
   return true;
}


// openDaumPostcode() ----------------------------------------------------------------------------->
function openDaumPostcode() {
   new daum.Postcode({
      oncomplete:function(data) {
         document.getElementById('zipcode').value=data.zonecode;
         document.getElementById('addr').value=data.address;
      }
   }).open();
}


// emailEvt() ------------------------------------------------------------------------------------->
function emailEvt() {
   const email = $('#email').val() + $('#email2').val();
   console.log('완성된 이메일 : ' + email);
   const checkInput = $('.mail-check-input')
   
   $.ajax({
      type : 'GET',
      url : '<c:url value ="mailCheck?email="/>' + email,
      success : function (data) {
         console.log('data : ' +  data);
         checkInput.attr('disabled',false);
         code = data;
         alert('인증번호가 전송되었습니다.');
      }         
   });
}

// uploadCheck() ---------------------------------------------------------------------------------->
function uploadCheck(ff){
   if(ff.writer.value==''){
      alert('글쓴이를 입력하세요');
      ff.writer.focus();
      return false;
   }
   if(ff.subject.value==''){
      alert('제목을 입력하세요');
      ff.subject.focus();
      return false;
   }
   if(ff.content.value==''){
      alert('내용를 입력하세요');
      ff.content.focus();
      return false;
   }
   return true;
}

