/* CONFIGURATION AREA 
    Update this section to change your content easily.
*/

const portfolioData = {
    // HERO SECTION: This represents YOU
    hero: {
        title: "The UI/UX Designer",
        subtitle: "Creating clarity from chaos.",
        description: "Specializing in complex systems, AI interfaces, and educational platforms. Currently designing the future of digital safety and OTT experiences.",
        backgroundImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Replace with your photo
        resumeLink: "path/to/resume.pdf"
    },

    // CATEGORIES: Group your projects here
    categories: [
        {
            name: "Featured Projects",
            projects: [
                {
                    id: 1,
                    title: "Netflix AI Redesign",
                    year: "2025",
                    role: "Lead UX/UI Designer",
                    [cite_start]// Using source [cite: 7, 12, 16]
                    shortDesc: "Solving the 'what to watch' paralysis with Voice AI.",
                    fullDesc: "Netflix is a leader, but finding specific moments is hard. This redesign introduces an AI-powered search with voice control that understands natural queries like 'Show me the coffee shop scene in Friends'. Features include contextual search, scene jumping, and smart suggestions.",
                    tags: ["TV App", "Voice UI", "AI Search"],
                    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop" // Replace with project shot
                },
                {
                    id: 2,
                    title: "Guardian Bubble",
                    year: "2025",
                    role: "Lead UX/UI Designer",
                    [cite_start]// Using source [cite: 74, 79, 89]
                    shortDesc: "A multi-platform safety ecosystem for modern families.",
                    fullDesc: "Designed a 100+ page Full Stack Design into structured flows for iOS, Android, and Web. Features live GPS tracking, geofencing with Red Zone alerts, and 'Superlock' for controlled phone access. A safety-first interface focusing on trust and clarity.",
                    tags: ["Mobile App", "Child Safety", "Geo-fencing"],
                    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: 5,
                    title: "The Sportsbook",
                    year: "2025",
                    role: "Lead UX/UI Designer",
                    [cite_start]// Using source [cite: 174, 179]
                    shortDesc: "Revolutionizing physical education in schools.",
                    fullDesc: "An all-in-one sports education platform catering to students, coaches, and schools. Features include PE curriculum management, summer camp coordination, and a balanced report card system. Built for scalability using Flutter.",
                    tags: ["EdTech", "Flutter", "B2B SaaS"],
                    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop"
                }
            ]
        },
        {
            name: "Concept & Experimental",
            projects: [
                {
                    id: 3,
                    title: "Sign Language AI",
                    year: "2024",
                    role: "Concept Designer",
                    [cite_start]// Using source [cite: 119, 124]
                    shortDesc: "Making Google Assistant accessible to the deaf community.",
                    fullDesc: "A concept integration of sign language detection with Google Assistant. Utilizes mobile vision to interpret gestures in real-time, translating them into text or spoken language the assistant can process.",
                    tags: ["Accessibility", "Machine Learning", "Mobile Vision"],
                    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                },
                {
                    id: 4,
                    title: "Vision Pro Colors",
                    year: "2024",
                    role: "Concept Designer",
                    [cite_start]// Using source [cite: 147, 152]
                    shortDesc: "True colors for everyone using Spatial Computing.",
                    fullDesc: "An innovative app for Apple Vision Pro designed to assist individuals with color blindness. Uses AR to provide real-time color correction and 'Type-Specific Adjustments' (Protanopia, etc.) overlaying color names on the environment.",
                    tags: ["Spatial Design", "AR/VR", "Accessibility"],
                    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop"
                }
            ]
        }
    ]
};

/* LOGIC AREA
   (You don't need to edit below this line unless you want to change functionality) 
*/

document.addEventListener('DOMContentLoaded', () => {
    loadHero();
    loadCategories();
});

// 1. Load Hero Section
function loadHero() {
    const hero = document.getElementById('hero-section');
    const { title, subtitle, description, backgroundImage } = portfolioData.hero;

    hero.style.backgroundImage = `linear-gradient(to top, #141414 10%, transparent 90%), url('${backgroundImage}')`;
    
    hero.innerHTML = `
        <div class="hero-content">
            <h1 class="hero-title">${title}</h1>
            <h2>${subtitle}</h2>
            <p class="hero-desc">${description}</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="scrollToProjects()"><i class="fas fa-play"></i> View Projects</button>
                <button class="btn btn-secondary"><i class="fas fa-info-circle"></i> View Resume</button>
            </div>
        </div>
    `;
}

// 2. Load Rows and Projects
function loadCategories() {
    const container = document.getElementById('projects-container');
    
    portfolioData.categories.forEach(category => {
        const categoryHtml = `
            <div class="category">
                <h3 class="category-title">${category.name}</h3>
                <div class="row">
                    ${category.projects.map(project => `
                        <div class="card" onclick="openModal(${project.id})" style="background-image: url('${project.image}')">
                            <div class="card-info">
                                <h4>${project.title}</h4>
                                <small>${project.role}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHtml;
    });
}

// 3. Modal Logic
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

function openModal(projectId) {
    // Find project data
    let selectedProject;
    portfolioData.categories.forEach(cat => {
        const found = cat.projects.find(p => p.id === projectId);
        if(found) selectedProject = found;
    });

    if(!selectedProject) return;

    // Populate Modal
    document.getElementById('modal-header').style.backgroundImage = `linear-gradient(to top, #181818, transparent), url('${selectedProject.image}')`;
    document.getElementById('modal-title').innerText = selectedProject.title;
    document.getElementById('modal-desc').innerText = selectedProject.fullDesc;
    document.getElementById('modal-year').innerText = selectedProject.year;
    document.getElementById('modal-role').innerText = selectedProject.role;
    
    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = selectedProject.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');

    // Show Modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Stop background scrolling
}

// Close Modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function scrollToProjects() {
    document.getElementById('projects-container').scrollIntoView({behavior: 'smooth'});
}
