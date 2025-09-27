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
        question: "Giao thức nào được sử dụng phổ biến nhất trong mạng nguồn mở?",
        options: [
            "HTTP",
            "TCP/IP",
            "FTP",
            "SMTP"
        ],
        correct: 1,
        explanation: "TCP/IP là bộ giao thức cơ bản nhất được sử dụng trong mạng nguồn mở và internet nói chung."
    },
    {
        question: "OpenFlow là gì?",
        options: [
            "Một giao thức mạng nguồn mở",
            "Một hệ điều hành mạng",
            "Một phần mềm quản lý mạng",
            "Một chuẩn bảo mật mạng"
        ],
        correct: 0,
        explanation: "OpenFlow là một giao thức mạng nguồn mở cho phép điều khiển lưu lượng mạng thông qua các switch và router."
    },
    {
        question: "SDN (Software-Defined Networking) có đặc điểm gì?",
        options: [
            "Tách biệt control plane và data plane",
            "Chỉ sử dụng phần cứng chuyên dụng",
            "Không cần phần mềm",
            "Chỉ hoạt động trên mạng LAN"
        ],
        correct: 0,
        explanation: "SDN tách biệt control plane (mặt phẳng điều khiển) và data plane (mặt phẳng dữ liệu) để quản lý mạng linh hoạt hơn."
    },
    {
        question: "OpenStack là gì?",
        options: [
            "Một hệ điều hành mạng",
            "Một nền tảng cloud computing nguồn mở",
            "Một giao thức bảo mật",
            "Một phần mềm quản lý cơ sở dữ liệu"
        ],
        correct: 1,
        explanation: "OpenStack là một nền tảng cloud computing nguồn mở để xây dựng và quản lý hạ tầng cloud."
    },
    {
        question: "Trong mạng nguồn mở, việc nào sau đây là quan trọng nhất?",
        options: [
            "Sử dụng phần cứng đắt tiền",
            "Bảo mật và kiểm tra mã nguồn",
            "Chỉ sử dụng phần mềm thương mại",
            "Tránh sử dụng internet"
        ],
        correct: 1,
        explanation: "Bảo mật và kiểm tra mã nguồn là rất quan trọng trong mạng nguồn mở để đảm bảo an toàn hệ thống."
    },
    {
        question: "Open vSwitch (OVS) là gì?",
        options: [
            "Một switch ảo nguồn mở",
            "Một giao thức mạng",
            "Một hệ điều hành",
            "Một chuẩn bảo mật"
        ],
        correct: 0,
        explanation: "Open vSwitch là một switch ảo nguồn mở được thiết kế để hoạt động như một switch mạng ảo trong môi trường ảo hóa."
    },
    {
        question: "Mininet được sử dụng để làm gì?",
        options: [
            "Quản lý cơ sở dữ liệu",
            "Mô phỏng mạng SDN",
            "Bảo mật mạng",
            "Lưu trữ dữ liệu"
        ],
        correct: 1,
        explanation: "Mininet là một công cụ mô phỏng mạng SDN cho phép tạo ra các mạng ảo để test và phát triển ứng dụng SDN."
    },
    {
        question: "Trong mạng nguồn mở, lợi ích chính là gì?",
        options: [
            "Chi phí thấp và tính linh hoạt cao",
            "Tốc độ nhanh nhất",
            "Bảo mật tuyệt đối",
            "Dễ sử dụng nhất"
        ],
        correct: 0,
        explanation: "Mạng nguồn mở mang lại lợi ích về chi phí thấp và tính linh hoạt cao do có thể tùy chỉnh mã nguồn."
    },
    {
        question: "OpenDaylight là gì?",
        options: [
            "Một hệ điều hành mạng",
            "Một nền tảng SDN controller nguồn mở",
            "Một giao thức bảo mật",
            "Một phần mềm quản lý mạng"
        ],
        correct: 1,
        explanation: "OpenDaylight là một nền tảng SDN controller nguồn mở được phát triển bởi Linux Foundation để quản lý mạng SDN."
    },
    {
        question: "NFV (Network Functions Virtualization) là gì?",
        options: [
            "Ảo hóa các chức năng mạng",
            "Một giao thức bảo mật",
            "Một loại switch mạng",
            "Một hệ điều hành mạng"
        ],
        correct: 0,
        explanation: "NFV là công nghệ ảo hóa các chức năng mạng truyền thống chạy trên phần cứng chuyên dụng thành các phần mềm chạy trên máy ảo."
    },
    {
        question: "Trong SDN, Southbound API được sử dụng để làm gì?",
        options: [
            "Giao tiếp giữa controller và thiết bị mạng",
            "Giao tiếp giữa các controller",
            "Giao tiếp với ứng dụng",
            "Giao tiếp với người dùng"
        ],
        correct: 0,
        explanation: "Southbound API cho phép SDN controller giao tiếp với các thiết bị mạng (switch, router) để điều khiển chúng."
    },
    {
        question: "OpenStack có các thành phần chính nào?",
        options: [
            "Nova, Neutron, Cinder",
            "Windows, Linux, macOS",
            "HTTP, FTP, SMTP",
            "TCP, UDP, ICMP"
        ],
        correct: 0,
        explanation: "OpenStack có các thành phần chính: Nova (compute), Neutron (networking), Cinder (block storage), và nhiều thành phần khác."
    },
    {
        question: "Trong mạng nguồn mở, OpenStack Neutron có chức năng gì?",
        options: [
            "Quản lý mạng và kết nối",
            "Quản lý máy ảo",
            "Quản lý lưu trữ",
            "Quản lý bảo mật"
        ],
        correct: 0,
        explanation: "Neutron là thành phần networking của OpenStack, chịu trách nhiệm quản lý mạng và kết nối trong cloud."
    },
    {
        question: "SDN Controller có vai trò gì trong mạng SDN?",
        options: [
            "Điều khiển và quản lý mạng",
            "Chỉ định tuyến dữ liệu",
            "Cung cấp băng thông",
            "Lưu trữ dữ liệu"
        ],
        correct: 0,
        explanation: "SDN Controller là bộ não của mạng SDN, điều khiển và quản lý toàn bộ mạng thông qua các flow table."
    },
    {
        question: "OpenFlow switch hoạt động như thế nào?",
        options: [
            "Theo flow table được controller cung cấp",
            "Tự động học địa chỉ MAC",
            "Sử dụng routing table cố định",
            "Chỉ chuyển tiếp broadcast"
        ],
        correct: 0,
        explanation: "OpenFlow switch hoạt động theo flow table được SDN controller cung cấp, quyết định cách xử lý các gói tin."
    },
    {
        question: "Trong mạng nguồn mở, OpenStack Nova có chức năng gì?",
        options: [
            "Quản lý máy ảo và compute",
            "Quản lý mạng",
            "Quản lý lưu trữ",
            "Quản lý bảo mật"
        ],
        correct: 0,
        explanation: "Nova là thành phần compute của OpenStack, chịu trách nhiệm tạo, quản lý và hủy các máy ảo."
    },
    {
        question: "SDN có lợi ích gì so với mạng truyền thống?",
        options: [
            "Tính linh hoạt và khả năng lập trình cao",
            "Tốc độ nhanh hơn",
            "Chi phí thấp hơn",
            "Dễ cài đặt hơn"
        ],
        correct: 0,
        explanation: "SDN mang lại tính linh hoạt và khả năng lập trình cao, cho phép thay đổi cấu hình mạng một cách động."
    },
    {
        question: "Trong OpenStack, Horizon là gì?",
        options: [
            "Dashboard web interface",
            "Database service",
            "Message queue",
            "Storage service"
        ],
        correct: 0,
        explanation: "Horizon là dashboard web interface của OpenStack, cung cấp giao diện người dùng để quản lý cloud."
    },
    {
        question: "SDN Northbound API được sử dụng để làm gì?",
        options: [
            "Giao tiếp giữa controller và ứng dụng",
            "Giao tiếp giữa controller và thiết bị",
            "Giao tiếp giữa các thiết bị",
            "Giao tiếp với người dùng"
        ],
        correct: 0,
        explanation: "Northbound API cho phép các ứng dụng giao tiếp với SDN controller để yêu cầu các dịch vụ mạng."
    },
    {
        question: "OpenStack Cinder có chức năng gì?",
        options: [
            "Quản lý block storage",
            "Quản lý object storage",
            "Quản lý file storage",
            "Quản lý database"
        ],
        correct: 0,
        explanation: "Cinder là thành phần block storage của OpenStack, cung cấp dịch vụ lưu trữ khối cho các máy ảo."
    },
    {
        question: "Trong mạng SDN, Flow Table chứa thông tin gì?",
        options: [
            "Các quy tắc xử lý gói tin",
            "Địa chỉ IP của các host",
            "Thông tin routing",
            "Cấu hình bảo mật"
        ],
        correct: 0,
        explanation: "Flow Table chứa các quy tắc (rules) để switch quyết định cách xử lý các gói tin dựa trên header của chúng."
    },
    {
        question: "OpenStack Swift có chức năng gì?",
        options: [
            "Object storage service",
            "Block storage service",
            "File storage service",
            "Database service"
        ],
        correct: 0,
        explanation: "Swift là thành phần object storage của OpenStack, cung cấp dịch vụ lưu trữ đối tượng có khả năng mở rộng cao."
    },
    {
        question: "SDN có thể giải quyết vấn đề gì của mạng truyền thống?",
        options: [
            "Tính cứng nhắc và khó quản lý",
            "Tốc độ chậm",
            "Chi phí cao",
            "Bảo mật kém"
        ],
        correct: 0,
        explanation: "SDN giải quyết vấn đề tính cứng nhắc và khó quản lý của mạng truyền thống bằng cách tách biệt control và data plane."
    },
    {
        question: "Trong OpenStack, Keystone có chức năng gì?",
        options: [
            "Identity và authentication service",
            "Compute service",
            "Network service",
            "Storage service"
        ],
        correct: 0,
        explanation: "Keystone là thành phần identity và authentication của OpenStack, quản lý xác thực và phân quyền người dùng."
    },
    {
        question: "SDN Controller có thể quản lý bao nhiêu switch?",
        options: [
            "Hàng nghìn switch",
            "Chỉ 1 switch",
            "Tối đa 10 switch",
            "Tối đa 100 switch"
        ],
        correct: 0,
        explanation: "SDN Controller có thể quản lý hàng nghìn switch và thiết bị mạng khác nhau trong một mạng lớn."
    },
    {
        question: "OpenStack Glance có chức năng gì?",
        options: [
            "Image service",
            "Network service",
            "Storage service",
            "Compute service"
        ],
        correct: 0,
        explanation: "Glance là thành phần image service của OpenStack, quản lý các image (hình ảnh) của máy ảo và snapshot."
    },
    {
        question: "Trong SDN, OpenFlow protocol chạy trên port nào?",
        options: [
            "Port 6653",
            "Port 80",
            "Port 443",
            "Port 22"
        ],
        correct: 0,
        explanation: "OpenFlow protocol thường sử dụng port 6653 (hoặc 6633) để giao tiếp giữa controller và switch."
    },
    {
        question: "SDN có thể được triển khai trong môi trường nào?",
        options: [
            "Data center, campus network, WAN",
            "Chỉ trong data center",
            "Chỉ trong mạng LAN",
            "Chỉ trong mạng WAN"
        ],
        correct: 0,
        explanation: "SDN có thể được triển khai trong nhiều môi trường khác nhau: data center, campus network, WAN, và cả mạng di động."
    },
    {
        question: "OpenStack Heat có chức năng gì?",
        options: [
            "Orchestration service",
            "Monitoring service",
            "Logging service",
            "Backup service"
        ],
        correct: 0,
        explanation: "Heat là thành phần orchestration của OpenStack, cho phép tự động hóa việc triển khai và quản lý các ứng dụng cloud."
    },
    {
        question: "Trong mạng SDN, khi nào switch cần hỏi controller?",
        options: [
            "Khi không tìm thấy rule phù hợp trong flow table",
            "Khi nhận được gói tin đầu tiên",
            "Khi có lỗi xảy ra",
            "Khi cần cập nhật firmware"
        ],
        correct: 0,
        explanation: "Switch sẽ hỏi controller (Packet-In message) khi không tìm thấy rule phù hợp trong flow table để xử lý gói tin."
    },
    {
        question: "SDN có thể cải thiện bảo mật mạng như thế nào?",
        options: [
            "Tập trung hóa chính sách bảo mật",
            "Tăng tốc độ xử lý",
            "Giảm chi phí",
            "Dễ cài đặt hơn"
        ],
        correct: 0,
        explanation: "SDN cho phép tập trung hóa chính sách bảo mật, dễ dàng áp dụng và cập nhật các quy tắc bảo mật trên toàn mạng."
    },
    {
        question: "OpenStack Ceilometer có chức năng gì?",
        options: [
            "Telemetry và monitoring service",
            "Image service",
            "Network service",
            "Storage service"
        ],
        correct: 0,
        explanation: "Ceilometer là thành phần telemetry và monitoring của OpenStack, thu thập và lưu trữ dữ liệu đo lường về cloud."
    },
    {
        question: "Trong SDN, Flow Mod message được sử dụng để làm gì?",
        options: [
            "Cập nhật flow table của switch",
            "Gửi gói tin đến controller",
            "Thông báo lỗi",
            "Cập nhật cấu hình switch"
        ],
        correct: 0,
        explanation: "Flow Mod message được controller gửi đến switch để thêm, sửa, hoặc xóa các rule trong flow table."
    },
    {
        question: "SDN có thể giảm OPEX (Operational Expenditure) như thế nào?",
        options: [
            "Tự động hóa quản lý mạng",
            "Giảm chi phí phần cứng",
            "Tăng tốc độ mạng",
            "Cải thiện bảo mật"
        ],
        correct: 0,
        explanation: "SDN giảm OPEX bằng cách tự động hóa quản lý mạng, giảm nhu cầu can thiệp thủ công và tăng hiệu quả vận hành."
    },
    {
        question: "OpenStack Trove có chức năng gì?",
        options: [
            "Database as a Service",
            "Storage as a Service",
            "Network as a Service",
            "Compute as a Service"
        ],
        correct: 0,
        explanation: "Trove là thành phần Database as a Service của OpenStack, cung cấp dịch vụ cơ sở dữ liệu được quản lý."
    },
    {
        question: "Trong SDN, Packet-In message chứa thông tin gì?",
        options: [
            "Gói tin và thông tin switch",
            "Chỉ gói tin",
            "Chỉ thông tin switch",
            "Cấu hình mạng"
        ],
        correct: 0,
        explanation: "Packet-In message chứa gói tin gốc và thông tin về switch (port, buffer ID) để controller xử lý và quyết định."
    },
    {
        question: "SDN có thể hỗ trợ multi-tenancy như thế nào?",
        options: [
            "Tạo các mạng ảo riêng biệt",
            "Tăng băng thông",
            "Giảm độ trễ",
            "Cải thiện bảo mật"
        ],
        correct: 0,
        explanation: "SDN hỗ trợ multi-tenancy bằng cách tạo các mạng ảo riêng biệt cho từng tenant với các chính sách và cô lập riêng."
    },
    {
        question: "OpenStack Sahara có chức năng gì?",
        options: [
            "Big Data as a Service",
            "Database as a Service",
            "Storage as a Service",
            "Network as a Service"
        ],
        correct: 0,
        explanation: "Sahara là thành phần Big Data as a Service của OpenStack, cung cấp dịch vụ xử lý dữ liệu lớn như Hadoop, Spark."
    },
    {
        question: "Trong SDN, Flow Table có thể chứa bao nhiêu rule?",
        options: [
            "Hàng nghìn rule",
            "Chỉ 1 rule",
            "Tối đa 10 rule",
            "Tối đa 100 rule"
        ],
        correct: 0,
        explanation: "Flow Table có thể chứa hàng nghìn rule tùy thuộc vào khả năng của switch và yêu cầu của ứng dụng."
    },
    {
        question: "SDN có thể được sử dụng trong 5G network không?",
        options: [
            "Có, rất phù hợp",
            "Không, không tương thích",
            "Chỉ trong một số trường hợp",
            "Chưa được kiểm chứng"
        ],
        correct: 0,
        explanation: "SDN rất phù hợp với 5G network vì cung cấp tính linh hoạt, khả năng lập trình và quản lý mạng động cần thiết cho 5G."
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 30 * 60; // 30 minutes in seconds
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

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    timeLeft = 30 * 60;
    quizStarted = false;
    quizCompleted = false;
    
    // Reset timer display
    timeDisplayElement.parentElement.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
    timeDisplayElement.parentElement.style.animation = 'pulse 2s infinite';
    
    showScreen('start');
    updateTimerDisplay();
}

// Show specific screen
function showScreen(screenName) {
    const screens = [startScreen, quizScreen, resultsScreen, reviewScreen];
    screens.forEach(screen => screen.style.display = 'none');
    
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

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplayElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 60) {
        timeDisplayElement.parentElement.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
        timeDisplayElement.parentElement.style.animation = 'pulse 1s infinite';
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    
    // Clear previous options and explanation
    optionsElement.innerHTML = '';
    
    // Remove any existing explanation
    const existingExplanation = document.querySelector('.explanation-box');
    if (existingExplanation) {
        existingExplanation.remove();
    }
    
    // Create options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option}</span>
        `;
        
        // Check if this option was previously selected and show feedback
        if (userAnswers[currentQuestion] !== null) {
            const correctIndex = question.correct;
            if (index === correctIndex) {
                optionElement.classList.add('correct');
            } else if (index === userAnswers[currentQuestion]) {
                optionElement.classList.add('incorrect');
            }
            optionElement.style.pointerEvents = 'none'; // Disable further selection
        } else {
            optionElement.addEventListener('click', () => selectOption(index));
        }
        
        optionsElement.appendChild(optionElement);
    });
    
    // Show explanation if question was already answered
    if (userAnswers[currentQuestion] !== null) {
        showExplanation();
    }
    
    // Update progress
    updateProgress();
    updateNavigationButtons();
}

// Select Option
function selectOption(optionIndex) {
    // Remove previous selection
    optionsElement.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Add selection to clicked option
    optionsElement.children[optionIndex].classList.add('selected');
    
    // Save answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Show immediate feedback
    showImmediateFeedback(optionIndex);
    
    // Auto-advance after selection (optional)
    setTimeout(() => {
        if (currentQuestion < quizData.length - 1) {
            nextQuestion();
        } else {
            showSubmitButton();
        }
    }, 2000); // Increased delay to allow user to see feedback
}

// Show immediate feedback
function showImmediateFeedback(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;
    const options = optionsElement.querySelectorAll('.option');
    
    // Mark correct answer
    options[correctIndex].classList.add('correct');
    
    // Mark selected answer if it's wrong
    if (selectedIndex !== correctIndex) {
        options[selectedIndex].classList.add('incorrect');
    }
    
    // Disable all options to prevent further selection
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Show explanation
    showExplanation();
}

// Show explanation for current question
function showExplanation() {
    const explanation = document.createElement('div');
    explanation.className = 'explanation-box';
    explanation.innerHTML = `
        <div class="explanation-content">
            <i class="fas fa-lightbulb"></i>
            <strong>Giải thích:</strong> ${quizData[currentQuestion].explanation}
        </div>
    `;
    
    // Insert explanation after options
    optionsElement.parentNode.insertBefore(explanation, optionsElement.nextSibling);
    
    // Animate explanation
    setTimeout(() => {
        explanation.style.opacity = '1';
        explanation.style.transform = 'translateY(0)';
    }, 100);
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
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = 'none';
        showSubmitButton();
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

// Show Submit Button
function showSubmitButton() {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-flex';
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

// End Quiz
function endQuiz() {
    stopTimer();
    quizCompleted = true;
    calculateScore();
    showResults();
}

// Calculate Score
function calculateScore() {
    let correct = 0;
    let wrong = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const score = correct;
    const percentage = Math.round((score / quizData.length) * 100);
    
    // Update score display
    scoreNumberElement.textContent = score;
    scorePercentageElement.textContent = `${percentage}%`;
    correctCountElement.textContent = correct;
    wrongCountElement.textContent = wrong;
    
    // Calculate time taken
    const timeTaken = 30 * 60 - timeLeft;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    timeTakenElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Set score message
    if (percentage >= 90) {
        scoreMessageElement.textContent = "Xuất sắc! Bạn đã nắm vững kiến thức về mạng nguồn mở!";
    } else if (percentage >= 80) {
        scoreMessageElement.textContent = "Rất tốt! Bạn có kiến thức tốt về mạng nguồn mở!";
    } else if (percentage >= 70) {
        scoreMessageElement.textContent = "Tốt! Bạn có kiến thức khá tốt về mạng nguồn mở!";
    } else if (percentage >= 60) {
        scoreMessageElement.textContent = "Khá! Bạn cần ôn tập thêm về mạng nguồn mở!";
    } else {
        scoreMessageElement.textContent = "Cần cố gắng hơn! Hãy ôn tập lại kiến thức về mạng nguồn mở!";
    }
}

// Show Results
function showResults() {
    showScreen('results');
}

// Show Review
function showReview() {
    showScreen('review');
    generateReviewContent();
}

// Generate Review Content
function generateReviewContent() {
    reviewContentElement.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <strong>Câu ${index + 1}:</strong> ${question.question}
            </div>
            <div class="review-answer ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span><strong>Đáp án của bạn:</strong> ${userAnswer !== null ? String.fromCharCode(65 + userAnswer) + '. ' + question.options[userAnswer] : 'Chưa trả lời'}</span>
            </div>
            <div class="review-answer correct-answer">
                <i class="fas fa-check-circle"></i>
                <span><strong>Đáp án đúng:</strong> ${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}</span>
            </div>
            <div style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 8px; font-style: italic;">
                <strong>Giải thích:</strong> ${question.explanation}
            </div>
        `;
        
        reviewContentElement.appendChild(reviewItem);
    });
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', endQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', initQuiz);
backToResultsBtn.addEventListener('click', () => showScreen('results'));

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

// Prevent page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    if (quizStarted && !quizCompleted) {
        e.preventDefault();
        e.returnValue = 'Bạn có chắc muốn rời khỏi trang? Tiến trình thi sẽ bị mất!';
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizScreen.style.display !== 'none') {
        switch(e.key) {
            case 'ArrowLeft':
                if (!prevBtn.disabled) {
                    prevQuestion();
                }
                break;
            case 'ArrowRight':
                if (!nextBtn.disabled) {
                    nextQuestion();
                }
                break;
            case 'Enter':
                if (submitBtn.style.display !== 'none') {
                    endQuiz();
                } else if (!nextBtn.disabled) {
                    nextQuestion();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const optionIndex = parseInt(e.key) - 1;
                if (optionIndex >= 0 && optionIndex < 4) {
                    selectOption(optionIndex);
                }
                break;
        }
    }
});

// Add some visual feedback for interactions
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add loading states
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

// Add smooth scrolling for review
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call smooth scroll when changing screens
const screenButtons = [startBtn, reviewBtn, restartBtn, backToResultsBtn];
screenButtons.forEach(btn => {
    btn.addEventListener('click', smoothScrollToTop);
});

// Add animation to score circle
function animateScore() {
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        scoreCircle.style.transform = 'scale(0)';
        setTimeout(() => {
            scoreCircle.style.transform = 'scale(1)';
            scoreCircle.style.transition = 'transform 0.5s ease';
        }, 100);
    }
}

// Call animation when results are shown
const originalShowResults = showResults;
showResults = function() {
    originalShowResults();
    setTimeout(animateScore, 100);
};
