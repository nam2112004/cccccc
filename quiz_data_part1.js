// Quiz Data - Câu hỏi từ file PDF (Phần 1 - 33 câu hỏi)
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
            "Đính kèm vào phần đầu của tập tin mã nguồn 'dưới dạng ghi chú'",
            "Đính kèm vào phần cuối của tập tin mã nguồn 'dưới dạng ghi chú'",
            "Cả 3 phương pháp trên đều đúng"
        ],
        correct: 1,
        explanation: "Theo GNU GPL, thông báo giấy phép phải được đính kèm vào phần đầu của tập tin mã nguồn dưới dạng ghi chú."
    },
    {
        question: "Giấy phép BSD - Berkeley System Distribution Licenses được sử dụng lần đầu tiên cho phần mềm nào?",
        options: [
            "Free BSD",
            "BSD Unix",
            "Net BSD",
            "Unix"
        ],
        correct: 0,
        explanation: "Giấy phép BSD được sử dụng lần đầu tiên cho Free BSD, một hệ điều hành Unix-like mã nguồn mở."
    },
    {
        question: "Giấy phép mã nguồn mở là tập hợp các quy tắc đòi hỏi ai là người phải tuân theo:",
        options: [
            "Người sáng chế ra phần mềm mã nguồn mở",
            "Nhà bảo hành phần mềm mã nguồn mở",
            "Người sử dụng phần mềm mã nguồn mở",
            "Cả 3"
        ],
        correct: 2,
        explanation: "Giấy phép mã nguồn mở là các quy tắc mà người sử dụng phần mềm phải tuân theo khi sử dụng, sửa đổi hoặc phân phối phần mềm."
    },
    {
        question: "Tổ chức OSI - Open Source Initiative là một tổ chức như thế nào?",
        options: [
            "Là một tổ chức phần mềm nguồn mở, trực tiếp phát triển các dự án phần mềm nguồn mở",
            "Là một tổ chức phi lợi nhuận mà mục đích của nó là thúc đẩy sự phát triển phần mềm nguồn mở",
            "Hoạt động quan trọng nhất của tổ chức này là xem xét phê duyệt giấy phép mã nguồn mở",
            "Câu b và c"
        ],
        correct: 3,
        explanation: "OSI là tổ chức phi lợi nhuận thúc đẩy phát triển phần mềm nguồn mở và có hoạt động quan trọng là xem xét phê duyệt giấy phép mã nguồn mở."
    },
    {
        question: "Tổ chức FSF là tổ chức:",
        options: [
            "Phần mềm mã nguồn mở",
            "Phần mềm tự do",
            "Quỹ phần mềm nguồn mở",
            "Phần mềm miễn phí"
        ],
        correct: 2,
        explanation: "FSF (Free Software Foundation) là Quỹ phần mềm nguồn mở, tổ chức phi lợi nhuận thúc đẩy phần mềm tự do."
    },
    {
        question: "Phát biểu nào sau đây không phải là phát biểu đúng:",
        options: [
            "Phần mềm mã nguồn mở là phần mềm tự do",
            "Phần mềm mã nguồn mở cho phép người dùng được sửa mã nguồn",
            "Phần mềm mã nguồn mở là phần mềm miễn phí",
            "Phần mềm mã nguồn mở cho phép người dùng được tự do chia sẻ cho người khác"
        ],
        correct: 0,
        explanation: "Phần mềm mã nguồn mở không nhất thiết là phần mềm tự do. Có sự khác biệt giữa 'open source' và 'free software'."
    },
    {
        question: "Câu nào sau đây không phải là ưu điểm của mã nguồn mở:",
        options: [
            "Phần mềm mã nguồn mở cung cấp kèm mã nguồn",
            "Phần mềm mã nguồn mở giúp cân bằng giá, chống độc quyền",
            "Phần mềm mã nguồn mở không phải mất tiền mua",
            "Phần mềm mã nguồn mở có độ ổn định cao"
        ],
        correct: 3,
        explanation: "Độ ổn định cao không phải là ưu điểm đặc trưng của mã nguồn mở. Độ ổn định phụ thuộc vào chất lượng phát triển và cộng đồng hỗ trợ."
    },
    {
        question: "Câu nào sau đây là đúng:",
        options: [
            "Phần mềm mã nguồn mở không mang lại lợi nhuận",
            "Phần mềm mã nguồn mở không cho phép phân phối lại",
            "Phần mềm mã nguồn mở không có bản quyền",
            "Phần mềm mã nguồn mở không có bảo hành"
        ],
        correct: 3,
        explanation: "Phần mềm mã nguồn mở thường không có bảo hành chính thức từ nhà phát triển, người dùng sử dụng theo 'as is'."
    },
    {
        question: "Điều nào sau đây không đúng với các giấy phép mã nguồn mở:",
        options: [
            "Các loại giấy phép đều có cơ chế bảo vệ quyền của tác giả ban đầu",
            "Các loại giấy phép đều yêu cầu không được thay đổi nội dung giấy phép",
            "Có giấy phép yêu cầu phải sử dụng cùng loại giấy phép với sản phẩm phái sinh",
            "Không giấy phép nào cấm người dùng sửa đổi chương trình"
        ],
        correct: 2,
        explanation: "Không phải tất cả giấy phép mã nguồn mở đều yêu cầu sử dụng cùng loại giấy phép cho sản phẩm phái sinh. Chỉ có copyleft licenses như GPL mới có yêu cầu này."
    },
    {
        question: "Giấy phép GNU GPL phiên bản mới nhất là:",
        options: [
            "1.0",
            "2.0",
            "3.0",
            "4.0"
        ],
        correct: 2,
        explanation: "GNU GPL phiên bản mới nhất hiện tại là 3.0, được phát hành vào năm 2007."
    },
    {
        question: "Bạn hãy cho biết phần mềm văn phòng nào sau đây sử dụng giấy phép mã nguồn mở:",
        options: [
            "Microsoft Office",
            "Libre Office",
            "Cả a và b",
            "Không câu nào đúng"
        ],
        correct: 1,
        explanation: "Libre Office là phần mềm văn phòng mã nguồn mở, trong khi Microsoft Office là phần mềm thương mại."
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
        explanation: "Ubuntu sử dụng giấy phép GNU GPL, đây là một hệ điều hành Linux mã nguồn mở."
    },
    {
        question: "Bạn hãy cho biết phần mềm nào sau đây sử dụng giấy phép BSD:",
        options: [
            "Ubuntu",
            "Window Xfree86",
            "JavaFBP toolkit",
            "Không câu nào đúng"
        ],
        correct: 1,
        explanation: "Window Xfree86 sử dụng giấy phép BSD, đây là một implementation của X Window System."
    },
    {
        question: "Giấy phép nào không cấp phép một phần mềm/ thư viện mã nguồn đóng liên kết với một phần mềm/ thư viện mang giấy phép mở tương ứng:",
        options: [
            "GNU General Public License",
            "Apache Public License",
            "BSD License",
            "Artistic License"
        ],
        correct: 0,
        explanation: "GNU GPL có điều khoản copyleft mạnh, không cho phép liên kết với phần mềm mã nguồn đóng."
    },
    {
        question: "Giấy phép nào có khả năng kết hợp một phần mềm với một phần mềm/ thư viện mang giấy phép mở tương ứng:",
        options: [
            "Apache Public License",
            "BSD License",
            "MIT License",
            "Cả 3 License"
        ],
        correct: 3,
        explanation: "Cả Apache, BSD và MIT License đều cho phép kết hợp với phần mềm có giấy phép khác nhau."
    },
    {
        question: "Phần mềm GIMP sử dụng giấy phép mã nguồn mở nào:",
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
        question: "Phần mềm Mozilla Firefox sử dụng giấy phép mã nguồn mở nào:",
        options: [
            "Mozilla Public License",
            "BSD License",
            "Artistic License",
            "GPL License"
        ],
        correct: 0,
        explanation: "Mozilla Firefox sử dụng Mozilla Public License (MPL), một giấy phép mã nguồn mở do Mozilla Foundation tạo ra."
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
        explanation: "Apache HTTP Server sử dụng Apache License, một giấy phép mã nguồn mở do Apache Software Foundation tạo ra."
    },
    {
        question: "Những phần mềm mã nguồn mở miễn phí nào sau đây giúp chạy các ứng dụng windows trên môi trường Ubuntu:",
        options: [
            "Wine và CrossOver",
            "Wine door và Cedega",
            "Wine và PlayOnlinux",
            "Không có đáp án đúng"
        ],
        correct: 2,
        explanation: "Wine và PlayOnlinux là các phần mềm mã nguồn mở miễn phí giúp chạy ứng dụng Windows trên Linux/Ubuntu."
    },
    {
        question: "Mã nguồn mở Nukeviet có mấy dòng phiên bản chính:",
        options: [
            "2",
            "1",
            "3",
            "4"
        ],
        correct: 1,
        explanation: "Nukeviet có 1 dòng phiên bản chính, đó là dòng 3.0 trở về sau."
    },
    {
        question: "Trong các dòng phiên bản sau, dòng phiên bản chính nào của Nukeviet:",
        options: [
            "Dòng 2.0 trở về trước",
            "Dòng 3.0 trở về sau",
            "Dòng 4.0",
            "1 và 2 đúng"
        ],
        correct: 1,
        explanation: "Dòng phiên bản chính của Nukeviet là dòng 3.0 trở về sau."
    },
    {
        question: "Dòng phiên bản Nukeviet 2.0 do những ai phát triển:",
        options: [
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nga phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Đức phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Pháp phát triển",
            "Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nhật phát triển"
        ],
        correct: 0,
        explanation: "Nukeviet 2.0 được phát triển bởi Nguyễn Anh Tú cùng một số lưu học sinh Việt Nam tại Nga."
    },
    {
        question: "Nukeviet được viết bằng ngôn ngữ và sử dụng CSDL nào:",
        options: [
            "PHP và MySQL",
            "PHP và Access",
            "PHP và DB4.0",
            "PHP và O2"
        ],
        correct: 0,
        explanation: "Nukeviet được viết bằng ngôn ngữ PHP và sử dụng cơ sở dữ liệu MySQL."
    },
    {
        question: "Nukeviet sử dụng bộ giấy phép nào:",
        options: [
            "GNU/GPL",
            "GNU/GPC",
            "GUI/GPL",
            "GNU/GPLS"
        ],
        correct: 0,
        explanation: "Nukeviet sử dụng giấy phép GNU/GPL (GNU General Public License)."
    },
    {
        question: "Chọn phát biểu đúng:",
        options: [
            "Joomla là mã nguồn mở và được cung cấp hoàn toàn miễn phí",
            "Joomla là một công cụ lập trình web",
            "Joomla được phát triển bởi Microsoft",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Joomla là một hệ quản trị nội dung (CMS) mã nguồn mở và được cung cấp hoàn toàn miễn phí."
    },
    {
        question: "Chọn phát biểu đúng:",
        options: [
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu và những thành viên tích cực",
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những chuyên gia hàng đầu",
            "Joomla là nền tảng mã nguồn mở được xây dựng và đóng gói bởi những thành viên tích cực",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Joomla được phát triển bởi cả chuyên gia hàng đầu và cộng đồng thành viên tích cực."
    },
    {
        question: "Chọn phát biểu đúng:",
        options: [
            "Joomla có 1 cộng đồng phát triển cũng như sử dụng, điều đó có nghĩa là ngay khi gặp vấn đề khó khăn, rất nhiều người tình nguyện giúp đỡ bạn",
            "Khi gặp khó khăn không có ai giúp đỡ",
            "Khi gặp khó thì tự mình giải quyết",
            "Không có đáp án đúng"
        ],
        correct: 0,
        explanation: "Joomla có cộng đồng phát triển và sử dụng mạnh mẽ, sẵn sàng hỗ trợ khi gặp khó khăn."
    },
    {
        question: "Joomla giúp tiết kiệm thời gian và công sức thiết kế Website:",
        options: [
            "Tự ngồi lập trình lại từ đầu",
            "Tự phát triển ngay từ đầu",
            "Không có đáp án đúng"
        ],
        correct: 2,
        explanation: "Joomla giúp tiết kiệm thời gian và công sức so với việc tự lập trình từ đầu."
    },
    {
        question: "Joomla có thể sử dụng vào những site:",
        options: [
            "Blog cá nhân, tin tức, trường học",
            "Thể thao, giải trí, mua sắm, thương mại điện tử",
            "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
            "Cả 'a', 'b', 'c' đều đúng"
        ],
        correct: 3,
        explanation: "Joomla có thể được sử dụng cho tất cả các loại website: blog, tin tức, trường học, thể thao, giải trí, mua sắm, thương mại điện tử, danh bạ trực tuyến, mạng xã hội, mạng cộng đồng."
    },
    {
        question: "Joomla không thể sử dụng vào những site:",
        options: [
            "Blog cá nhân, tin tức, trường học",
            "Thể thao, giải trí, mua sắm, thương mại điện tử",
            "Danh bạ trực tuyến, mạng xã hội, mạng cộng đồng",
            "Không có đáp án đúng"
        ],
        correct: 3,
        explanation: "Joomla có thể được sử dụng cho tất cả các loại website nêu trên, không có loại nào mà Joomla không thể sử dụng."
    },
    {
        question: "Moodle viết tắt của:",
        options: [
            "Modular Object-Oriented Dynamic Learning Environment",
            "Modular -Oriented Dynamic Learning Environment",
            "Modular Object- Dynamic Learning Environment",
            "Modular Object-Oriented Learning Environment"
        ],
        correct: 0,
        explanation: "Moodle là viết tắt của 'Modular Object-Oriented Dynamic Learning Environment' - Môi trường học tập động hướng đối tượng mô-đun."
    },
    {
        question: "Công cụ Moodle dùng chủ yếu trong site nào:",
        options: [
            "Giáo dục",
            "Tin tức",
            "Thương mại điện tử",
            "Thể thao, giải trí"
        ],
        correct: 0,
        explanation: "Moodle là một hệ quản trị học tập (LMS) được thiết kế chủ yếu cho giáo dục và đào tạo trực tuyến."
    }
];
