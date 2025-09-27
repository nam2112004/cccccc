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
    }
];

// Quiz Variables
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let timeLeft = 25 * 60; // 25 minutes in seconds
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

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    score = 0;
    timeLeft = 25 * 60; // 25 minutes
    quizStarted = false;
    quizCompleted = false;
    
    // Reset timer display
    updateTimerDisplay();
    
    showScreen('start');
    loadQuestion();
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

// Select Option
function selectOption(optionIndex) {
    // Don't allow selection if quiz is completed
    if (quizCompleted) return;
    
    // Store answer
    userAnswers[currentQuestion] = optionIndex;
    
    // Show immediate feedback
    showImmediateFeedback(optionIndex);
    
    // Don't auto-advance, let user control manually
    // User can click Next button or use keyboard navigation
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

// Show Submit Button (no longer needed - always visible)

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
    const timeTaken = 25 * 60 - timeLeft;
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