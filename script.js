// Quiz Data - Câu hỏi từ file PDF (Phần 1 - 33 câu hỏi) - ĐÚNG THỨ TỰ
const quizData = [
    {
        question: "Quan niệm nào sau đây sai về copyleft:",
        options: [
            "Được đưa ra dựa trên copyright",
            "Nghĩa vụ phân phối và cho phép truy xuất công khai các tác phẩm phái sinh",
            "Người sở hữu quyền cấp quyền để: sử dụng, sửa đổi, phân phối lại",
            "Tồn tại giấy phép copyleft cho cả phần mềm, âm nhạc và nghệ thuật"
        ],
        correct: 3,
        explanation: "Tất cả các quan niệm trên đều đúng về copyleft. Copyleft thực sự tồn tại cho cả phần mềm, âm nhạc và nghệ thuật."
    },
    {
        question: "Nếu bạn viết 1 chương trình áp dụng giấy phép GNU GPL thì bạn cần đính kèm những thông báo đi cùng phần mềm ở đâu:",
        options: [
            "Một thông báo độc lập đi kèm",
            "Đính kèm vào phần đầu của tập tin mã nguồn dưới dạng ghi chú",
            "Đính kèm vào phần cuối của tập tin mã nguồn dưới dạng ghi chú",
            "Cả 3 phương pháp trên đều đúng"
        ],
        correct: 1,
        explanation: "Theo GNU GPL, thông báo bản quyền thường được đính kèm vào phần đầu của tập tin mã nguồn dưới dạng ghi chú."
    },
    {
        question: "Giấy phép BSD - Berkeley System Distribution Licenses được sử dụng lần đầu tiên cho phần mềm nào?",
        options: [
            "Free BSD",
            "BSD Unix",
            "Net BSD",
            "Unix"
        ],
        correct: 1,
        explanation: "Giấy phép BSD được sử dụng lần đầu tiên cho BSD Unix."
    },
    {
        question: "Giấy phép mã nguồn mở là tập hợp các quy tắc đòi hỏi ai là người phải tuân theo:",
        options: [
            "Người sáng chế ra phần mềm mã nguồn mở.",
            "Nhà bảo hành phần mềm mã nguồn mở.",
            "Người sử dụng phần mềm mã nguồn mở.",
            "Cả 3"
        ],
        correct: 2,
        explanation: "Giấy phép mã nguồn mở là tập hợp các quy tắc mà người sử dụng phần mềm mã nguồn mở phải tuân theo."
    },
    {
        question: "Tổ chức OSI - Open Source Initiative là một tổ chức như thế nào?",
        options: [
            "Là một tổ chức phần mềm nguồn mở, trực tiếp phát triển các dự án phần mềm nguồn mở.",
            "Là một tổ chức phi lợi nhuận mà mục đích của nó là thúc đẩy sự phát triển phần mềm nguồn mở.",
            "Hoạt động quan trọng nhất của tổ chức này là xem xét phê duyệt giấy phép mã nguồn mở.",
            "Câu b và c"
        ],
        correct: 3,
        explanation: "OSI là một tổ chức phi lợi nhuận thúc đẩy phần mềm nguồn mở và phê duyệt các giấy phép mã nguồn mở."
    },
    {
        question: "Tổ chức FSF là tổ chức",
        options: [
            "Phần mềm mã nguồn mở",
            "Phần mềm tự do",
            "Quỹ phần mềm tự do",
            "Phần mềm miễn phí"
        ],
        correct: 2,
        explanation: "FSF là viết tắt của Free Software Foundation (Quỹ Phần mềm Tự do)."
    },
    {
        question: "Phát biểu nào sau đây không phải là phát biểu đúng",
        options: [
            "Phần mềm mã nguồn mở là phần mềm tự do",
            "Phần mềm mã nguồn mở cho phép người dùng được sửa mã nguồn",
            "Phần mềm mã nguồn mở là phần mềm miễn phí",
            "Phần mềm mã nguồn mở cho phép người dùng được tự do chia sẻ cho người khác"
        ],
        correct: 2,
        explanation: "Phần mềm mã nguồn mở không nhất thiết là phần mềm miễn phí. Nó có thể có giá nhưng mã nguồn vẫn mở."
    },
    {
        question: "Câu nào sau đây không phải là ưu điểm của mã nguồn mở",
        options: [
            "Phần mềm mã nguồn mở cung cấp kèm mã nguồn",
            "Phần mềm mã nguồn mở giúp cân bằng giá, chống độc quyền",
            "Phần mềm mã nguồn mở không phải mất tiền mua",
            "Phần mềm mã nguồn mở có độ ổn định cao"
        ],
        correct: 2,
        explanation: "Phần mềm mã nguồn mở không nhất thiết là miễn phí. Nó có thể có giá nhưng mã nguồn vẫn mở."
    },
    {
        question: "Câu nào sau đây là đúng",
        options: [
            "Phần mềm mã nguồn mở không mang lại lợi nhuận",
            "Phần mềm mã nguồn mở không cho phép phân phối lại",
            "Phần mềm mã nguồn mở không có bản quyền",
            "Phần mềm mã nguồn mở không có bảo hành"
        ],
        correct: 3,
        explanation: "Phần mềm mã nguồn mở thường không đi kèm bảo hành chính thức."
    },
    {
        question: "Điều nào sau đây không đúng với các giấy phép mã nguồn mở",
        options: [
            "Các loại giấy phép đều có cơ chế bảo vệ quyền của tác giả ban đầu",
            "Các loại giấy phép đều yêu cầu không được thay đổi nội dung giấy phép",
            "Có giấy phép yêu cầu phải sử dụng cùng loại giấy phép với sản phẩm phái sinh",
            "Không giấy phép nào cấm người dùng sửa đổi chương trình"
        ],
        correct: 1,
        explanation: "Một số giấy phép mã nguồn mở cho phép thay đổi nội dung giấy phép trong một số điều kiện nhất định."
    },
    {
        question: "Giấy phép GNU GPL phiên bản mới nhất là :",
        options: [
            "1.0",
            "2.0",
            "3.0",
            "4.0"
        ],
        correct: 2,
        explanation: "Phiên bản mới nhất của GNU GPL là 3.0."
    },
    {
        question: "Bạn hãy cho biết phần mềm văn phòng nào sau đây sử dụng giấy phép mã nguồn mở :",
        options: [
            "Microsoft Office",
            "Libre Office",
            "Cả a và b",
            "Không câu nào đúng"
        ],
        correct: 1,
        explanation: "LibreOffice là một bộ phần mềm văn phòng mã nguồn mở."
    },
    {
        question: "Bạn hãy cho biết phần mềm nào sau đây sử dụng giấy phép GNU GPL:",
        options: [
            "Ubuntu",
            "Window Xfree86",
            "JavaFBP toolkit",
            "Không câu nào đúng"
        ],
        correct: 0,
        explanation: "Ubuntu sử dụng giấy phép GNU GPL cho nhiều thành phần của nó."
    },
    {
        question: "Bạn hãy cho biết phần mềm nào sau đây sử dụng giấy phép BSD :",
        options: [
            "Ubuntu",
            "Window Xfree86",
            "JavaFBP toolkit",
            "Không câu nào đúng"
        ],
        correct: 1,
        explanation: "Window Xfree86 sử dụng giấy phép BSD."
    },
    {
        question: "Giấy phép nào không cấp phép một phần mềm/ thư viện mã nguồn đóng liên kết với một phần mềm/ thư viện mang giấy phép mở tương ứng.",
        options: [
            "GNU General Public License",
            "Apache Public License",
            "BSD License",
            "Artistic License"
        ],
        correct: 0,
        explanation: "GNU GPL là giấy phép copyleft mạnh, yêu cầu các tác phẩm phái sinh phải giữ nguyên giấy phép GPL, không cho phép liên kết với mã nguồn đóng."
    },
    {
        question: "Giấy phép nào có khả năng kết hợp một phần mềm với một phần mềm/ thư viện mang giấy phép mở tương ứng.",
        options: [
            "Apache Public License",
            "BSD License",
            "MIT License",
            "Cả 3 License"
        ],
        correct: 3,
        explanation: "Apache, BSD và MIT Licenses đều là các giấy phép permissive, cho phép kết hợp với các phần mềm/thư viện khác, kể cả mã nguồn đóng."
    },
    {
        question: "Phần mềm GIMP sử dụng giấy phép mã nguồn mở nào :",
        options: [
            "GNU GPL License",
            "Apache Public License",
            "BSD License",
            "Artistic License"
        ],
        correct: 0,
        explanation: "GIMP (GNU Image Manipulation Program) sử dụng giấy phép GNU GPL."
    },
    {
        question: "Phần mềm Mozilla Firefox sử dụng giấy phép mã nguồn mở nào :",
        options: [
            "Mozilla Public License",
            "BSD License",
            "Artistic License",
            "GPL License"
        ],
        correct: 0,
        explanation: "Mozilla Firefox sử dụng giấy phép Mozilla Public License (MPL)."
    },
    {
        question: "Phần mềm Apache Server sử dụng giấy phép nào sau đây:",
        options: [
            "BSD License",
            "Artistic License",
            "GPL License",
            "Apache License"
        ],
        correct: 3,
        explanation: "Apache HTTP Server sử dụng giấy phép Apache License."
    },
    {
        question: "Những phần mềm mã nguồn mở miễn phí nào sau đây giúp chạy các ứng dụng windows trên môi trường Ubuntu",
        options: [
            "Wine và CrossOver.",
            "Wine door và Cedega.",
            "Wine và PlayOnlinux .",
            "Không có đáp án đúng"
        ],
        correct: 2,
        explanation: "Wine và PlayOnLinux là các phần mềm mã nguồn mở giúp chạy ứng dụng Windows trên Linux."
    },
    {
        question: "Mã nguồn mở Nukeviet có mấy dòng phiên bản chính?",
        options: [
            "2",
            "1",
            "3",
            "4"
        ],
        correct: 0,
        explanation: "Nukeviet có 2 dòng phiên bản chính."
    },
    {
        question: "Trong các dòng phiên bản sau, dòng phiên bản chính nào của Nukeviet?",
        options: [
            "Dòng 2.0 trở về trước",
            "Dòng 3.0 trở về sau",
            "Dòng 4.0",
            "1 và 2 đúng"
        ],
        correct: 1,
        explanation: "Dòng phiên bản chính của Nukeviet là từ 3.0 trở về sau."
    },
    {
        question: "Dòng phiên bản Nukeviet 2.0 do những ai phát triển?",
        options: [
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nga phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Đức phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Pháp phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nhật phát triển"
        ],
        correct: 0,
        explanation: "Nukeviet 2.0 được phát triển bởi Nguyễn Anh Tú và một số lưu học sinh Việt Nam tại Nga."
    },
    {
        question: "Nukeviet được viết bằng ngôn ngữ và sử dụng CSDL nào?",
        options: [
            "PHP và MySQL",
            "PHP và Access",
            "PHP và DB4.0",
            "PHP và O2"
        ],
        correct: 0,
        explanation: "Nukeviet được viết bằng PHP và sử dụng MySQL làm cơ sở dữ liệu."
    },
    {
        question: "Nukeviet sử dụng bộ giấy phép nào?",
        options: [
            "GNU/GPL",
            "GNU/GPC",
            "GUI/GPL",
            "GNU/GPLS"
        ],
        correct: 0,
        explanation: "Nukeviet sử dụng giấy phép GNU/GPL."
    },
    {
        question: "Chọn phát biểu đúng?",
        options: [
            "Joomla là mã nguồn mở và được cung cấp hoàn toàn miễn phí",
            "Joomla là một công cụ lập trình web",
            "Joomla được phát triển bởi Microsoft",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Joomla là một hệ quản trị nội dung (CMS) mã nguồn mở và miễn phí."
    },
    {
        question: "Chọn phát biểu đúng?",
        options: [
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu và những thành viên tích cực",
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu",
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những thành viên tích cực",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Joomla được phát triển bởi một cộng đồng lớn gồm các chuyên gia và thành viên tích cực."
    },
    {
        question: "Chọn phát biểu đúng",
        options: [
            "Joomla có 1 cộng đồng phát triển cũng như sử dụng, điều đó có nghĩa là ngay khi gặp vấn đề khó khăn, rất nhiều người tình nguyện giúp đỡ bạn",
            "Khi gặp khó khăn không có ai giúp đỡ",
            "Khi gặp khó thì tự mình giải quyết",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Cộng đồng lớn là một ưu điểm của Joomla, giúp người dùng dễ dàng tìm kiếm sự hỗ trợ."
    },
    {
        question: "Joomla giúp tiết kiệm thời gian và công sức thiết kế Website",
        options: [
            "Tự ngồi lập trình lại từ đầu",
            "Tự phát triển ngay từ đầu",
            "Không có đáp án đúng",
            "Joomla giúp tiết kiệm thời gian và công sức thiết kế Website"
        ],
        correct: 3,
        explanation: "Joomla là một CMS giúp xây dựng website nhanh chóng mà không cần lập trình từ đầu."
    },
    {
        question: "Joomla có thể sử dụng vào những site?",
        options: [
            "Blog cá nhân, tin tức, trường học",
            "Thể thao, giải trí, mua sắm, thương mại điện tử",
            "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Joomla là một CMS đa năng, có thể được sử dụng cho nhiều loại website khác nhau."
    },
    {
        question: "Joomla không thể sử dụng vào những site?",
        options: [
            "Blog cá nhân, tin tức, trường học",
            "Thể thao, giải trí, mua sắm, thương mại điện tử",
            "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
            "Không có đáp án đúng"
        ],
        correct: 3,
        explanation: "Joomla có thể được sử dụng cho tất cả các loại site trên, nên không có đáp án nào là 'không thể sử dụng'."
    },
    {
        question: "Moodle viết tắt của?",
        options: [
            "Modular Object-Oriented Dynamic Learning Environment",
            "Modular -Oriented Dynamic Learning Environment",
            "Modular Object- Dynamic Learning Environment",
            "Modular Object-Oriented Learning Environment"
        ],
        correct: 0,
        explanation: "Moodle là viết tắt của Modular Object-Oriented Dynamic Learning Environment."
    },
    {
        question: "Công cụ Moodle dùng chủ yếu trong site nào?",
        options: [
            "Giáo dục",
            "Tin tức",
            "Thương mại điện tử",
            "Thể thao, giải trí"
        ],
        correct: 0,
        explanation: "Moodle là một hệ thống quản lý học tập (LMS) được sử dụng rộng rãi trong giáo dục."
    },
    {
        question: "Moodle là một giải pháp học tập lý tưởng trên mạng cho?",
        options: [
            "Các trường phổ thông",
            "Các trường đại học, cao đẳng",
            "Các tổ chức doanh nghiệp, bệnh viện",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Moodle có thể được sử dụng cho tất cả các loại tổ chức: trường phổ thông, đại học, cao đẳng, doanh nghiệp, bệnh viện."
    },
    {
        question: "Bài giảng trong Moodle sử dụng chuẩn nào?",
        options: [
            "SCORM",
            "MCOM",
            "Powerpoint",
            "SCOM"
        ],
        correct: 0,
        explanation: "Moodle sử dụng chuẩn SCORM (Sharable Content Object Reference Model) cho các bài giảng trực tuyến."
    },
    {
        question: "Cấu trúc của hệ thống Moodle elearning gồm mấy phần?",
        options: [
            "5",
            "4",
            "3",
            "2"
        ],
        correct: 3,
        explanation: "Cấu trúc của hệ thống Moodle elearning gồm 2 phần chính: giao diện người dùng và hệ thống quản lý."
    },
    {
        question: "Trong các tính năng sau, tính năng nào là của Moodle?",
        options: [
            "Tạo và quản lý khóa học",
            "Đưa nội dung bài học tới học viên",
            "Quản lý học viên",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Moodle có đầy đủ các tính năng: tạo và quản lý khóa học, đưa nội dung bài học tới học viên, và quản lý học viên."
    },
    {
        question: "Trong các tính năng sau, tính năng nào là của Moodle?",
        options: [
            "Trợ giúp giáo viên tổ chức các hoạt động: đánh giá, thảo luận, bài học, kiểm tra, bài tập lớn,...",
            "Quản lý tài nguyên",
            "Tổ chức hội thảo",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Moodle có tất cả các tính năng: trợ giúp giáo viên tổ chức hoạt động, quản lý tài nguyên, và tổ chức hội thảo."
    },
    {
        question: "Trong các tính năng sau, tính năng nào là của Moodle?",
        options: [
            "Quản lý sự kiện",
            "Báo cáo tiến trình học tập của học viên",
            "Trợ giúp nội dung khóa học",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Moodle có đầy đủ các tính năng: quản lý sự kiện, báo cáo tiến trình học tập, và trợ giúp nội dung khóa học."
    },
    {
        question: "Trong các đối tượng sau, đối tượng nào phục vụ Moodle Elearning?",
        options: [
            "Quản lý viên",
            "Giảng viên",
            "Sinh viên",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Tất cả các đối tượng: quản lý viên, giảng viên, và sinh viên đều phục vụ Moodle Elearning."
    },
    {
        question: "Trong các đối tượng sau, đối tượng nào không phục vụ Moodle Elearning?",
        options: [
            "Quản lý viên",
            "Giảng viên",
            "Sinh viên",
            "Cả 'a', 'b', 'c' đều sai"
        ],
        correct: 3,
        explanation: "Tất cả các đối tượng trên đều phục vụ Moodle Elearning, nên không có đáp án nào là 'không phục vụ'."
    },
    {
        question: "Quy trình triển khai hệ thống Moodle gồm có mấy bước?",
        options: [
            "4",
            "3",
            "2",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Quy trình triển khai hệ thống Moodle gồm có 4 bước chính."
    },
    {
        question: "Bước 1 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        options: [
            "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
            "Cài đặt và cấu hình hệ thống Moodle Elearning",
            "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
            "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning"
        ],
        correct: 0,
        explanation: "Bước 1 là chuẩn bị hạ tầng: thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost."
    },
    {
        question: "Bước 2 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        options: [
            "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
            "Cài đặt và cấu hình hệ thống Moodle Elearning",
            "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
            "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning"
        ],
        correct: 1,
        explanation: "Bước 2 là cài đặt và cấu hình hệ thống Moodle Elearning."
    },
    {
        question: "Bước 3 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        options: [
            "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
            "Cài đặt và cấu hình hệ thống Moodle Elearning",
            "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
            "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning"
        ],
        correct: 2,
        explanation: "Bước 3 là tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống."
    },
    {
        question: "Bước 4 trong quy trình triển khai hệ thống Moodle thực hiện công việc?",
        options: [
            "Thuê tên miền, webhosting hoặc cài đặt hệ thống Moodle trên server localhost",
            "Cài đặt và cấu hình hệ thống Moodle Elearning",
            "Tạo các tài khoản cho người dùng và phân quyền cho người dùng trong hệ thống",
            "Hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning"
        ],
        correct: 3,
        explanation: "Bước 4 là hỗ trợ thường xuyên người dùng trong quá trình sử dụng hệ thống Moodle Elearning."
    },
    {
        question: "Ưu điểm của Moodle Elearning là?",
        options: [
            "Can thiệp vào code",
            "Cộng đồng người sử dụng lớn, nên có thể giúp chúng ta vận hành, phát triển",
            "Tương thích với nhiều công cụ tạo bài giảng, dễ quản trị, cấu hình...",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Tất cả các ưu điểm trên đều đúng với Moodle Elearning."
    },
    {
        question: "Để tạo môi trường Web trên localhost bạn chọn cách nào sau đây?",
        options: [
            "Cài đặt IIS trong Windows",
            "Cài đặt SQL Server",
            "Cài đặt MySQL",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Để tạo môi trường Web trên localhost, có thể cài đặt IIS trong Windows."
    },
    {
        question: "Để tạo môi trường Web và CSDL trên Localhost bạn phải cài đặt?",
        options: [
            "Cài đặt XAMPP",
            "Cài đặt XML",
            "Cài đặt PHP",
            "Cài đặt IIS"
        ],
        correct: 0,
        explanation: "Để tạo môi trường Web và CSDL trên Localhost, cần cài đặt XAMPP (gồm Apache, MySQL, PHP)."
    },
    {
        question: "Để tạo môi trường Web và CSDL trên Localhost bạn phải cài đặt?",
        options: [
            "XAMPP",
            "IIS và SQL Server",
            "Cả 'a', 'b' đều đúng",
            "Cả 'a', 'b' đều sai"
        ],
        correct: 2,
        explanation: "Cả XAMPP và IIS + SQL Server đều có thể tạo môi trường Web và CSDL trên Localhost."
    },
    {
        question: "Web Server là gì?",
        options: [
            "Là máy tính mà trên đó cài đặt phần mềm phục vụ Web",
            "Là máy tính cài đặt các phần mềm ứng dụng",
            "Là máy tính mà trên đó cài đặt Office",
            "Là máy tính trên đó cài đặt phần mềm"
        ],
        correct: 0,
        explanation: "Web Server là máy tính mà trên đó cài đặt phần mềm phục vụ Web."
    },
    {
        question: "Theo bạn có những Webserver nào sau đây không tồn tại?",
        options: [
            "Apache",
            "IIS của Microsoft",
            "Sun Java System Web",
            "Không có đáp án đúng"
        ],
        correct: 2,
        explanation: "Sun Java System Web không tồn tại. Các web server phổ biến là Apache, IIS, Nginx."
    },
    {
        question: "Webserver IIS của Microsoft dành cho:",
        options: [
            "*.asp; *.aspx,...",
            "PHP",
            "JSP",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "IIS của Microsoft chủ yếu dành cho các file *.asp, *.aspx và các công nghệ Microsoft."
    },
    {
        question: "Webserver Apache dành cho:",
        options: [
            "*.PHP,...",
            "ASP",
            "XML",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Apache chủ yếu dành cho PHP và các công nghệ mã nguồn mở."
    },
    {
        question: "Webserver SUN Java dành cho:",
        options: [
            "*.jsp,...",
            "PHP",
            "ASP",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "SUN Java System Web Server dành cho các file *.jsp và công nghệ Java."
    },
    {
        question: "Nhìn vào hình 01, để truy cập vào bảng điều khiển bạn chọn?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 0,
        explanation: "Để truy cập vào bảng điều khiển XAMPP, chọn option 1 - 'start XAMPP Control Panel'."
    },
    {
        question: "Nhìn vào hình 01, để truy cập vào thư mục gốc XAMPP bạn chọn?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0,
        explanation: "Để truy cập vào thư mục gốc XAMPP, chọn option 2 - 'relocate XAMPP'."
    },
    {
        question: "Nhìn vào hình 01, để vô hiệu hóa Hypertext Transfer Protocol Secure bạn chọn?",
        options: [
            "3",
            "5",
            "4",
            "6"
        ],
        correct: 0,
        explanation: "Để vô hiệu hóa HTTPS (SSL), chọn option 3 - 'disable HTTPS (SSL)'."
    },
    {
        question: "Nhìn vào hình 01, để vô hiệu hóa máy chủ bạn chọn?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correct: 0,
        explanation: "Để vô hiệu hóa Server Side Includes (SSI), chọn option 4 - 'disable Server Side Includes (SSI)'."
    },
    {
        question: "Nhìn vào hình 01, để cho phép sử dụng địa chỉ ipv4 bạn chọn?",
        options: [
            "5",
            "6",
            "7",
            "1"
        ],
        correct: 0,
        explanation: "Để cho phép sử dụng địa chỉ IPv4, chọn option 5 - 'enable IPv4 only'."
    },
    {
        question: "Nhìn vào hình 01, để vô hiệu hóa modperl bạn chọn?",
        options: [
            "6",
            "7",
            "4",
            "2"
        ],
        correct: 0,
        explanation: "Để vô hiệu hóa mod_perl, chọn option 6 - 'disable mod_perl'."
    },
    {
        question: "Nhìn vào hình 01, để vô hiệu hóa môi trường web bạn chọn?",
        options: [
            "7",
            "6",
            "5",
            "4"
        ],
        correct: 0,
        explanation: "Để vô hiệu hóa Apache::ASP, chọn option 7 - 'disable Apache::ASP'."
    },
    {
        question: "Nhìn vào hình 01, để thoát khỏi cửa sổ cài đặt bạn chọn?",
        options: [
            "x",
            "exit",
            "cmd",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Để thoát khỏi cửa sổ cài đặt XAMPP, chọn 'x' - 'Exit'."
    },
    {
        question: "Nhìn vào hình 02, để tạo môi trường Web và CSDL bạn chọn?",
        options: [
            "9 và 10",
            "8",
            "3",
            "1 và 2"
        ],
        correct: 0,
        explanation: "Để tạo môi trường Web và CSDL, chọn Modules (9) và Start Apache (10)."
    },
    {
        question: "Nhìn vào hình 02, để kiểm tra các port trong công cụ XAMPP bạn chọn?",
        options: [
            "3",
            "1",
            "2",
            "4"
        ],
        correct: 0,
        explanation: "Để kiểm tra các port trong XAMPP, chọn Port-Check (3)."
    },
    {
        question: "Nhìn vào hình 02, để làm mới các port trong công cụ XAMPP bạn chọn?",
        options: [
            "6",
            "5",
            "7",
            "8"
        ],
        correct: 0,
        explanation: "Để làm mới các port trong XAMPP, chọn Refresh (6)."
    },
    {
        question: "Nhìn vào hình 02, để xem hướng dẫn cấu hình công cụ XAMPP bạn chọn?",
        options: [
            "7",
            "8",
            "9",
            "10"
        ],
        correct: 0,
        explanation: "Để xem hướng dẫn cấu hình XAMPP, chọn Help (7)."
    },
    {
        question: "Nhìn vào hình 02, để thoát khỏi công cụ sau khi cài đặt trong XAMPP bạn chọn?",
        options: [
            "8",
            "7",
            "6",
            "5"
        ],
        correct: 0,
        explanation: "Để thoát khỏi XAMPP Control Panel, chọn Exit (8)."
    },
    {
        question: "Nhìn vào hình 02, để quay trở lại môi trường DOS trong XAMPP bạn chọn?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 0,
        explanation: "Để quay trở lại môi trường DOS trong XAMPP, chọn Shell (1)."
    },
    {
        question: "Nhìn vào hình 02, để quay trở lại môi trường DOS và cài đặt lại XAMPP trong môi trường DOS bạn chọn?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0,
        explanation: "Để quay trở lại môi trường DOS và cài đặt lại XAMPP, chọn Setup (2)."
    },
    {
        question: "Nhìn vào hình 02, phiên bản XAMPP là?",
        options: [
            "1.7.2",
            "1.7.2.x",
            "1.7.7",
            "1.7.8"
        ],
        correct: 0,
        explanation: "Phiên bản XAMPP hiển thị trong hình là 1.7.2."
    },
    {
        question: "Nhìn vào hình 02, bạn hãy cho biết XAMPP được lưu trữ tại?",
        options: [
            "C:\\xampp",
            "D:\\xampp",
            "E:\\xampp",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "XAMPP được lưu trữ tại C:\\xampp theo thông tin hiển thị trong hình."
    },
    {
        question: "Nhìn vào hình 03, để backup được 1 CSDL, sau thao tác chọn CSDL cần Backup bạn chọn?",
        options: [
            "9",
            "8",
            "10",
            "7"
        ],
        correct: 0,
        explanation: "Để backup CSDL trong phpMyAdmin, chọn Export (9)."
    },
    {
        question: "Nhìn vào hình 03, để khôi phục được 1 CSDL, sau thao tác chọn CSDL cần khôi phục bạn chọn?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],
        correct: 0,
        explanation: "Để khôi phục CSDL trong phpMyAdmin, chọn Import (10)."
    },
    {
        question: "Nhìn vào hình 03, để kiểm tra trong hệ thống có bao nhiêu CSDL bạn chọn?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 0,
        explanation: "Để kiểm tra số lượng CSDL trong hệ thống, chọn Databases (1)."
    },
    {
        question: "Nhìn vào hình 03, để tạo ra một câu truy vấn trong CSDL bạn chọn?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 0,
        explanation: "Để tạo câu truy vấn SQL trong CSDL, chọn SQL (2)."
    },
    {
        question: "Nhìn vào hình 03, để xem trạng thái của CSDL bạn chọn?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: 0,
        explanation: "Để xem trạng thái của CSDL, chọn Status (3)."
    },
    {
        question: "Nhìn vào hình 03, để chọn gói ngôn ngữ bạn chọn?",
        options: [
            "11",
            "1",
            "12",
            "14"
        ],
        correct: 0,
        explanation: "Để chọn gói ngôn ngữ trong phpMyAdmin, chọn Language (11)."
    },
    {
        question: "Để tạo ra một Database bạn chọn thao tác nào sau sau khi mở trình duyệt Web?",
        options: [
            "localhost/phpMyadmin gõ tên CSDL vào mục 'Create new database'",
            "localhost/phpMyadmin gõ tên CSDL vào mục 'Create new databas'",
            "localhost/phpMyadmin gõ tên CSDL vào mục 'Create database'",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Để tạo Database, truy cập localhost/phpMyAdmin và gõ tên CSDL vào mục 'Create new database'."
    },
    // Hình 05 - Moodle Navigation & Settings
    {
        question: "HA(80) - Nhìn vào hình 05, để xem trang thông tin cá nhân của bạn, bạn chọn?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Để xem trang thông tin cá nhân, chọn số 3 - 'My profile'."
    },
    {
        question: "HA(81) - Nhìn vào hình 05, để xem các trang hệ thống, bạn chọn?",
        options: ["2", "1", "3", "4"],
        correct: 0,
        explanation: "Để xem các trang hệ thống, chọn số 2 - 'Site pages'."
    },
    {
        question: "HA(82) - Nhìn vào hình 05, để xem thông tin cá nhân của các tài khoản, bạn chọn?",
        options: ["3", "2", "1", "4"],
        correct: 0,
        explanation: "Để xem thông tin cá nhân của các tài khoản, chọn số 3 - 'My profile'."
    },
    {
        question: "HA(83) - Nhìn vào hình 05, để đánh dấu trang, bạn chọn?",
        options: ["4", "3", "2", "1"],
        correct: 0,
        explanation: "Để đánh dấu trang, chọn số 4 - 'bookmark this page'."
    },
    {
        question: "HA(84) - Nhìn vào hình 05, để thêm một khối bạn chọn?",
        options: ["5", "4", "3", "2"],
        correct: 0,
        explanation: "Để thêm một khối, chọn số 5 - 'Add a block' dropdown và nút 'Add...'."
    },
    {
        question: "HA(85) - Nhìn vào hình 05, click vào đâu để xem được các thông tin Tài khoản, thêm, sửa, xóa tài khoản?",
        options: ["9", "10", "11", "12"],
        correct: 0,
        explanation: "Để quản lý tài khoản, click vào số 9 - 'Users'."
    },
    {
        question: "HA(86) - Nhìn vào hình 05, click vào đâu để có thể thêm được các khóa học, sửa khóa học, xóa khóa học?",
        options: ["10", "11", "12", "13"],
        correct: 0,
        explanation: "Để quản lý khóa học, click vào số 10 - 'Courses'."
    },
    {
        question: "HA(87) - Nhìn vào hình 05, click vào đâu để có thể xem điểm số của các học viên?",
        options: ["11", "12", "13", "14"],
        correct: 0,
        explanation: "Để xem điểm số học viên, click vào số 11 - 'Grades'."
    },
    {
        question: "HA(88) - Nhìn vào hình 05, click vào đâu để thiết lập lại múi giờ?",
        options: ["12", "13", "14", "15"],
        correct: 0,
        explanation: "Để thiết lập múi giờ, click vào số 12 - 'Location'."
    },
    {
        question: "HA(89) - Nhìn vào hình 05, click vào đâu để thiết lập lại ngôn ngữ cho website?",
        options: ["13", "14", "15", "16"],
        correct: 0,
        explanation: "Để thiết lập ngôn ngữ, click vào số 13 - 'Language'."
    },
    {
        question: "HA(90) - Nhìn vào hình 05, click vào đâu để thiết lập các chính sách bảo mật cho Web?",
        options: ["18", "19", "20", "17"],
        correct: 0,
        explanation: "Để thiết lập chính sách bảo mật, click vào số 18 - 'Security'."
    },
    {
        question: "HA(91) - Nhìn vào hình 05, click vào đâu để thiết lập hình thức trình bày của web?",
        options: ["19", "18", "17", "16"],
        correct: 0,
        explanation: "Để thiết lập hình thức trình bày, click vào số 19 - 'Appearance'."
    },
    {
        question: "HA(92) - Nhìn vào hình 05, click vào đâu để xem đường dẫn hệ thống, thư điện tử, quản lý phiên làm việc?",
        options: ["15", "16", "17", "18"],
        correct: 0,
        explanation: "Để xem thông tin hệ thống, click vào số 15 - 'Server'."
    },
    {
        question: "HA(93) - Nhìn vào hình 05, click vào đâu để xem các lời bình, nhật ký lưu, thống kê?",
        options: ["16", "17", "18", "19"],
        correct: 0,
        explanation: "Để xem báo cáo và thống kê, click vào số 16 - 'Reports'."
    },
    // Hình 06 - Course Creation Form
    {
        question: "HA(94) - Nhìn vào hình 06, trước khi thêm khóa học mới, bạn phải chọn 'category' cho khóa học đó. Bạn phải click chọn gì?",
        options: ["1", "2", "3", "4"],
        correct: 0,
        explanation: "Để chọn category cho khóa học, click vào số 1 - 'Category' dropdown."
    },
    {
        question: "HA(95) - Nhìn vào hình 06, để nhập thông tin ID number cho khóa học bạn chọn?",
        options: ["4", "3", "2", "1"],
        correct: 0,
        explanation: "Để nhập ID number, chọn số 4 - 'Course ID number' field."
    },
    {
        question: "HA(96) - Nhìn vào hình 06, để cung cấp thông tin tóm tắt về khóa học bạn chọn?",
        options: ["5", "4", "3", "2"],
        correct: 0,
        explanation: "Để cung cấp tóm tắt khóa học, chọn số 5 - 'Course summary' text area."
    },
    {
        question: "HA(97) - Nhìn vào hình 06, để định dạng bài giảng theo chuẩn SCORM bạn click chọn?",
        options: ["7", "6", "5", "4"],
        correct: 0,
        explanation: "Để định dạng theo chuẩn SCORM, chọn số 7 - 'Weekly format' dropdown."
    },
    {
        question: "HA(98) - Nhìn vào hình 06, để thiết lập dung lượng của 1 file khi upload lên hệ thống bạn chọn?",
        options: ["13", "12", "11", "10"],
        correct: 0,
        explanation: "Để thiết lập dung lượng upload, chọn số 13 - 'Maximum upload size' dropdown."
    },
    {
        question: "HA(99) - Nhìn vào hình 06, để thiết lập chế độ xem báo cáo hoạt động, bạn click chọn?",
        options: ["12", "13", "14", "10"],
        correct: 0,
        explanation: "Để thiết lập chế độ xem báo cáo hoạt động, chọn số 12 - 'Show activity reports?' dropdown."
    },
    {
        question: "HA(100) - Nhìn vào hình 06, để thiết lập ngày bắt đầu khóa học bạn chọn?",
        options: ["8", "7", "6", "5"],
        correct: 0,
        explanation: "Để thiết lập ngày bắt đầu khóa học, chọn số 8 - 'Course start date' dropdowns."
    },
    // Phần HB - Open Source Projects & Software
    {
        question: "HB(1) - Những phát biểu nào đúng về dự án nguồn mở?",
        options: [
            "Bất kỳ ai cũng có thể tải về toàn bộ kho mã nguồn",
            "Bất kỳ ai cũng có thể tải về toàn bộ các tài liệu",
            "Bất kỳ ai cũng có thể cùng cộng tác đóng góp",
            "Tất cả các đáp án"
        ],
        correct: 3,
        explanation: "Tất cả các phát biểu đều đúng về dự án nguồn mở: tải mã nguồn, tài liệu, và cộng tác đóng góp."
    },
    {
        question: "HB(2) - Những phát biểu nào sai về dự án mã nguồn mở?",
        options: [
            "Bất kỳ ai cũng có thể tải về toàn bộ kho mã nguồn",
            "Bất kỳ ai cũng có thể tải về toàn bộ các tài liệu",
            "Tất cả tài liệu dự án phải có giấy phép CC-BY hoặc CC-BY-SA",
            "Bất kỳ ai cũng có quyền cá nhân hóa mã nguồn được chia sẻ"
        ],
        correct: 2,
        explanation: "Không phải tất cả tài liệu dự án đều phải có giấy phép CC-BY hoặc CC-BY-SA. Có nhiều loại giấy phép khác nhau."
    },
    {
        question: "HB(3) - Phần mềm tự do nguồn mở mục đích là?",
        options: [
            "Giải phóng những cản trở về tư duy tự do trong sáng tạo, phát triển, chia sẻ của phần mềm",
            "Giải phóng những rào cản của sự phức tạp công nghệ bằng khả năng tự động hóa",
            "Liên kết nguồn tri thức vô tận trong xã hội, cạnh tranh bình đẳng và tự do trong sáng tạo",
            "Tất cả các đáp án"
        ],
        correct: 0,
        explanation: "Mục đích chính của phần mềm tự do nguồn mở là giải phóng những cản trở về tư duy tự do trong sáng tạo, phát triển, chia sẻ của phần mềm."
    },
    {
        question: "HB(4) - Giấy phép dạng Copyleft nghĩa là gì?",
        options: [
            "Một loại giấy phép mà hạn chế sự tự do để sử dụng, chỉnh sửa, mở rộng và phân phối lại các phiên bản mã nguồn",
            "Là loại giấy phép được cấp phép cho tất cả các phần mềm miễn phí",
            "BSD và MIT là giấy phép ở dạng này",
            "Không có đáp án"
        ],
        correct: 3,
        explanation: "Copyleft là một khái niệm phức tạp không thể định nghĩa đơn giản bằng các lựa chọn trên."
    },
    {
        question: "HB(5) - Trong các dự án nguồn mở, Contributor (người đóng góp) là thành viên như thế nào?",
        options: [
            "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền truy cập trực tiếp vào mã nguồn của dự án",
            "Thành viên có quyền truy cập trực tiếp vào mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
            "Thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giám cấp thành viên và quản lý tổng thể cả dự án",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Contributor là thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền truy cập trực tiếp vào mã nguồn của dự án."
    },
    {
        question: "HB(6) - Trong các dự án nguồn mở, Committer (người đề xuất) là thành viên như thế nào?",
        options: [
            "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền truy cập trực tiếp vào mã nguồn của dự án",
            "Thành viên có quyền truy cập trực tiếp vào mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
            "Thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giám cấp thành viên và quản lý tổng thể cả dự án",
            "Không có đáp án"
        ],
        correct: 1,
        explanation: "Committer là thành viên có quyền truy cập trực tiếp vào mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án."
    },
    {
        question: "HB(7) - Trong các dự án nguồn mở, Reviewer là thành viên như thế nào?",
        options: [
            "Thành viên đã viết mã nguồn và được chấp nhận đặt trong dự án, tuy nhiên không có quyền truy cập trực tiếp vào mã nguồn của dự án",
            "Thành viên có quyền truy cập trực tiếp vào mã nguồn của dự án, thường xuyên viết mã nguồn cho các chức năng cũng như sửa các bug cho dự án",
            "Thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giám cấp thành viên và quản lý tổng thể cả dự án",
            "Không có đáp án"
        ],
        correct: 2,
        explanation: "Reviewer là thành viên thực hiện việc xét duyệt các bản đóng góp vào dự án, thăng cấp hoặc giám cấp thành viên và quản lý tổng thể cả dự án."
    },
    {
        question: "HB(8) - Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 0 là gì?",
        options: [
            "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
            "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
            "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
            "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn cho mọi người"
        ],
        correct: 0,
        explanation: "Quyền tự do số 0 là tự do chạy chương trình phần mềm vì bất kỳ mục đích nào."
    },
    {
        question: "HB(9) - Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 1 là gì?",
        options: [
            "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
            "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn. Việc truy cập vào mã nguồn là điều kiện tiên quyết để làm được việc này",
            "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
            "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn cho mọi người"
        ],
        correct: 1,
        explanation: "Quyền tự do số 1 là tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn."
    },
    {
        question: "HB(10) - Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 2 là gì?",
        options: [
            "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
            "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn",
            "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
            "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn cho mọi người"
        ],
        correct: 2,
        explanation: "Quyền tự do số 2 là tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn."
    },
    {
        question: "HB(11) - Phần mềm tự do tham chiếu tới 4 quyền tự do cho người sử dụng phần mềm, quyền tự do số 3 là gì?",
        options: [
            "Tự do chạy chương trình phần mềm vì bất kỳ mục đích nào",
            "Tự do nghiên cứu cách mà chương trình phần mềm làm việc, áp dụng nó vào cho các nhu cầu của bạn",
            "Tự do phân phối các bản sao, sao cho bạn có thể giúp được người hàng xóm của bạn",
            "Tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn cho mọi người"
        ],
        correct: 3,
        explanation: "Quyền tự do số 3 là tự do cải tiến chương trình phần mềm, và tung ra những cải tiến của bạn cho mọi người."
    },
    {
        question: "HB(12) - Tính tương thích của 2 loại giấy phép mã nguồn mở nghĩa là?",
        options: [
            "Bạn có thể tạo ra mã nguồn mà nó xuất xứ từ cả 2 loại giấy phép",
            "Hai loại giấy phép sử dụng giống y hệt nhau",
            "Là hai loại giấy phép cùng được cấp phép bởi OSI",
            "Việc đưa mã nguồn theo giấy phép này đòi hỏi bạn phải thay đổi những điều khoản của giấy phép kia"
        ],
        correct: 0,
        explanation: "Tính tương thích của 2 loại giấy phép mã nguồn mở nghĩa là bạn có thể tạo ra mã nguồn mà nó xuất xứ từ cả 2 loại giấy phép."
    },
    {
        question: "HB(13) - Phần mềm nguồn mở là gì?",
        options: [
            "Là phần mềm sử dụng giấy phép được cấp phép bởi OSI",
            "Là phần mềm chia sẻ tự do và mã nguồn là sẵn có",
            "Là phần mềm sử dụng giấy phép được cấp phép bởi GNU",
            "Là phần mềm sử dụng giấy phép được cấp phép bởi FSF"
        ],
        correct: 0,
        explanation: "Phần mềm nguồn mở là phần mềm sử dụng giấy phép được cấp phép bởi OSI (Open Source Initiative)."
    },
    {
        question: "HB(14) - Phần mềm tự do là gì?",
        options: [
            "Là phần mềm sử dụng giấy phép được cấp phép bởi OSI",
            "Là phần mềm chia sẻ tự do và mã nguồn là sẵn có",
            "Là phần mềm sử dụng giấy phép được cấp phép bởi GNU",
            "Là phần mềm sử dụng giấy phép được cấp phép bởi FSF"
        ],
        correct: 3,
        explanation: "Phần mềm tự do là phần mềm sử dụng giấy phép được cấp phép bởi FSF (Free Software Foundation)."
    },
    {
        question: "HB(15) - Phần mềm miễn phí (freeware) là gì?",
        options: [
            "Là một loại phần mềm tự do",
            "Là một loại phần mềm nguồn mở",
            "Là phần mềm tự do và cũng là phần mềm nguồn mở",
            "Không có đáp án"
        ],
        correct: 3,
        explanation: "Freeware không phải là phần mềm tự do hay nguồn mở, nó chỉ là phần mềm miễn phí về mặt tài chính."
    },
    {
        question: "HB(16) - Phần mềm nguồn mở là gì?",
        options: [
            "Là một loại phần mềm tự do và mã nguồn có sẵn",
            "Là phần mềm không có chi phí về tài chính",
            "Là phần mềm vừa được gọi là tự do và được chứng thực là nguồn mở",
            "Là phần mềm đáp ứng tiêu chí của một loại giấy phép mở"
        ],
        correct: 0,
        explanation: "Phần mềm nguồn mở là một loại phần mềm tự do và mã nguồn có sẵn."
    },
    // Phần HB tiếp theo - Open Source Projects & Licenses
    {
        question: "HB(17) - Phần mềm tự do là gì?",
        options: [
            "Giống như phần mềm nguồn mở nhưng mã nguồn không được chia sẻ",
            "Là loại phần mềm sử dụng tự do, không mất chi phí",
            "Là loại phần mềm tập trung vào vài dạng quyền tự do liên quan tới giấy phép phần mềm",
            "Là loại phần mềm sử dụng giấy phép GNU"
        ],
        correct: 2,
        explanation: "Phần mềm tự do là loại phần mềm tập trung vào vài dạng quyền tự do liên quan tới giấy phép phần mềm."
    },
    {
        question: "HB(18) - Những thành viên nào đóng góp nhiều nhất trong một dự án nguồn mở?",
        options: [
            "Là những lập trình viên phần mềm",
            "Là những người đóng góp",
            "Là những người đề xuất",
            "Là những thành viên mới",
            "Là tất cả những người tham gia",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Tất cả những người tham gia đều có thể đóng góp nhiều nhất trong dự án nguồn mở tùy theo khả năng và sự nhiệt tình của họ."
    },
    {
        question: "HB(19) - Những người mới tham gia vào dự án nguồn mở có thể tham gia vào các công việc nào?",
        options: [
            "Giúp những người sử dụng mới, đưa ra các ý kiến phản hồi...",
            "Thực thi những đề xuất mới, tham gia thảo luận trong diễn đàn...",
            "Viết và cập nhật phần mềm, sửa code trong kho code của dự án...",
            "Đề cử mình để trở thành người đóng góp cho dự án..."
        ],
        correct: 0,
        explanation: "Người mới tham gia có thể bắt đầu bằng việc giúp những người sử dụng mới, đưa ra các ý kiến phản hồi để làm quen với dự án."
    },
    {
        question: "HB(20) - Giấy phép GNU GPLv2 là loại giấy phép gì?",
        options: [
            "Giấy phép được phê chuẩn là mở",
            "Giấy phép được phê chuẩn là tự do",
            "Giấy phép riêng của tổ chức GNU",
            "Giấy phép dạng Copyleft"
        ],
        correct: 3,
        explanation: "GNU GPLv2 là giấy phép dạng Copyleft, yêu cầu các tác phẩm phái sinh phải sử dụng cùng giấy phép."
    },
    {
        question: "HB(21) - Việc ra quyết định trong các dự án nguồn mở theo thứ tự như thế nào?",
        options: [
            "Đề xuất, thảo luận, biểu quyết, quyết định",
            "Thảo luận, đề xuất, biểu quyết, quyết định",
            "Đề xuất, quyết định, thảo luận, biểu quyết",
            "Đề xuất, quyết định, thảo luận, rà soát lại"
        ],
        correct: 0,
        explanation: "Quy trình ra quyết định trong dự án nguồn mở: Đề xuất → Thảo luận → Biểu quyết → Quyết định."
    },
    {
        question: "HB(22) - Hai hệ thống giấy phép tư liệu mở phổ biến là?",
        options: [
            "Giấy phép Creative Commons và GNU General Free Document Licence",
            "Giấy phép của GNU và giấy phép của OSI",
            "Giấy phép Open Document Format (ODF) và giấy phép Open Education Resource (OER)",
            "Giấy phép Open Public Document (OPD) và giấy phép Open Licence Free (OLF)"
        ],
        correct: 0,
        explanation: "Hai hệ thống giấy phép tư liệu mở phổ biến nhất là Creative Commons và GNU General Free Document License."
    },
    {
        question: "HB(23) - Khi giấy phép Creative Commons ghi là CC-BY nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc",
            "Ghi công – Phi thương mại",
            "Ghi công - Chia sẻ tương tự",
            "Ghi công - Không có phái sinh"
        ],
        correct: 0,
        explanation: "CC-BY có nghĩa là Ghi công — Bắt buộc, yêu cầu phải ghi công tác giả gốc."
    },
    {
        question: "HB(24) - Khi giấy phép Creative Commons ghi là CC-BY-NC nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc",
            "Ghi công - Phi thương mại",
            "Ghi công - Chia sẻ tương tự",
            "Ghi công - Không có phái sinh"
        ],
        correct: 1,
        explanation: "CC-BY-NC có nghĩa là Ghi công - Phi thương mại, cho phép sử dụng nhưng không được sử dụng cho mục đích thương mại."
    },
    {
        question: "HB(25) - Khi giấy phép Creative Commons ghi là CC-BY-SA nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc",
            "Ghi công – Phi thương mại",
            "Ghi công - Chia sẻ tương tự",
            "Ghi công - Không có phái sinh"
        ],
        correct: 2,
        explanation: "CC-BY-SA có nghĩa là Ghi công - Chia sẻ tương tự, yêu cầu các tác phẩm phái sinh phải sử dụng cùng giấy phép."
    },
    {
        question: "HB(26) - Khi giấy phép Creative Commons ghi là CC-BY-ND nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc",
            "Ghi công - Phi thương mại",
            "Ghi công - Chia sẻ tương tự",
            "Ghi công - Không có phái sinh"
        ],
        correct: 3,
        explanation: "CC-BY-ND có nghĩa là Ghi công - Không có phái sinh, cho phép sử dụng nhưng không được tạo ra các tác phẩm phái sinh."
    },
    {
        question: "HB(27) - Khi giấy phép Creative Commons ghi là CC-BY-NC-SA nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc — Chia sẻ tương tự",
            "Ghi công — Phi thương mại — Chia sẻ tương tự",
            "Ghi công — Chia sẻ tương tự — Phi thương mại",
            "Ghi công — Không có phái sinh — Chia sẻ tương tự"
        ],
        correct: 1,
        explanation: "CC-BY-NC-SA có nghĩa là Ghi công — Phi thương mại — Chia sẻ tương tự."
    },
    {
        question: "HB(28) - Khi giấy phép Creative Commons ghi là CC-BY-NC-ND nghĩa là gì?",
        options: [
            "Ghi công — Bắt buộc — Chia sẻ tương tự",
            "Ghi công — Phi thương mại — Chia sẻ tương tự",
            "Ghi công — Chia sẻ tương tự — Phi thương mại",
            "Ghi công — Phi thương mại — Không có phái sinh"
        ],
        correct: 3,
        explanation: "CC-BY-NC-ND có nghĩa là Ghi công — Phi thương mại — Không có phái sinh."
    },
    {
        question: "HB(29) - Khi giấy phép Creative Commons ghi là Public Domain (No Right Reserved) nghĩa là gì?",
        options: [
            "Miễn công cộng",
            "Giữ lại một số quyền",
            "Giữ lại tất cả các quyền",
            "ở mức độ tự do, tin cậy"
        ],
        correct: 0,
        explanation: "Public Domain (No Right Reserved) có nghĩa là Miễn công cộng, không còn bản quyền."
    },
    {
        question: "HB(30) - Khi giấy phép Creative Commons ghi là Some Right Reserved nghĩa là gì?",
        options: [
            "Miền công cộng",
            "Giữ lại một số quyền",
            "Giữ lại tất cả các quyền",
            "ở mức độ tự do, tin cậy"
        ],
        correct: 1,
        explanation: "Some Right Reserved có nghĩa là Giữ lại một số quyền, không phải tất cả quyền."
    },
    {
        question: "HB(31) - Khi giấy phép Creative Commons ghi là All Right Reserved nghĩa là gì?",
        options: [
            "Miền công cộng",
            "Giữ lại một số quyền",
            "Giữ lại tất cả các quyền",
            "ở mức độ tự do, tin cậy"
        ],
        correct: 2,
        explanation: "All Right Reserved có nghĩa là Giữ lại tất cả các quyền, bảo vệ toàn bộ bản quyền."
    },
    {
        question: "HB(32) - Giấy phép GNU General Free Document Licence phiên bản nào có khả năng chuyển tiếp sang giấy phép CC-BY-SA 3.0?",
        options: [
            "GNU General Free Document Licence 1.1",
            "GNU General Free Document Licence 1.2",
            "GNU General Free Document Licence 1.3",
            "GNU General Free Document Licence 1.4"
        ],
        correct: 2,
        explanation: "GNU General Free Document Licence phiên bản 1.3 có khả năng chuyển tiếp sang giấy phép CC-BY-SA 3.0."
    },
    {
        question: "HB(33) - Các khái niệm về phần mềm nguồn mở phải tuân thủ theo bao nhiêu tiêu chí?",
        options: ["10", "12", "8", "4"],
        correct: 0,
        explanation: "Các khái niệm về phần mềm nguồn mở phải tuân thủ theo 10 tiêu chí của OSI."
    },
    {
        question: "HB(34) - Phần mềm mã nguồn mở là?",
        options: [
            "Hoàn toàn tôn trọng bản quyền và sở hữu trí tuệ",
            "Không tôn trọng bản quyền, chia sẻ miễn phí",
            "Tôn trọng quyền sở hữu của cộng đồng hơn là sở hữu cá nhân",
            "Quyền sở hữu nắm trong tay của cộng đồng nguồn mở",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Phần mềm mã nguồn mở hoàn toàn tôn trọng bản quyền và sở hữu trí tuệ."
    },
    {
        question: "HB(35) - Cộng đồng là gì?",
        options: [
            "Là các nhóm cá nhân chia sẻ những lợi ích chung",
            "Là những người có khả năng tương tác với nhau",
            "Là những người có nhiều đóng góp cho một dự án",
            "Là một nhóm các lập trình viên và người sử dụng"
        ],
        correct: 0,
        explanation: "Cộng đồng là các nhóm cá nhân chia sẻ những lợi ích chung."
    },
    {
        question: "HB(36) - Một giấy phép được coi là copyfree khi nào?",
        options: [
            "Nó phải phù hợp với 'Copyfree Standard Definition'",
            "Nó không phải là một giấy phép dạng Copyleft",
            "Nó không đặt bất kỳ hạn chế về việc sửa đổi và phân phối",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Một giấy phép được coi là copyfree khi nó phù hợp với 'Copyfree Standard Definition'."
    },
    {
        question: "HB(37) - Các điều kiện để một giấy phép dạng copyfree là?",
        options: [
            "Miễn phí sử dụng",
            "Phân phối miễn phí",
            "Sửa đổi miễn phí nguồn và dẫn xuất",
            "Miễn phí kết hợp",
            "Phổ cập ứng dụng",
            "Tất cả các đáp án"
        ],
        correct: 5,
        explanation: "Tất cả các điều kiện trên đều cần thiết để một giấy phép được coi là copyfree."
    },
    {
        question: "HB(38) - Đặc trưng chính xác định phần mềm nguồn mở là gì?",
        options: [
            "Là tự do",
            "Là miễn phí",
            "Là mã nguồn",
            "Là giấy phép",
            "Đáp án khác"
        ],
        correct: 3,
        explanation: "Đặc trưng chính xác định phần mềm nguồn mở là giấy phép."
    },
    {
        question: "HB(39) - Nhận định nào là đúng về phần mềm nguồn mở?",
        options: [
            "Phần mềm nguồn mở thực tế là giống hệt như phần mềm tự do",
            "Phần mềm nguồn mở và phần mềm tự do có điểm giống và khác nhau",
            "Phần mềm nguồn mở là chia sẻ miễn phí và không được kiếm tiền từ nó",
            "Phần mềm nguồn mở là sự tự do, nó có thể coi là phần mềm miễn phí"
        ],
        correct: 1,
        explanation: "Phần mềm nguồn mở và phần mềm tự do có điểm giống và khác nhau."
    },
    {
        question: "HB(40) - Trong 4 quyền tự do của phần mềm tự do, nếu không được phép truy cập vào mã nguồn thì quyền tự do nào không thực hiện được?",
        options: [
            "Số 0 và số 1",
            "Số 1 và số 2",
            "Số 1 và số 3",
            "Số 0 và số 3",
            "Số 2 và số 3"
        ],
        correct: 2,
        explanation: "Nếu không có mã nguồn, quyền tự do số 1 (nghiên cứu) và số 3 (cải tiến) không thể thực hiện được."
    },
    {
        question: "HB(41) - Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu cấp giấy phép nguồn mở?",
        options: [
            "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
            "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
            "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
            "Đăng ký để được cấp giấy phép đánh giá (nếu bạn chưa có sẵn)",
            "Đệ trình một yêu cầu chính thức để xét duyệt giấy phép",
            "Gửi thư điện tử yêu cầu (bao gồm thủ tục cần thiết)",
            "Cộng đồng xét duyệt trên danh sách thư điện tử ít nhất 30 ngày"
        ],
        correct: 6,
        explanation: "Cộng đồng xét duyệt trên danh sách thư điện tử ít nhất 30 ngày không phải là bước trong thủ tục đệ trình."
    },
    {
        question: "HB(42) - Quá trình xét duyệt giấy phép nguồn mở nhằm mục đích gì?",
        options: [
            "Đảm bảo các giấy phép được phê duyệt tuân thủ định nghĩa nguồn mở",
            "Xác định chủng loại giấy phép",
            "Không khuyến khích các giấy phép hư danh và trùng lặp",
            "Đảm bảo việc xét duyệt tỉ mỉ, minh bạch và đủ thời gian (60 ngày)",
            "Tất cả các đáp án"
        ],
        correct: 4,
        explanation: "Tất cả các mục đích trên đều là lý do cho quá trình xét duyệt giấy phép nguồn mở."
    },
    {
        question: "HB(43) - Với mục đích xin cấp giấy phép mới hoàn toàn, bạn sẽ xác định dạng đệ trình nào?",
        options: [
            "Để phê chuẩn",
            "Để rút lui",
            "Để nâng cấp",
            "Để cho một chủng loại mới",
            "Để chấp thuận phiên bản giấy phép",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Để xin cấp giấy phép mới hoàn toàn, bạn sẽ xác định dạng đệ trình 'Để phê chuẩn'."
    },
    {
        question: "HB(44) - Trong các dự án nguồn mở, việc báo cáo các lỗi (về mã nguồn) và sửa chữa thực hiện thông qua đâu?",
        options: [
            "Bản vá",
            "Phiên bản mới",
            "Mô đun mới",
            "Người đề xuất",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Việc báo cáo lỗi và sửa chữa trong dự án nguồn mở thực hiện thông qua bản vá (patch)."
    },
    {
        question: "HB(45) - Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu cấp giấy phép nguồn mở?",
        options: [
            "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
            "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
            "Đệ trình một yêu cầu chính thức để xét duyệt giấy phép",
            "Gửi thư điện tử yêu cầu (bao gồm thủ tục cần thiết)",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Tất cả các bước trên đều có trong thủ tục đệ trình, vì vậy không có đáp án nào đúng."
    },
    {
        question: "HB(46) - Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu cấp giấy phép nguồn mở?",
        options: [
            "Xác định dạng đệ trình (để rút lui, để chấp thuận phiên bản giấy phép đã có, để phê chuẩn)",
            "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
            "Đệ trình một yêu cầu chính thức để xét duyệt giấy phép",
            "Gửi thư điện tử yêu cầu (bao gồm thủ tục cần thiết)",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Tất cả các bước trên đều có trong thủ tục đệ trình, vì vậy không có đáp án nào đúng."
    },
    {
        question: "HB(47) - Bước thực hiện nào không có trong thủ tục đệ trình một yêu cầu cấp giấy phép nguồn mở?",
        options: [
            "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
            "Đảm bảo đơn vị có tư cách phù hợp để đệ trình một yêu cầu như vậy",
            "Đăng ký để được cấp giấy phép đánh giá (nếu bạn chưa có sẵn)",
            "Cộng đồng xét duyệt trên danh sách thư điện tử ít nhất 30 ngày",
            "Không có đáp án"
        ],
        correct: 3,
        explanation: "Cộng đồng xét duyệt trên danh sách thư điện tử ít nhất 30 ngày không phải là bước trong thủ tục đệ trình."
    },
    {
        question: "HB(48) - Bước thực hiện nào có trong thủ tục đệ trình một yêu cầu cấp giấy phép nguồn mở?",
        options: [
            "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp",
            "Cộng đồng xét duyệt trên danh sách thư điện tử ít nhất 30 ngày",
            "Bước thực hiện ỉ",
            "Bước thực hiện ii",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Đọc định nghĩa nguồn mở và đảm bảo rằng giấy phép của bạn phù hợp là bước có trong thủ tục đệ trình."
    },
    {
        question: "HB(49) - Thời gian phê duyệt giấy phép nguồn mở là bao nhiêu ngày?",
        options: [
            "ít nhất 30 ngày",
            "ít nhất 60 ngày",
            "ít nhất 20 ngày",
            "ít nhất 40 ngày"
        ],
        correct: 0,
        explanation: "Thời gian phê duyệt giấy phép nguồn mở là ít nhất 30 ngày."
    },
    {
        question: "HB(50) - Trong các giấy phép nguồn mở, giấy phép không sử dụng lại được nghĩa là?",
        options: [
            "Chỉ tác giả của chúng dùng được còn người khác thì không sử dụng lại được",
            "Giấy phép nằm trong chủng loại giấy phép hư danh và đặc biệt với tác giả",
            "Giấy phép bỏ đi không dùng bởi có những phiên bản mới hơn của chúng",
            "Không có đáp án"
        ],
        correct: 0,
        explanation: "Giấy phép không sử dụng lại được nghĩa là chỉ tác giả của chúng dùng được còn người khác thì không sử dụng lại được."
    },
    {
        question: "HB(51) - Trong các giấy phép nguồn mở, giấy phép chưa được xếp loại nghĩa là?",
        options: [
            "Giấy phép hiện đang tìm kiếm sự chấp nhận",
            "Giấy phép mà mã nguồn sẵn có nhưng không do OSI cấp",
            "Giấy phép mà mã nguồn sẵn có và không phải là phần mềm tự do",
            "Giấy phép cấm sử dụng và phân phối vì mục đích thương mại",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Tất cả các lựa chọn trên đều không đúng định nghĩa giấy phép chưa được xếp loại."
    },
    {
        question: "HB(52) - Loại giấy phép nào không phải là giấy phép nguồn mở?",
        options: [
            "Apache License 2.0",
            "New BSD License",
            "MIT License",
            "Eclipse Public License",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Tất cả các giấy phép trên đều là giấy phép nguồn mở được OSI phê chuẩn."
    },
    {
        question: "HB(53) - Loại giấy phép nào không phải là giấy phép nguồn mở?",
        options: [
            "Mozilla Public License 1.1",
            "NASA Open Source Agreement 1.3",
            "W3C License",
            "Xamp Public License",
            "Không có đáp án"
        ],
        correct: 3,
        explanation: "Xamp Public License không phải là giấy phép nguồn mở được OSI phê chuẩn."
    },
    {
        question: "HB(54) - Loại giấy phép nào không phải là giấy phép nguồn mở?",
        options: [
            "GNU Open Software License",
            "Simplified BSD License",
            "MIT License",
            "W3C License"
        ],
        correct: 0,
        explanation: "GNU Open Software License không phải là giấy phép nguồn mở được OSI phê chuẩn."
    },
    {
        question: "HB(55) - GNU General Public License tất cả các phiên bản là loại giấy phép gì?",
        options: [
            "Copyright",
            "Copyleft",
            "Copyfree",
            "Copyfull"
        ],
        correct: 1,
        explanation: "GNU General Public License tất cả các phiên bản đều là giấy phép dạng Copyleft."
    },
    {
        question: "HB(56) - Phát biểu nào sau đây là đúng về phần mềm nguồn mở?",
        options: [
            "Là một loại phần mềm tự do",
            "Là một loại phần mềm miễn phí",
            "Là không tôn trọng bản quyền",
            "Là không thể cài đặt bình thường",
            "Là được phép chia sẻ mã nguồn với hàng xóm",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Phần mềm nguồn mở được phép chia sẻ mã nguồn với hàng xóm theo quyền tự do số 2."
    },
    {
        question: "HB(57) - Trong dự án nguồn mở, thành viên có nhiều đóng góp cho dự án và được phép truy cập trực tiếp vào mã nguồn là?",
        options: [
            "Commiter",
            "Contributor",
            "Reviewer",
            "Code leader"
        ],
        correct: 0,
        explanation: "Commiter là thành viên có nhiều đóng góp và được phép truy cập trực tiếp vào mã nguồn."
    },
    {
        question: "HB(58) - Trong dự án nguồn mở, thành viên có nhiều đóng góp cho dự án và không được phép truy cập trực tiếp vào mã nguồn là?",
        options: [
            "Là Commiter",
            "Là Committee",
            "Là Commuter",
            "Là Commentator",
            "Không có đáp án"
        ],
        correct: 4,
        explanation: "Không có vai trò nào trong các lựa chọn trên phù hợp với mô tả này."
    },
    {
        question: "HB(59) - Giấy phép tư liệu mở chỉ có các loại giấy phép là?",
        options: [
            "Creative Common và GNU General Free Document License",
            "Apache License và GNU General Public License",
            "BSD License và MIT License",
            "Không có đáp án"
        ],
        correct: 3,
        explanation: "Tất cả các lựa chọn trên đều không đúng về giấy phép tư liệu mở."
    },
    {
        question: "HB(60) - Trong các dự án nguồn mở, tài liệu điều hành của dự án đóng vai trò như thế nào?",
        options: [
            "Một tài liệu điều hành rõ ràng và minh bạch là phần chính của bất kỳ dự án phát triển mở nào",
            "Nó xác định các quy tắc tham gia trong cộng đồng và mô tả mức độ ảnh hưởng của thành viên với dự án",
            "Nó cho phép các thành viên quyết định mức độ tham gia của họ với cộng đồng đó",
            "Tất cả các đáp án"
        ],
        correct: 3,
        explanation: "Tất cả các vai trò trên đều là chức năng của tài liệu điều hành trong dự án nguồn mở."
    },
    {
        question: "HB(61) - Hai mô hình điều hành phổ biến trong các dự án nguồn mở là gì?",
        options: [
            "Nhà độc tài nhân từ (1)",
            "Chế độ người tài lãnh đạo (2)",
            "Kiểm soát tập trung như nhà thờ lớn (3)",
            "Kiểm soát phi tập trung như cái chợ (4)",
            "Kiểm soát tập trung như hội đồng (5)",
            "Đáp án (1) và (2)",
            "Đáp án (3) và (4)",
            "Đáp án (4) và (5)"
        ],
        correct: 5,
        explanation: "Hai mô hình điều hành phổ biến nhất là Nhà độc tài nhân từ và Chế độ người tài lãnh đạo."
    },
    {
        question: "HB(62) - Các mô hình điều hành phổ biến của các dự án phần mềm tự do là gì?",
        options: [
            "Nhà độc tài nhân từ (1)",
            "Chế độ người tài lãnh đạo (2)",
            "Kiểm soát tập trung như nhà thờ lớn (3)",
            "Kiểm soát phi tập trung như cái chợ (4)",
            "Kiểm soát tập trung như hội đồng (5)",
            "Đáp án (1) và (2)",
            "Đáp án (3), (4) và (5)",
            "Đáp án (4) và (5)"
        ],
        correct: 6,
        explanation: "Các mô hình điều hành phổ biến của dự án phần mềm tự do là Kiểm soát tập trung như nhà thờ lớn, Kiểm soát phi tập trung như cái chợ, và Kiểm soát tập trung như hội đồng."
    },
    {
        question: "HB(63) - Trong các dự án nguồn mở, mô hình nhà độc tài nhân từ là?",
        options: [
            "Do một cá nhân lãnh đạo",
            "Do một ban lãnh đạo dự án",
            "Do tất cả các thành viên tham gia quyết định",
            "Do một tổ chức lãnh đạo"
        ],
        correct: 0,
        explanation: "Mô hình nhà độc tài nhân từ là do một cá nhân lãnh đạo dự án."
    },
    {
        question: "HB(64) - Với các dự án nguồn mở, mô hình điều hành 'nhà độc tài nhân từ', quyết định cuối cùng thuộc về ai?",
        options: [
            "Người lãnh đạo dự án",
            "Người đề xuất",
            "Người đóng góp",
            "Người sử dụng",
            "Ban quản lý dự án"
        ],
        correct: 0,
        explanation: "Trong mô hình nhà độc tài nhân từ, quyết định cuối cùng thuộc về người lãnh đạo dự án."
    },
    {
        question: "HB(65) - Với các dự án nguồn mở, mô hình điều hành 'chế độ người tài lãnh đạo', quyết định cuối cùng thuộc về ai?",
        options: [
            "Người lãnh đạo dự án",
            "Người đề xuất",
            "Người đóng góp",
            "Người sử dụng",
            "Ban quản lý dự án"
        ],
        correct: 4,
        explanation: "Trong mô hình chế độ người tài lãnh đạo, quyết định cuối cùng thuộc về ban quản lý dự án."
    },
    {
        question: "HB(66) - Trong các dự án nguồn mở, ai có thể trở thành người đóng góp (contributor) cho dự án?",
        options: [
            "Có thể là bất kỳ ai",
            "Người được người đóng góp khác giới thiệu",
            "Người được người đề xuất khác giới thiệu",
            "Người được chỉ định"
        ],
        correct: 0,
        explanation: "Trong dự án nguồn mở, bất kỳ ai cũng có thể trở thành người đóng góp."
    },
    {
        question: "HB(67) - Với các dự án nguồn mở, các vai trò nào không có trong mô hình điều hành 'nhà độc tài nhân từ'?",
        options: [
            "Người đề xuất (Commiter)",
            "Người đóng góp (Contributor)",
            "Lãnh đạo dự án (Project lead)",
            "Chủ tịch ban quản lý dự án"
        ],
        correct: 3,
        explanation: "Chủ tịch ban quản lý dự án không có trong mô hình nhà độc tài nhân từ."
    },
    {
        question: "HB(68) - Với các dự án nguồn mở, các vai trò nào không có trong mô hình điều hành 'chế độ người tài lãnh đạo'?",
        options: [
            "Người đề xuất (Commiter)",
            "Người đóng góp (Contributor)",
            "Lãnh đạo dự án (Project lead)",
            "Chủ tịch ban quản lý dự án"
        ],
        correct: 2,
        explanation: "Lãnh đạo dự án (Project lead) không có trong mô hình chế độ người tài lãnh đạo."
    },
    {
        question: "HB(69) - Trong các dự án nguồn mở, sự đồng thuận lười sẽ có hiệu lực khi nào?",
        options: [
            "ít nhất 72 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
            "ít nhất 24 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
            "ít nhất 48 giờ đồng hồ khi giả thiết rằng không có sự phản đối",
            "ít nhất 36 giờ đồng hồ khi giả thiết rằng không có sự phản đối"
        ],
        correct: 0,
        explanation: "Sự đồng thuận lười có hiệu lực sau ít nhất 72 giờ đồng hồ khi giả thiết rằng không có sự phản đối."
    },
    {
        question: "HB(70) - Khi khởi xướng dự án nguồn mở, tài liệu điều hành phiên bản đầu tiên cần phải?",
        options: [
            "Chi tiết hóa đầy đủ khung công việc và đưa ra các quan điểm (1)",
            "Phải tính tới mọi kịch bản có thể trong tương lai (2)",
            "Đưa ra một mô hình đơn giản có khả năng quản lý được (3)",
            "Ngắn gọn, súc tích, truy cập được và dễ dàng tham chiếu tới (4)",
            "Đáp án (1) và (2)",
            "Đáp án (3) và (4)"
        ],
        correct: 5,
        explanation: "Tài liệu điều hành phiên bản đầu tiên cần đưa ra một mô hình đơn giản có khả năng quản lý được và ngắn gọn, súc tích, truy cập được và dễ dàng tham chiếu tới."
    }
];

// Quiz Variables
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let timeLeft = 120 * 60; // 120 minutes in seconds
let timerInterval;
let quizStarted = false;
let quizCompleted = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const backToResultsBtn = document.getElementById('back-to-results');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const progressElement = document.getElementById('progress');
const progressTextElement = document.getElementById('progress-text');
const timeDisplayElement = document.getElementById('time-display');
const scoreNumberElement = document.getElementById('score-number');
const scorePercentageElement = document.getElementById('score-percentage');
const scoreMessageElement = document.getElementById('score-message');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const timeTakenElement = document.getElementById('time-taken');
const reviewContentElement = document.getElementById('review-content');
const questionGridElement1 = document.getElementById('question-grid-1');
const questionGridElement2 = document.getElementById('question-grid-2');
const questionGridElement3 = document.getElementById('question-grid-3');
const questionGridElement4 = document.getElementById('question-grid-4');
const questionGridElement5 = document.getElementById('question-grid-5');

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    timeLeft = 120 * 60; // 120 minutes
    quizStarted = false;
    quizCompleted = false;
    
    // Reset timer display
    updateTimerDisplay();
    
    // Create question navigation grid
    createQuestionGrid();
    
    showScreen('start');
    loadQuestion();
}

// Create Question Navigation Grid
function createQuestionGrid() {
    // Clear all grids
    questionGridElement1.innerHTML = '';
    questionGridElement2.innerHTML = '';
    questionGridElement3.innerHTML = '';
    questionGridElement4.innerHTML = '';
    questionGridElement5.innerHTML = '';
    
    // Create buttons for each section
    for (let i = 0; i < quizData.length; i++) {
        const questionBtn = document.createElement('button');
        questionBtn.className = 'question-number-btn';
        questionBtn.textContent = i + 1;
        questionBtn.addEventListener('click', () => goToQuestion(i));
        
        // Add to appropriate section
        if (i < 30) {
            questionGridElement1.appendChild(questionBtn);
        } else if (i < 60) {
            questionGridElement2.appendChild(questionBtn);
        } else if (i < 100) {
            questionGridElement3.appendChild(questionBtn);
        } else if (i < 150) {
            questionGridElement4.appendChild(questionBtn);
        } else {
            questionGridElement5.appendChild(questionBtn);
        }
    }
}

// Go to specific question
function goToQuestion(questionIndex) {
    if (questionIndex >= 0 && questionIndex < quizData.length) {
        currentQuestion = questionIndex;
        loadQuestion();
    }
}

// Show Screen
function showScreen(screenName) {
    // Hide all screens
    startScreen.style.display = 'none';
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'none';
    reviewScreen.style.display = 'none';
    
    // Show selected screen
    switch(screenName) {
        case 'start':
            startScreen.style.display = 'block';
            break;
        case 'quiz':
            quizScreen.style.display = 'block';
            break;
        case 'results':
            resultsScreen.style.display = 'block';
            break;
        case 'review':
            reviewScreen.style.display = 'block';
            break;
    }
}

// Start Quiz
function startQuiz() {
    quizStarted = true;
    showScreen('quiz');
    startTimer();
    loadQuestion();
}

// Timer Functions
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplayElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Create options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;
        
        // Add click event
        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsElement.appendChild(optionElement);
    });
    
    // Update progress
    updateProgress();
    updateNavigationButtons();
    updateQuestionGrid();
    
    // Clear previous explanations
    const existingExplanation = document.querySelector('.explanation-box');
    if (existingExplanation) {
        existingExplanation.remove();
    }
    
    // Show feedback if question was already answered
    if (userAnswers[currentQuestion] !== null) {
        showImmediateFeedback(userAnswers[currentQuestion]);
    }
}

// Update Question Grid
function updateQuestionGrid() {
    const questionBtns = document.querySelectorAll('.question-number-btn');
    questionBtns.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'correct', 'incorrect');
        
        if (index === currentQuestion) {
            btn.classList.add('current');
        } else if (userAnswers[index] !== null) {
            btn.classList.add('answered');
            // Check if answer is correct
            if (userAnswers[index] === quizData[index].correct) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('incorrect');
            }
        }
    });
}

// Select Option
function selectOption(optionIndex) {
    // Don't allow selection if quiz is completed
    if (quizCompleted) return;
    
    // Store answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Show immediate feedback
    showImmediateFeedback(optionIndex);
    
    // Update question grid
    updateQuestionGrid();
    
    // Auto-advance after 3 seconds
    showAutoAdvanceCountdown();
}

// Show auto-advance countdown
function showAutoAdvanceCountdown() {
    let countdown = 3;
    
    // Create countdown element
    const countdownElement = document.createElement('div');
    countdownElement.className = 'auto-advance-countdown';
    countdownElement.textContent = countdown;
    document.body.appendChild(countdownElement);
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(countdownElement);
            
            // Auto-advance to next question
            if (currentQuestion < quizData.length - 1) {
                nextQuestion();
            } else {
                endQuiz();
            }
        }
    }, 1000);
}

// Show immediate feedback
function showImmediateFeedback(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    const options = document.querySelectorAll('.option');
    
    // Remove previous feedback
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect', 'selected');
    });
    
    // Mark selected option
    options[selectedIndex].classList.add('selected');
    
    // Mark correct and incorrect options
    options[correctIndex].classList.add('correct');
    if (selectedIndex !== correctIndex) {
        options[selectedIndex].classList.add('incorrect');
    }
    
    // Show explanation
    showExplanation();
}

// Show explanation
function showExplanation() {
    const question = quizData[currentQuestion];
    const explanationBox = document.createElement('div');
    explanationBox.className = 'explanation-box';
    explanationBox.innerHTML = `
        <div class="explanation-content">
            <h4><i class="fas fa-lightbulb"></i> Giải thích:</h4>
            <p>${question.explanation}</p>
        </div>
    `;
    
    // Insert after options
    optionsElement.parentNode.insertBefore(explanationBox, optionsElement.nextSibling);
}

// Update Progress
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressElement.style.width = `${progress}%`;
    progressTextElement.textContent = `Câu ${currentQuestion + 1}/${quizData.length}`;
}

// Update Navigation Buttons
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestion === 0;
    
    // Always show both Next and Submit buttons
    nextBtn.style.display = 'inline-flex';
    submitBtn.style.display = 'inline-flex';
    
    // Disable Next button on last question
    if (currentQuestion === quizData.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Shuffle Questions and Answers
function shuffleQuiz() {
    // Shuffle the quiz data array
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
    
    // Shuffle options for each question
    quizData.forEach(question => {
        const options = question.options;
        const correctIndex = question.correct;
        
        // Create array of indices
        const indices = [0, 1, 2, 3];
        
        // Shuffle indices
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Create new shuffled options
        const newOptions = indices.map(index => options[index]);
        
        // Find new correct index
        const newCorrectIndex = indices.indexOf(correctIndex);
        
        // Update question
        question.options = newOptions;
        question.correct = newCorrectIndex;
    });
    
    // Reset current question to 0 and reload
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    
    // Recreate question grid
    createQuestionGrid();
    loadQuestion();
    
    // Show confirmation message
    showNotification('Đã đảo câu hỏi và câu trả lời!', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// End Quiz
function endQuiz() {
    stopTimer();
    quizCompleted = true;
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    
    // Show results
    showResults();
}

// Show Results
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    const timeTaken = 120 * 60 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    scoreNumberElement.textContent = score;
    scorePercentageElement.textContent = percentage;
    correctCountElement.textContent = score;
    wrongCountElement.textContent = quizData.length - score;
    timeTakenElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Score message
    let message = '';
    if (percentage >= 90) {
        message = 'Xuất sắc! Bạn đã hoàn thành bài thi với kết quả tuyệt vời!';
    } else if (percentage >= 80) {
        message = 'Rất tốt! Bạn đã làm bài thi rất tốt!';
    } else if (percentage >= 70) {
        message = 'Tốt! Bạn đã hoàn thành bài thi với kết quả khá!';
    } else if (percentage >= 60) {
        message = 'Đạt! Bạn đã vượt qua bài thi!';
    } else {
        message = 'Cần cố gắng thêm! Hãy ôn tập lại và thử lại!';
    }
    
    scoreMessageElement.textContent = message;
    
    showScreen('results');
}

// Show Review
function showReview() {
    reviewContentElement.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <h4>Câu ${index + 1}: ${question.question}</h4>
            </div>
            <div class="review-options">
                ${question.options.map((option, optionIndex) => {
                    let className = 'review-option';
                    if (optionIndex === question.correct) {
                        className += ' correct-answer';
                    }
                    if (optionIndex === userAnswer && userAnswer !== question.correct) {
                        className += ' wrong-answer';
                    }
                    
                    return `
                        <div class="${className}">
                            <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
                            <span class="option-text">${option}</span>
                            ${optionIndex === question.correct ? '<i class="fas fa-check correct-icon"></i>' : ''}
                            ${optionIndex === userAnswer && userAnswer !== question.correct ? '<i class="fas fa-times wrong-icon"></i>' : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="review-explanation">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
        
        reviewContentElement.appendChild(reviewItem);
    });
    
    showScreen('review');
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', endQuiz);
shuffleBtn.addEventListener('click', shuffleQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', initQuiz);
backToResultsBtn.addEventListener('click', () => showScreen('results'));

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Prevent page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    if (quizStarted && !quizCompleted) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!quizStarted || quizCompleted) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            prevQuestion();
            break;
        case 'ArrowRight':
        case 'Enter':
            e.preventDefault();
            if (currentQuestion < quizData.length - 1) {
                nextQuestion();
            } else {
                endQuiz();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            e.preventDefault();
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex >= 0 && optionIndex < 4) {
                selectOption(optionIndex);
            }
            break;
    }
});