function kiemtratendangnhap(){
    var tendangnhap=document.querySelector("#txttendangnhap").value;
    var erdangnhap=document.querySelector("#erdangnhap");
    /*Phải có đầy đủ: ký tự chữ, số và ít nhất 5 ký tự.*/
    /*Okok*/
    var regtendangnhap=/^((?=.*[A-Za-z])(?=.*[\d])).{5,}$/;
    if(tendangnhap.length > 0){
        if(regtendangnhap.test(tendangnhap)){
            erdangnhap.innerHTML="";
            return true;
        }
        else{
            erdangnhap.innerHTML="Tên đăng nhập không được chứa khoảng trắng và ký tự đặc biệt, bao gồm chữ hoa, chữ thường và số, phải từ 5 ký tự trở lên!";
            return false;
        }
    }
    else{
        erdangnhap.innerHTML="Tên đăng nhập không được để trống !";
        return false;
    }
}

function kiemtramatkhau(){
    /*Okok*/
    var matkhau=document.querySelector("#txtmatkhau").value;
    var ermatkhau=document.querySelector("#ermatkhau");
    /*Yêu cầu mật khẩu có thể có chữ, số, và cả ký tự đặc biệt, bắt buộc phải có từ 6 kí tự trở lên.*/
    var regmatkhau=/^(([A-Za-z]*)(\d*)([!@#$%^&*()_+]*)).{6,}$/;
    if(matkhau.length>0){
        if(regmatkhau.test(matkhau)){ 
            ermatkhau.innerHTML="";/**/ 
            return true;
        }
        else{
            ermatkhau.innerHTML="Mật khẩu phải nhiều hơn 6 ký tự !";
            return false;
        }
    }
    else{
        ermatkhau.innerHTML="Không được để trống !";
        return false;
        
    }
}
/*OKOK: chỉ cần so sánh*/
function kiemtranhaplaimatkhau(){
    var matkhau=document.querySelector("#txtmatkhau").value;
    var nhaplaimatkhau=document.querySelector("#txtnhaplaimatkhau").value;
    var ernhaplaimatkhau=document.querySelector("#ernhaplaimatkhau");/*chọn chỗ thông báo*/
    if(matkhau == nhaplaimatkhau){
        ernhaplaimatkhau.innerHTML="";
        return true;
    }
    else{
        ernhaplaimatkhau.innerHTML="Mật khẩu nhập lại không khớp với mật khẩu đã nhập !"
        return false;
    }
}

function kiemtrahoten(){
    var hoten=document.querySelector("#txthoten").value;
    var erhoten=document.querySelector("#erhoten");
    var reghoten=/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if(hoten.length > 0){
        if(reghoten.test(hoten)){
            erhoten.innerHTML="";
            return true;
        }
        else{
            erhoten.innerHTML="Họ và tên phải đầu bầng ký tự hoa !";
            return false;
        }
    }
    else{
        erhoten.innerHTML="Họ tên không được để trống !";
        return false;
    }
}

function kiemtrangaysinh(){
    /*Okok*/
    var ngaysinh=document.querySelector("#ngaysinh").value;
    var erngaysinh=document.querySelector("#erngaysinh");
    var ns=new Date(ngaysinh);/*Lấy giá trị Date, theo kiểu nhỏ hơn ngày hiện tại, dù 1 ngày cũng được, nhưng phải nhỏ hơn.*/
    var ngayht=new Date();
    if(ns.getFullYear() < ngayht.getFullYear()){
        erngaysinh.innerHTML="";
        return true;/*Dừng nếu đúng*/
    }
    else if(ns.getFullYear() == ngayht.getFullYear()){
        if(ns.getMonth() + 1 < ngayht.getMonth() + 1){
            /*Phải cộng thêm 1 vào tháng thì mới có nghĩa*/
            erngaysinh.innerHTML="";
            return true;
        }
        else if(ns.getMonth() + 1 == ngayht.getMonth() + 1){
            if(ns.getDate() < ngayht.getDate()){
                erngaysinh.innerHTML="";
                return true;
            }
            else{
                erngaysinh.innerHTML="Ngày sinh phải nhỏ hơn ngày hiện tại";
                return false;
            }
        }
        else{
            erngaysinh.innerHTML="Ngày sinh phải nhỏ hơn ngày hiện tại";
            return false;
        }
    }
    else{
        erngaysinh.innerHTML="Ngày sinh phải nhỏ hơn ngày hiện tại !";
        return false;
    }
}

function kiemtradiachi(){
    var diachi=document.querySelector("#txtdiachi").value;
    var erdiachi=document.querySelector("#erdiachi");
    /*Địa chỉ phải có ký tự chữ, số, và tối thiểu phải là 10 ký tự*/
    var regdiachi=/^^((?=.*[A-Za-z])([0-9]*)).{10,}$/;
 
    if(regdiachi.test(diachi)){
        erdiachi.innerHTML="";
        return true;
    }
    else{
        erdiachi.innerHTML="Địa chỉ chưa hợp lệ !";
        return false;
    }
    
}
function kiemtrasodienthoai(){
    /*Phải bắt đầu bằng: 09, 08, 07, phải có 10 chữ số*/
    var sdt=document.querySelector("#sdt").value;
    var ersdt=document.querySelector("#ersdt");
    var regsdt=/^([09]||[07]||[08])([0-9]+)$/;
    if(sdt.length < 10 ){
        ersdt.innerHTML="Số điện thoại phải có 10 chữ số !"
    }
    else if(sdt.length == 10){
        if(regsdt.test(sdt)){
            ersdt.innerHTML="";
            return true;
        }
        else{
            ersdt.innerHTML="Số điện thoại chưa đúng định dạng !";
            return false;
        }
    }
    else{
        ersdt.innerHTML="Số điện thoại phải có 10 chữ số ! ";
        return false;
    }
}

function kiemtraemail(){
    /*Okok*/
    var email=document.querySelector("#email").value;
    var eremail=document.querySelector("#eremail");
    var regemail=/^(([A-Za-z]*)(\d*)([!@#$%^&*()_+]*)).{6,}@gmail.com$/;
    if(email.length > 0){
        if(regemail.test(email)){
            eremail.innerHTML="";
            return true;
        }
        else{
            eremail.innerHTML="Email phải có dạng chuỗi ký tự theo sau là @gmail.com và chuỗi ký tự chính phải nhiều hơn 6 kí tự";
            return false;
        }
    }
    else{
        eremail.innerHTML="Email không được để trống !";  
        return false;  
    }
}
/**/
function dangky(){
    /*okok*/
   if(kiemtratendangnhap() && kiemtramatkhau() && kiemtranhaplaimatkhau() && kiemtrasodienthoai() && kiemtradiachi() && kiemtraemail() && kiemtrahoten() && kiemtrangaysinh()){
    alert("Đã đăng ký tài khoản thành công !"); 
   }
   else{
    alert("Tất cả thông tin phải được nhập chính xác và đầy đủ !");   
   }
}
