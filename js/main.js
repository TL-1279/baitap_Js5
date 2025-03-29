/**
 * IPO
 * 
 * Input: diemChuan, điemMon1, điemMon2, điemMon3, diemKhuVuc, điemDoiTuong
 * 
 * Process:
 *  Hàm xét tuyển
 *      + B1: lấy giá trị từ form
 *      + B2: tính tổng điểm
 *         tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + điemDoiTuong
 *      + B3: xét tuyển:
 *          nếu tongDiem >= điemChuan và (diem1, diem2, diem3) > 0 => thì đậu
 *              ngược lại => rớt
 *      + B4: hiển thị kết quả
 *          
 * Output: đậu hay rớt, tổng điểm
 * 
 * 
 */

        const tinhTongDiem =(diem1, diem2, diem3, diemKhuVuc, diemDoiTuong) => {
            let tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
            return tongDiem; 
        }

        const xetTuyen=() => {
            let diemChuan = Number(document.getElementById("inputDiemChuan").value);
            let diem1 = Number(document.getElementById("inputDiem1").value);
            let diem2 = Number(document.getElementById("inputDiem2").value);
            let diem3 = Number(document.getElementById("inputDiem3").value);
            let diemKhuVuc = Number(document.getElementById("selectKhuVuc").value);
            let diemDoiTuong = Number(document.getElementById("selectDoiTuong").value);

          
            let tongDiem = tinhTongDiem(diem1, diem2, diem3, diemKhuVuc, diemDoiTuong);

            let ketQua = document.getElementById("result1");

            ketQua.innerHTML = `Điểm chuẩn: ${diemChuan} <br>
            Điểm môn 1: ${diem1} <br>
            Điểm môn 2: ${diem2} <br>
            Điểm môn 3: ${diem3} <br>
            Điểm Khu Vực: ${diemKhuVuc} <br>
            Điểm đối tượng: ${diemDoiTuong} <br>`
            
            if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {

                ketQua.innerHTML += `Bạn đã đậu! Tổng điểm: ${tongDiem}`;
                ketQua.style.color = "green";
            } else {
                ketQua.innerHTML += `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
                ketQua.style.color = "red";
            }
        }
        document.getElementById("btnSubmit1").onclick = xetTuyen;


        // bài 2

 /**
 * IPO
 * 
 * Input: ten, soKw
 * 
 * Process:
 *  Hàm tính tiền điện
 *      + B1: lấy giá trị từ form
 * 
 *      + B2: xét điều kiện và lập công thức tính tiền điện
 *         50kw đầu : 500d/kw => soKw * 500;
           50kw kế: 650d/kw => 50 * 500 + (soKw - 50) * 650
           100kw Kế : 850d/kw => 50 * 500 + 50 * 650 + (soKw - 100) * 850
           150kw kế: 1100d/kw => 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
           Còn lại: 1300d/kw => 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300

 *   
 *      + B3: hiển thị tiền điện
 *          
 * Output: tên, tiền điện
 * 
 * 
 */
 const tinhTongTienDien = (soKw) => {
    let tien = 0;

    if (soKw <= 50) {
        tien = soKw * 500;
    } 
    else if (soKw <= 100) {
        tien = 50 * 500 + (soKw - 50) * 650;
    } 
    else if (soKw <= 200) {
        tien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    }
    else if (soKw <= 350) {
        tien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } 
    else {
        tien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }

    return tien;
}

const hienThiTienDien = () => {
    let ten = document.getElementById("ten").value;
    let soKw = Number(document.getElementById("soKw").value);

    let tien = tinhTongTienDien(soKw);

    let tinhTien = document.getElementById("result2");
    let formattedNum = new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
    }).format(tien);

    tinhTien.innerHTML = `Họ tên: ${ten};   Tiền điện: ${formattedNum}đ`;
    tinhTien.style.color = "green";
}

document.getElementById("btnSubmit2").onclick = hienThiTienDien;



        //bài 3
/**
 * IPO
 * 
 * Input: hoTen, tongThuNhap, soNguoiPhuThuoc
 * 
 * Process:
 *  Hàm tính thuế thu nhập cá nhân
 *      + B1: lấy giá trị từ form
 *      + B2: tính thu nhập chịu thuế
 *          thuNhapChiuThue = (tongThuNhap/1000000) - 4 - soNguoiPhuThuoc * 1.6
 * 
 *      + B3: Tính thuế suất:
 *          nếu + thuNhapChiuThue <= 60  thuế suất = 5
 *              + thuNhapChiuThue <= 120  thuế suất = 10
 *              + thuNhapChiuThue <= 210  thuế suất = 15
 *              + thuNhapChiuThue <= 384  thuế suất = 20
 *              + thuNhapChiuThue <= 624  thuế suất = 25
 *              + thuNhapChiuThue <= 960  thuế suất = 30
 *              + thuNhapChiuThue > 960  thuế suất = 35
 *      + B3: tính tiền thuế
 *          tienThue = thuNhapChiuThue * (thueSuat / 100) * 1000000;
 * 
 *      + B4: hiển thị kết quả
 *          
 * Output: họ tên, tiền thuế thu nhập cá nhân
 * 
 * 
 */
        const thuNhap=( tongThuNhap, soNguoiPhuThuoc) =>{
        let thuNhapChiuThue = (tongThuNhap/1000000) - 4 - soNguoiPhuThuoc * 1.6;
        return thuNhapChiuThue;
        }

        const tinhThueSuat = (thuNhapChiuThue) => {
                   
            if (thuNhapChiuThue <= 60){
                return 5;
            } 
            else if (thuNhapChiuThue <= 120){ 
                return 10;
            } 
            else if (thuNhapChiuThue <= 210){
                return 15;
            } 
            else if (thuNhapChiuThue <= 384){
                return 20;   
            }
            else if (thuNhapChiuThue <= 624){
                return 25;  
            } 
            else if (thuNhapChiuThue <= 960){
                return 30;  
            } 
            else {return 35} ;
            
        };

       const tinhTienThue = () => {
    let hoTen = document.getElementById("hoTen").value;
    let tongThuNhap = Number(document.getElementById("thuNhap").value);
    let soNguoiPhuThuoc = Number(document.getElementById("soNguoi").value);

    let thuNhapChiuThue = thuNhap(tongThuNhap, soNguoiPhuThuoc);

    let thueSuat = tinhThueSuat(thuNhapChiuThue);

    let tienThue = thuNhapChiuThue * (thueSuat / 100) * 1000000;

    let formattedNum = new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
    }).format(tienThue);
    
    let tinhThue = document.getElementById("result3");
    tinhThue.innerHTML = `Họ tên: ${hoTen}, Tiền thuế thu nhập cá nhân: ${formattedNum} VNĐ`;
    tinhThue.style.color = "green";
};

document.getElementById("btnSubmit3").onclick = tinhTienThue;



        // bài 4
        
/**
 * IPO
 * 
 * Input: maKH, loaiKH, soKenh, soKetNoiInput, soKetNoi
 * 
 * Process:
 *  Hàm tính tiền điện
 *      + B1: lấy giá trị từ form
 *      + B2: kiểm tra và tính tiền theo loại khách hàng
 *         + Nhà dân:
 *              tongTien = 4.5 + 20.5 + soKenh * 7.5
 *         + Doanh nghiệp:
 *              tongTien = 15 + 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0) + soKenh * 50;
 *              
 *      + B3: xét sự kiện ẩn hiện số kết nối
 *         
 *      + B4: hiển thị kết quả
 *          
 * Output: mã khách hàng, tiền cáp
 * 
 * 
 */
        const tinhTienCap = () => {
            let maKH = document.getElementById("khachHang").value;
            let loaiKH = document.getElementById("selectKhachHang").value; 
            let soKenh = Number(document.getElementById("soKenh").value);
            let soKetNoiInput = document.getElementById("soKetNoi"); 
            let soKetNoi = soKetNoiInput ? Number(soKetNoiInput.value) : 0; 
        
            let tongTien = 0;
            let tienCap = document.getElementById("result4");
        
            if (loaiKH === "nhaDan") {
                tongTien = 4.5 + 20.5 + soKenh * 7.5;
            } else if (loaiKH === "doanhNghiep") {
                tongTien = 15 + 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0) + soKenh * 50;
            } else {
                tienCap.innerHTML = "Loại khách hàng không hợp lệ!";
                tienCap.style.color = "red";
                return;
            }
        
            let formattedTien = new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'USD' 
            }).format(tongTien);
        
            tienCap.innerHTML = `Mã KH: ${maKH}, Loại KH: ${loaiKH}, Tổng tiền cáp: ${formattedTien}`;
            tienCap.style.color = "green";
        };
        
        const toggleSoKetNoi = () => {
            let loaiKhachHang = document.getElementById("selectKhachHang").value;
            let soKetNoi = document.getElementById("soKetNoi");
        
            soKetNoi.style.display = loaiKhachHang === "doanhNghiep" ? "block" : "none";
        };
        
        document.getElementById("btnSubmit4").onclick = tinhTienCap;
        