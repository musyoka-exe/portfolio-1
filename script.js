// Portfolio Data
const portfolioData = {
    about: `Software Developer with 3+ years of experience in Python development.
Passionate about creating efficient, scalable solutions and learning new technologies.
Currently seeking opportunities to contribute to innovative projects.`,
    
    skills: [
        'Python (Django, Flask, FastAPI)',
        'JavaScript (ES6+, React, Node.js)',
        'HTML5 & CSS3 (Responsive Design)',
        'SQL (PostgreSQL, MySQL, MongoDB)',
        'Git & Version Control',
        'RESTful API Development',
        'Data Analysis (Pandas, NumPy)',
        'Cloud Platforms (AWS basics)',
        'Docker & Containerization',
        'Linux/Unix Systems'
    ],
    
    projects: [
        {
            name: 'Interactive Portfolio',
            description: 'Dual-interface portfolio with command-line functionality and modern responsive design',
            tech: 'HTML, CSS, JavaScript',
            github: 'https://github.com/samuel-dev/portfolio',
            live: 'https://samuel-portfolio.netlify.app'
        },
        {
            name: 'Task Management System',
            description: 'Full-stack web application with user authentication, real-time updates, and team collaboration features',
            tech: 'Python, Django, PostgreSQL, Redis',
            github: 'https://github.com/samuel-dev/task-manager',
            live: 'https://samuel-tasks.herokuapp.com'
        },
        {
            name: 'Data Analytics Dashboard',
            description: 'Real-time data visualization and reporting tool with interactive charts and export functionality',
            tech: 'Python, Flask, Chart.js, Pandas',
            github: 'https://github.com/samuel-dev/analytics-dashboard',
            live: 'https://samuel-analytics.netlify.app'
        },
        {
            name: 'E-commerce API',
            description: 'RESTful API for e-commerce platform with payment integration and inventory management',
            tech: 'Python, FastAPI, MongoDB, Stripe',
            github: 'https://github.com/samuel-dev/ecommerce-api',
            live: 'https://api.samuel-shop.com'
        }
    ],
    
    contact: {
        email: 'samuel.dev@email.com',
        linkedin: 'linkedin.com/in/samuel-developer',
        github: 'github.com/musyoka-exe',
        location: 'Available for remote and onsite work',
        phone: '+254 757 556 067'
    },
    
    experience: [
        'Blog Maintainer at Drivesasa (June 2023- January 2024)',
        'Surveying Intern at Survey of Kenya (May 2023 - August 2023)',
        'GIS Intern at Kenya Forest Service (May 2024 - August 2024)',
        'Freelance Web Developer (2021-Present)'
    ],

    education: [
        'Bachelor of Science in Geomatics Engineering and GIS, JKUAT (2020-Present)',
        'Software Development, Power Learn Project Africa (2022)- Flutter & Dart',
        'Software Development, Power Learn Project Africa (2025)- MERN Stack, JavaScript',
        
    ]
};

// Command Line Commands
const commands = {
    help: () => {
        return `Available commands:
┌─────────────┬──────────────────────────────────┐
│ Command     │ Description                      │
├─────────────┼──────────────────────────────────┤
│ about       │ Learn more about Samuel          │
│ skills      │ View technical skills            │
│ projects    │ See portfolio projects           │
│ experience  │ Work experience and education    │
│ education   │ Educational background           │
│ contact     │ Get contact information          │
│ resume      │ Download resume (simulated)      │
│ social      │ Social media links               │
│ clear       │ Clear the terminal screen        │
│ whoami      │ Display current user info        │
│ pwd         │ Show current directory           │
│ ls          │ List available sections          │
│ date        │ Show current date and time       │
│ weather     │ Get weather info (simulated)     │
│ joke        │ Tell a programming joke          │
│ quote       │ Inspirational quote              │
│ matrix      │ Enter the matrix (fun command)   │
│ help        │ Show this help message           │
└─────────────┴──────────────────────────────────┘

💡 Pro tip: Use arrow keys to navigate command history!`;
    },
    
    about: () => portfolioData.about,
    
    skills: () => {
        let output = 'Technical Skills & Technologies:\n\n';
        portfolioData.skills.forEach((skill, index) => {
            const progress = '█'.repeat(Math.floor(Math.random() * 5) + 6);
            output += `  ${(index + 1).toString().padStart(2)}. ${skill.padEnd(35)} ${progress}\n`;
        });
        output += '\n🚀 Always learning and expanding my skillset!';
        return output;
    },
    
    projects: () => {
        let output = 'Portfolio Projects:\n';
        output += '='.repeat(50) + '\n\n';
        portfolioData.projects.forEach((project, index) => {
            output += `${index + 1}. ${project.name}\n`;
            output += `   Description: ${project.description}\n`;
            output += `   Technologies: ${project.tech}\n`;
            output += `   GitHub: ${project.github}\n`;
            output += `   Live Demo: ${project.live}\n\n`;
        });
        return output;
    },
    
    experience: () => {
        let output = 'Professional Experience:\n';
        output += '='.repeat(30) + '\n\n';
        portfolioData.experience.forEach((exp, index) => {
            output += `• ${exp}\n`;
        });
        return output;
    },

    education: () => {
        let output = 'Education & Certifications:\n';
        output += '='.repeat(35) + '\n\n';
        portfolioData.education.forEach((edu, index) => {
            output += `🎓 ${edu}\n`;
        });
        return output;
    },
    
    contact: () => {
        return `Contact Information:
📧 Email: ${portfolioData.contact.email}
💼 LinkedIn: ${portfolioData.contact.linkedin}
🐙 GitHub: ${portfolioData.contact.github}
📱 Phone: ${portfolioData.contact.phone}
📍 ${portfolioData.contact.location}

💬 Feel free to reach out for collaborations or opportunities!`;
    },

    resume: () => {
        return `📄 Resume Download
─────────────────
Downloading samuel_musyoka_resume.pdf...
[████████████████████████████████] 100%

✅ Download complete! 
📁 File saved to: ~/Downloads/samuel_musyoka_resume.pdf

confirm the download in your Downloads folder

.`;
    },

    social: () => {
        return `🌐 Social Media & Professional Links:
─────────────────────────────────────
🐙 GitHub: https://github.com/samuel-dev
💼 LinkedIn: https://linkedin.com/in/samuel-developer  
🐦 Twitter: https://twitter.com/samuel_codes
📺 YouTube: https://youtube.com/c/samuelcodes
📝 Dev Blog: https://samuel-dev.medium.com
🎯 Portfolio: https://samuel-portfolio.dev

🤝 Let's connect and build something amazing together!`;
    },

    whoami: () => 'I am Samuel Musyoka, a passionate software developer. I am a BSc Geomatics Engineering student at JKUAT passionate about tech and clean, safe code.',

    pwd: () => '/home/samuel/portfolio',

    ls: () => {
        return `📁 Available sections:
──────────────────
📝 about/          Personal information and background
💻 skills/          Technical skills and technologies  
🚀 projects/        Portfolio projects and demos
💼 experience/      Work history and achievements
🎓 education/       Academic background and certifications
📞 contact/         Get in touch information
📄 resume/          Download resume
🌐 social/          Social media links

Use any section name as a command to explore!`;
    },
    
    date: () => {
        const now = new Date();
        return `📅 ${now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}
🕒 ${now.toLocaleTimeString('en-US')}`;
    },

    weather: () => {
        const weather = ['☀️ Sunny', '🌤️ Partly Cloudy', '☁️ Cloudy', '🌧️ Rainy', '⚡ Stormy'];
        const temp = Math.floor(Math.random() * 30) + 10;
        const condition = weather[Math.floor(Math.random() * weather.length)];
        
        return `🌡️ Weather Simulation:
Location: Developer's Desk
Condition: ${condition}
Temperature: ${temp}°C
Humidity: ${Math.floor(Math.random() * 40) + 40}%
Code Quality: Excellent ✨`;
    },

    joke: () => {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "How many programmers does it take to change a lightbulb? None, that's a hardware problem! 💡",
            "Why did the programmer quit his job? He didn't get arrays! 📊",
            "What's a programmer's favorite hangout place? Foo Bar! 🍺",
            "Why do Java developers wear glasses? Because they can't C#! 👓",
            "How do you comfort a JavaScript bug? You console it! 🤗"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    },

    quote: () => {
        const quotes = [
            '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
            '"First, solve the problem. Then, write the code." - John Johnson',
            '"The best error message is the one that never shows up." - Thomas Fuchs',
            '"Programming isn\'t about what you know; it\'s about what you can figure out." - Chris Pine',
            '"Talk is cheap. Show me the code." - Linus Torvalds',
            '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie'
        ];
        return '💭 ' + quotes[Math.floor(Math.random() * quotes.length)];
    },

    matrix: () => {
        return `🔴 Entering the Matrix...
╔════════════════════════════════════╗
║  Wake up, Samuel...                ║
║  The Matrix has you...             ║
║  Follow the white rabbit... 🐰      ║
║                                    ║
║  01001000 01100101 01101100 01101100 01101111  ║
║  Welcome to the real world of code ║
╚════════════════════════════════════╝

💊 Choose your pill:
🔵 Blue pill: return to normal portfolio
🔴 Red pill: continue coding in the Matrix

Type 'clear' to return to reality...`;
    },
    
    clear: () => 'CLEAR_SCREEN'
};

// Global Variables
let commandHistory = [];
let historyIndex = -1;
let currentMode = 'popup'; // 'popup', 'normal', 'cmd'

// DOM Elements
const popupOverlay = document.getElementById('popupOverlay');
const normalPortfolio = document.getElementById('normalPortfolio');
const cmdInterface = document.getElementById('cmdInterface');
const cmdInput = document.getElementById('cmdInput');
const cmdOutput = document.getElementById('cmdOutput');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showModePopup();
    setupScrollAnimation();
    setupFormSubmission();
});

// Mode Functions
function showModePopup() {
    currentMode = 'popup';
    popupOverlay.style.display = 'flex';
    normalPortfolio.style.display = 'none';
    cmdInterface.style.display = 'none';
}

function showNormalPortfolio() {
    currentMode = 'normal';
    popupOverlay.style.display = 'none';
    normalPortfolio.style.display = 'block';
    cmdInterface.style.display = 'none';
    
    // Trigger animations
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
}

function showCmdInterface() {
    currentMode = 'cmd';
    popupOverlay.style.display = 'none';
    normalPortfolio.style.display = 'none';
    cmdInterface.style.display = 'block';
    
    // Focus on input
    setTimeout(() => {
        cmdInput.focus();
    }, 100);
}

// Command Line Functions
function addToOutput(content, isCommand = false, className = '') {
    const line = document.createElement('div');
    line.className = `cmd-line ${className}`;
    
    if (isCommand) {
        line.innerHTML = `<span class="cmd-prompt">samuel@portfolio:~$</span> ${escapeHtml(content)}`;
    } else {
        line.innerHTML = escapeHtml(content).replace(/\n/g, '<br>');
    }
    
    cmdOutput.appendChild(line);
    cmdOutput.scrollTop = cmdOutput.scrollHeight;
}

function processCommand(cmd) {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    addToOutput(cmd, true);
    
    if (trimmedCmd === '') return;
    
    // Add to history
    commandHistory.unshift(cmd);
    if (commandHistory.length > 50) {
        commandHistory.pop();
    }
    historyIndex = -1;
    
    // Handle clear command
    if (trimmedCmd === 'clear') {
        cmdOutput.innerHTML = '';
        return;
    }
    
    // Process command
    if (commands[trimmedCmd]) {
        const result = commands[trimmedCmd]();
        if (result !== 'CLEAR_SCREEN') {
            // Add typing animation for long responses
            if (result.length > 100) {
                typeWriter(result, 20);
            } else {
                addToOutput(result);
            }
        }
    } else {
        addToOutput(`❌ Command not found: ${trimmedCmd}
Type 'help' for available commands.`);
    }
    
    addToOutput(''); // Empty line for spacing
}

function typeWriter(text, speed = 50) {
    const line = document.createElement('div');
    line.className = 'cmd-line';
    cmdOutput.appendChild(line);
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            line.innerHTML = escapeHtml(text.substring(0, i + 1)).replace(/\n/g, '<br>');
            i++;
            cmdOutput.scrollTop = cmdOutput.scrollHeight;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Event Listeners
cmdInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = this.value;
        processCommand(cmd);
        this.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            this.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            this.value = commandHistory[historyIndex];
        } else {
            historyIndex = -1;
            this.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        // Simple tab completion
        const input = this.value.toLowerCase();
        const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input));
        if (matches.length === 1) {
            this.value = matches[0];
        } else if (matches.length > 1) {
            addToOutput(matches.join('  '));
            addToOutput('');
        }
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.skill-category, .project-card, .highlight, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Form submission
function setupFormSubmission() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Easter eggs and fun interactions
document.addEventListener('keydown', function(e) {
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiInput = [];
    
    konamiInput.push(e.code);
    if (konamiInput.length > konamiCode.length) {
        konamiInput.shift();
    }
    
    if (konamiInput.length === konamiCode.length && 
        konamiInput.every((key, index) => key === konamiCode[index])) {
        
        if (currentMode === 'normal') {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);
        }
    }
});

// Initialize portfolio data display
function updatePortfolioContent() {
    // This function could be used to dynamically update content
    // For now, content is static in HTML
    console.log('Portfolio loaded successfully! 🚀');
}

