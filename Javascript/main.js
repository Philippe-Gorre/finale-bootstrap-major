/* ─── DATA ─── */
const destinations = [
  {
    id:1,
    name:"Masungi Georeserve",
    municipality:"Baras / Tanay",
    category:"Adventure",
    image:"images/masungi3.jpg",
    shortDesc:"A breathtaking conservation area showcasing dramatic limestone karst formations, hanging net bridges, and awe-inspiring views of the Sierra Madre mountains.",
    fullDesc:"Masungi Georeserve is a rock and forest landscape conservation area nestled in the heart of the Sierra Madre mountain range. It features stunning limestone karst formations connected by a network of rope bridges, spider-web hammocks, and elevated trails. The reserve is a shining example of reforestation and biodiversity conservation, having restored over 2,700 hectares of previously denuded forest.",
    activities:["Trail Hiking","Rock Climbing","Nature Photography","Hanging Net Bridge Walk","Wildlife Spotting","Environmental Education"],
    bestTime:"November to May (dry season)",
    fee:"₱1,500/person (Heritage Trail) · ₱4,500/person (Discovery Trail)",
    hours:"6:00 AM – 3:00 PM (Tue–Sun; closed Mon)",
    tips:"Pre-booking is MANDATORY — slots fill weeks in advance. Wear closed-toe shoes. No food inside. Bring water, sunscreen, and insect repellent. Allow at least 3–4 hours for the trail."
  },
  {
    id:2,
    name:"Tinipak River",
    municipality:"Tanay",
    category:"Adventure",
    image:"images/tinipak.webp",
    shortDesc:"Crystal-clear turquoise waters flowing through towering white marble boulders, offering a surreal riverside experience in the heart of Tanay.",
    fullDesc:"Tinipak River is one of Rizal's most stunning natural attractions, characterized by its incredibly clear turquoise water and the dramatic white limestone and marble rock formations lining its banks. The river cuts through the Sierra Madre foothills, creating deep pools perfect for swimming. A hike along the river leads to the awe-inspiring Ilog Tinipak and the 30-meter Tinipak Falls.",
    activities:["River Trekking","Swimming","Cliff Jumping","Nature Photography","Camping","Waterfall Chasing"],
    bestTime:"November to May (avoid heavy rains)",
    fee:"₱100–₱150 entrance fee + optional guide fee",
    hours:"5:00 AM – 5:00 PM daily",
    tips:"Hire a local guide for safety. Wear water shoes. Check weather forecasts — avoid during typhoon season. The trail can be slippery; walk carefully on boulders."
  },
  {
    id:3,
    name:"Daranak Falls",
    municipality:"Tanay",
    category:"Waterfall",
    image:"images/daranak1.jpg",
    shortDesc:"One of Rizal's most iconic waterfalls, featuring a majestic 20-meter cascade that feeds into a wide, crystal-clear natural swimming pool.",
    fullDesc:"Daranak Falls is arguably the most famous waterfall in Rizal Province. This picturesque cascade plunges approximately 20 meters into a wide, natural swimming pool with refreshingly cool and clear water. Surrounded by lush tropical forest, it's the perfect destination for a family picnic, a refreshing swim, or simply soaking in the beauty of nature. Nearby is the smaller but equally beautiful Batlag Falls.",
    activities:["Swimming","Picnicking","Photography","Family Outings","Short Hiking","Batlag Falls Side Trip"],
    bestTime:"March to June (for ideal water levels)",
    fee:"₱70 adults · ₱50 children (weekdays) · slightly higher on weekends",
    hours:"6:00 AM – 5:00 PM daily",
    tips:"Arrive early on weekends to avoid crowds. Life vests are available for rent. Bring your own food or try local carinderias near the entrance."
  },
  {
    id:4,
    name:"Mt. Daraitan",
    municipality:"Tanay",
    category:"Mountain",
    image:"images/daraitan.jpg",
    shortDesc:"A beloved hiking destination offering panoramic views of the Sierra Madre, the Tinipak River valley, and on clear days, Laguna de Bay.",
    fullDesc:"Mt. Daraitan is a popular climbing destination in Tanay, Rizal, standing at around 730 meters above sea level. The mountain offers several trails ranging from beginner-friendly to challenging routes. Summiting rewards trekkers with breathtaking 360-degree views of the Sierra Madre mountain range, the winding Tinipak River below, and on exceptionally clear days, the shimmering expanse of Laguna de Bay. Many visitors combine this hike with a visit to Tinipak River.",
    activities:["Mountain Hiking","Summit Viewing","Nature Photography","Bird Watching","Camping","Combined Tinipak River Trek"],
    bestTime:"November to April (dry season, clear skies)",
    fee:"₱50–₱100 registration + guide fee (~₱600–₱800/group)",
    hours:"Best to depart by 4:00–6:00 AM for sunrise summit",
    tips:"Hiring a local guide is strongly recommended. Bring at least 2 liters of water per person. Wear proper hiking shoes. A headlamp is essential for early morning starts. Check trail conditions before going."
  },
  {
    id:5,
    name:"Angono Petroglyphs",
    municipality:"Angono / Binangonan",
    category:"Historical Site",
    image:"images/angono.jpg",
    shortDesc:"The oldest known work of art in the Philippines — over 127 human and animal figures carved into a cave wall approximately 3,000 years ago.",
    fullDesc:"The Angono–Binangonan Petroglyphs are a National Cultural Treasure of the Philippines and are considered the oldest known artwork in the country. Declared as such in 1973, these prehistoric engravings of 127 human and animal figures were carved into a slanted rockwall of a shallow cave in the foothills of the Sierra Madre. They are believed to be approximately 3,000 years old, though some estimates place them even older. The site is jointly managed by the National Museum and the local government.",
    activities:["Cultural Heritage Tour","Photography","Guided History Tour","Research Visit","Archaeology Interest"],
    bestTime:"Year-round (best during dry season)",
    fee:"Free (National Museum managed; donation appreciated)",
    hours:"8:00 AM – 5:00 PM (Tue–Sun; closed Mon & holidays)",
    tips:"Join a guided tour to fully appreciate the historical significance. No touching the petroglyphs. Wear comfortable walking shoes. Combine with a visit to Angono's murals and art galleries."
  },
  {
    id:6,
    name:"Hinulugang Taktak",
    municipality:"Antipolo City",
    category:"Waterfall",
    image:"images/hinulugang.jpg",
    shortDesc:"A historically significant waterfall in Antipolo City, immortalized in Filipino folklore and literature, set within a peaceful forest park.",
    fullDesc:"Hinulugang Taktak (meaning 'fallen and dripped') is one of the most celebrated waterfalls in Rizal Province, located within a protected natural park in Antipolo City. The waterfall holds a special place in Filipino culture — it is said to be where the legendary fairy Mariang Makiling used to bathe, and it has been immortalized in the classic kundiman song 'Sa Ugoy ng Duyan.' The surrounding park offers a tranquil escape from city life.",
    activities:["Nature Walking","Photography","Picnicking","Cultural Heritage Appreciation","Bird Watching"],
    bestTime:"Rainy Season (August–October) for full flow; dry season for clearer water",
    fee:"₱30 adults · ₱15 children",
    hours:"7:00 AM – 5:00 PM daily",
    tips:"The park is well-maintained with pathways and facilities. Good for families with young children. Avoid swimming when water is murky after heavy rains. Nearby food stalls available."
  },
  {
    id:7,
    name:"Pinto Art Museum",
    municipality:"Antipolo City",
    category:"Art & Museum",
    image:"images/pinto-museum.jpg",
    shortDesc:"A stunning hilltop museum complex housing world-class contemporary Filipino art within a breathtaking Mediterranean-inspired garden setting.",
    fullDesc:"Pinto Art Museum is one of the most acclaimed private art museums in the Philippines, perched on a hill in God's Little Acre, Antipolo City. The museum showcases an extraordinary collection of contemporary Filipino art spread across six white-walled galleries, all connected by winding cobblestone pathways through lush, manicured gardens. Founded by Dr. Joven Cuanang, the museum's setting is as much a work of art as the masterpieces it houses, with cascading tropical plants, koi ponds, and stunning views of the surrounding hills.",
    activities:["Art Viewing","Photography","Garden Walking","Cultural Appreciation","Private Events","Art Education"],
    bestTime:"Year-round; weekdays less crowded",
    fee:"₱200 adults · ₱100 students/seniors",
    hours:"9:00 AM – 6:00 PM (Tue–Sun; closed Mon)",
    tips:"Spend at least 2–3 hours to fully appreciate the collection. Photography allowed in most areas. The garden and architecture alone are worth the visit. No food allowed inside galleries."
  },
  {
    id:8,
    name:"Our Lady of Peace Shrine",
    municipality:"Antipolo City",
    category:"Historical Site",
    image:"images/antipolo.jpeg",
    shortDesc:"The beloved home of Antipolo's miraculous image of Our Lady of Peace and Good Voyage — a centuries-old Marian shrine drawing millions of pilgrims annually.",
    fullDesc:"The Shrine of Our Lady of Peace and Good Voyage, also known as the Antipolo Cathedral, is one of the most significant religious sites in the Philippines. The image of Our Lady of Peace and Good Voyage — a black Madonna statue — has been venerated since the 17th century when it was brought from Mexico and became the patron of galleon trade voyages. Today, the shrine attracts millions of pilgrims, particularly during May and Holy Week. The church is also a registered historical landmark.",
    activities:["Religious Pilgrimage","Prayer & Mass","Cultural Tourism","Photography","Historical Tour"],
    bestTime:"May (Flores de Mayo/Santacruzan season) and Holy Week",
    fee:"Free admission (donations welcome)",
    hours:"Open daily; Mass schedule varies",
    tips:"Dress modestly when entering the church. May is the peak pilgrimage season with significant traffic. Visit on weekdays for a more peaceful experience. Suman and kakanin stalls nearby are a must-try."
  },
  {
    id:9,
    name:"Treasure Mountain",
    municipality:"Rodriguez (Montalban)",
    category:"Mountain",
    image:"images/treasure1.jpg",
    shortDesc:"A sunrise hiking destination beloved by Manila's outdoor community, offering spectacular panoramic views of the Marikina Valley and distant skyline.",
    fullDesc:"Treasure Mountain, nestled in Rodriguez (formerly Montalban), is one of the most popular hiking spots near Metro Manila. Its accessibility and moderate difficulty level make it perfect for beginners and experienced trekkers alike. The mountain is famously known for its sea of clouds during cool mornings and the stunning views of the Marikina Valley, surrounding mountains, and on exceptionally clear days, the Metro Manila skyline. Sunrise treks are especially popular here.",
    activities:["Sunrise Hiking","Photography","Sea of Clouds Viewing","Beginner Trekking","Bird Watching","Camping"],
    bestTime:"November to March (cool dry months, best for sea of clouds)",
    fee:"₱50–₱100 trail fee + guide fee recommended",
    hours:"Best accessed 2:00–4:00 AM for sunrise; day hikes until 3:00 PM",
    tips:"Depart by 3:00–4:00 AM to catch sunrise. A local guide is available and recommended. Bring warm clothes as mornings can be chilly. Trail takes 1.5–2.5 hours to summit."
  },
  {
    id:10,
    name:"Wawa Dam",
    municipality:"Rodriguez (Montalban)",
    category:"Dam & River",
    image:"images/wawadam1.jpg",
    shortDesc:"A majestic early 20th-century dam carved between towering limestone cliffs, forming a serene gorge and river canyon with rich history and biodiversity.",
    fullDesc:"Wawa Dam, completed in 1909 during the American colonial period, is a marvel of early engineering set within a dramatic gorge carved by the Marikina River between towering limestone cliffs. Once the primary water source for Manila, the dam now serves as a protected watershed. The surrounding Montalban Gorge is teeming with wildlife — particularly cave swiftlets — and is a stunning destination for kayaking, boat rides, and nature photography. The setting is genuinely awe-inspiring.",
    activities:["Boat Rides","Kayaking","Photography","Nature Walking","Bird Watching","Historical Appreciation","Spelunking (caves nearby)"],
    bestTime:"December to May (dry season, calmer river)",
    fee:"₱50 entrance + boat/kayak rental fees",
    hours:"6:00 AM – 5:00 PM daily",
    tips:"Boat tours available through the gorge. The limestone cliffs and cave swiftlets are spectacular. Wear sunscreen. Combine with Avilon Zoo and Treasure Mountain nearby for a full Rodriguez day trip."
  },
  {
    id:11,
    name:"Avilon Zoo",
    municipality:"Rodriguez (Montalban)",
    category:"Nature Park",
    image:"images/blanco-fam.jpg",
    shortDesc:"The Philippines' largest private zoological park, home to over 3,000 animals including rare and exotic species from across the globe.",
    fullDesc:"Avilon Zoo is the largest private zoo in the Philippines, sprawling across 4.5 hectares in Rodriguez, Rizal. It houses over 3,000 animals representing more than 500 species — including many rare, endangered, and exotic animals. Highlights include white lions, ocelots, Burmese pythons, wallabies, and a diverse collection of Philippine endemic species. The zoo is committed to wildlife conservation, education, and research. It's an excellent destination for families and wildlife enthusiasts.",
    activities:["Wildlife Viewing","Educational Tours","Animal Feeding","Photography","Family Outings","Conservation Learning"],
    bestTime:"Weekday mornings (less crowded, cooler temperatures)",
    fee:"₱500 adults · ₱300 children (12 and below)",
    hours:"8:00 AM – 5:00 PM daily",
    tips:"Arrive early for the best animal activity. Wear comfortable shoes — the zoo is large! Feeding programs for select animals available. Bring sunscreen and water. Allow 3–4 hours minimum."
  },
  {
    id:12,
    name:"Calinawan Cave",
    municipality:"Tanay",
    category:"Adventure",
    image:"images/bosoboso.jpg",
    shortDesc:"A thrilling spelunking adventure inside a massive cave system filled with impressive stalactites, stalagmites, and an underground river.",
    fullDesc:"Calinawan Cave is one of Rizal's most exciting adventure destinations — a vast cave system in Tanay that rewards brave explorers with magnificent stalactites, stalagmites, cave curtains, and an underground river. The cave is large enough to accommodate several chambers, and spelunking tours guide visitors through tight passages, wide caverns, and ancient rock formations. Local guide Ricky (a must-hire) has deep knowledge of the cave's geology and history. It's muddy, wet, and absolutely unforgettable.",
    activities:["Spelunking","Cave Exploration","Underground River Walk","Photography","Adventure Trekking","Geology Study"],
    bestTime:"Dry season (November–May); avoid rainy season when cave floods",
    fee:"₱100 entrance + mandatory guide fee (₱300–₱500/group)",
    hours:"7:00 AM – 4:00 PM daily (last entry 2:00 PM)",
    tips:"Wear clothes you don't mind getting muddy and wet. Bring a waterproof bag for valuables. A headlamp or flashlight is essential. Hiring the local guide is mandatory and worth every peso."
  }
];

const festivals = [
  {
    id:1,
    name:"Higantes Festival",
    location:"Angono, Rizal",
    month:"November (20–23)",
    image:"images/higantes.jpg",
    desc:"The Higantes (Giants) Festival is Angono's most iconic celebration — a spectacular event held in honor of the town's patron saint, San Clemente. Towering papier-mâché giants called 'higantes,' standing 10–12 feet tall, parade through the streets in a riotous, colorful procession. The tradition dates back to the Spanish colonial era when local fishermen created these giants as a form of protest against their landlords. Today, the festival is a jubilant celebration of Angono's artistic heritage, featuring street dancing, boat parades on Laguna de Bay, and the beloved 'water fight' that drenches spectators in good-natured chaos."
  },
  {
    id:2,
    name:"Lanzones Festival",
    location:"Tanay, Rizal",
    month:"October (usually 2nd or 3rd weekend)",
    image:"images/lanzones.jpg",
    desc:"Tanay's beloved Lanzones Festival celebrates the abundant harvest of the lanzones fruit — a sweet, aromatic tropical fruit for which Tanay is famous throughout the Philippines. During the festival, the streets come alive with colorful costumes imitating the lanzones fruit, street dancing, agricultural displays, and an enormous lanzones fruit market where locals sell freshly harvested bunches. The event also showcases Tanay's rural charm with cultural performances, food stalls featuring lanzones-infused delicacies, and a sense of community pride and gratitude for a bountiful harvest season."
  },
  {
    id:3,
    name:"Pahiyas-Inspired Harvest Festival",
    location:"Pililla & Various Municipalities",
    month:"May (Month of the Holy Cross)",
    image:"images/papahiyas.jpg",
    desc:"Echoing the famous Pahiyas Festival of neighboring Quezon Province, several municipalities in Rizal celebrate the May harvest season with vibrant house decorations made from local agricultural produce, colorful rice wafers (kiping), and creative arrangements of vegetables, fruits, and flowers. Homes compete for the most elaborate and artistic displays, turning entire streets into open-air galleries of folk art and harvest thanksgiving. The festival honors San Isidro Labrador, patron saint of farmers, and reflects the deep agricultural roots and creative spirit of Rizal's communities."
  },
  {
    id:4,
    name:"Kilosbayan Festival",
    location:"Antipolo City",
    month:"December",
    image:"images/kilosbayan.webp",
    desc:"Antipolo City's Kilosbayan Festival celebrates the city's identity as the 'Queen City of the East' through a month-long celebration of arts, culture, sports, and civic activities. The festival features art exhibitions showcasing works by Antipolo's thriving community of painters and sculptors, street food fairs highlighting local delicacies like suman (rice cake wrapped in coconut leaves) and kasoy (cashew products), cultural performances, beauty pageants, and community events. It is a proud celebration of Antipolo's growth as a major urban center while honoring its rich cultural traditions."
  }
];

const galleryImages = [
  { filename: 'masungi3.jpg', caption: 'Masungi Georeserve Limestone Karsts' },
  { filename: 'daranak1.jpg', caption: 'Daranak Falls Natural Pool' },
  { filename: 'tinipak.webp', caption: 'Turquoise Waters of Tinipak River' },
  { filename: 'daraitan.jpg', caption: 'Mt. Daraitan Summit View' },
  { filename: 'angono.jpg', caption: 'Angono - Town of Artists' },
  { filename: 'angono2.jpg', caption: 'Angono Murals & Street Art' },
  { filename: 'antipolo.jpeg', caption: 'Our Lady of Peace Shrine, Antipolo' },
  { filename: 'antipolo1.jpg', caption: 'Antipolo City Views' },
  { filename: 'pinto-museum.jpg', caption: 'Pinto Art Museum Gardens' },
  { filename: 'pinto2.jpg', caption: 'Pinto Art Museum Interior' },
  { filename: 'hinulugang.jpg', caption: 'Hinulugang Taktak Falls' },
  { filename: 'wawadam1.jpg', caption: 'Wawa Dam, Rodriguez' },
  { filename: 'wawadam3.jpg', caption: 'Wawa Dam Gorge' },
  { filename: 'treasure1.jpg', caption: 'Treasure Mountain Sunrise' },
  { filename: 'treasure2.jpg', caption: 'Treasure Mountain Sea of Clouds' },
  { filename: 'Rizal-waterfall.jpg', caption: 'Sierra Madre Waterfalls' },
  { filename: 'Rizal-nature.jpg', caption: 'Rizal Nature & Forests' },
  { filename: 'Rizal-heritage.jpg', caption: 'Rizal Heritage Sites' },
  { filename: 'Rizal-arts1.jpg', caption: 'Rizal Arts & Culture' },
  { filename: 'tinipak2.jpg', caption: 'Tinipak River Trekking' },
  { filename: 'daraitan3.jpg', caption: 'Daraitan Landscape' },
  { filename: 'daranak3.jpg', caption: 'Daranak Falls Area' },
  { filename: 'masungi.jpg', caption: 'Masungi Rope Bridges' },
  { filename: 'hinulugang3.jpg', caption: 'Hinulugang Scenic Views' },
  { filename: 'nemiranda2.png', caption: 'Flora of Rizal' },
  { filename: 'nemiranda3.jpg', caption: 'Rizal Biodiversity' },
  { filename: 'pillia1.jpg', caption: 'Pillia Farm' },
  { filename: 'pillia2.jpg', caption: 'Pillia Scenic Route' },
  { filename: 'payaran2.jpg', caption: 'Payaran Area' },
  { filename: 'payaran3.jpg', caption: 'Payaran Views' },
  { filename: 'blanco-fam.jpg', caption: 'Rizal Community' },
  { filename: 'blanco-fam1.jpg', caption: 'Local Culture' },
  { filename: 'bosoboso.jpg', caption: 'Bosoboso River' },
  { filename: 'bosoboso1.jpg', caption: 'Bosoboso Landscape' },
  { filename: 'botong1.JPG', caption: 'Botong Francisco Heritage' },
  { filename: 'botong2.jpg', caption: 'Botong District' },
  { filename: 'stjoseph.jpg', caption: 'Saint Joseph Church' },
  { filename: 'stjoseph2.jpg', caption: 'St Joseph Heritage Site' },
  { filename: 'regina.JPG', caption: 'Regina Landscapes' },
  { filename: 'regina1.jpg', caption: 'Regina Flora' },
  { filename: 'indexflower.jpg', caption: 'Rizal Flowers & Flora' },
];

/* ─── STATE ─── */
let currentFilter = "All";
let currentSearch = "";
let lightboxIndex = 0;

/* ─── DESTINATION RENDERING ─── */
function getCategoryEmoji(cat){
  const map = {
    "Adventure":"🧗","Waterfall":"💧","Mountain":"⛰️",
    "Historical Site":"🏛️","Nature Park":"🌿","Art & Museum":"🎨","Dam & River":"🏞️"
  };
  return map[cat] || "📍";
}

function renderDestinations(){
  const grid = document.getElementById("destGrid");
  const countEl = document.getElementById("resultsCount");
  const search = currentSearch.toLowerCase().trim();
  const filter = currentFilter;

  const filtered = destinations.filter(d => {
    const matchCat = filter === "All" || d.category === filter;
    const matchSearch = !search ||
      d.name.toLowerCase().includes(search) ||
      d.municipality.toLowerCase().includes(search) ||
      d.category.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  countEl.textContent = filtered.length === destinations.length
    ? `Showing all ${destinations.length} destinations`
    : `Showing ${filtered.length} of ${destinations.length} destinations`;

  if(filtered.length === 0){
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <h3>No destinations found</h3>
        <p>Try a different search term or category filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <div class="dest-card reveal">
      <div class="dest-card-img">
        <img src="${d.image}" alt="${d.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E'">
        <div class="dest-category-badge">${getCategoryEmoji(d.category)} ${d.category}</div>
      </div>
      <div class="dest-card-body">
        <div class="dest-card-loc">${d.municipality}</div>
        <div class="dest-card-name">${d.name}</div>
        <div class="dest-card-desc">${d.shortDesc}</div>
        <div class="dest-card-meta">
          <div class="meta-item"> <span>${d.hours.split('(')[0].trim()}</span></div>
        </div>
        <div class="dest-card-footer">
          <div class="dest-card-fee"> ${d.fee.split('·')[0].trim()}</div>
          <button class="view-details-btn" onclick="openModal(${d.id})">View Details →</button>
        </div>
      </div>
    </div>
  `).join("");

  // Re-apply reveal observer to new cards
  observeReveal();
}

/* ─── SEARCH & FILTER ─── */
function handleSearch(){
  currentSearch = document.getElementById("searchInput").value;
  renderDestinations();
}

function setFilter(btn, cat){
  currentFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderDestinations();
}

/* ─── MODAL ─── */
function openModal(id){
  const d = destinations.find(x => x.id === id);
  if(!d) return;
  document.getElementById("modalImg").src = d.image;
  document.getElementById("modalImg").alt = d.name;
  document.getElementById("modalCat").textContent = `${getCategoryEmoji(d.category)} ${d.category}`;
  document.getElementById("modalName").textContent = d.name;
  document.getElementById("modalLoc").querySelector("span").textContent = d.municipality;
  document.getElementById("modalDesc").textContent = d.fullDesc;
  document.getElementById("modalHours").textContent = d.hours;
  document.getElementById("modalFee").textContent = d.fee;
  document.getElementById("modalBestTime").textContent = d.bestTime;
  document.getElementById("modalMuni").textContent = d.municipality;
  document.getElementById("modalActivities").innerHTML = d.activities.map(a =>
    `<span class="activity-tag">${a}</span>`
  ).join("");
  document.getElementById("modalTips").textContent = d.tips;
  document.getElementById("destModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  document.getElementById("destModal").classList.remove("open");
  document.body.style.overflow = "";
}

function handleModalOutsideClick(e){
  if(e.target === document.getElementById("destModal")) closeModal();
}

/* ─── FESTIVALS RENDERING ─── */
function renderFestivals(){
  const list = document.getElementById("festivalList");
  list.innerHTML = festivals.map((f,i) => `
    <div class="festival-card reveal">
      <img class="festival-img" src="${f.image}" alt="${f.name}" loading="lazy">
      <div class="festival-body">
        <div class="festival-tag"> Festival & Culture</div>
        <div class="festival-name">${f.name}</div>
        <div class="festival-meta">
          <span>📍 ${f.location}</span>
          <span>📅 ${f.month}</span>
        </div>
        <p class="festival-desc">${f.desc}</p>
      </div>
    </div>
  `).join("");
  observeReveal();
}

/* ─── GALLERY RENDERING ─── */
function renderGallery(){
  const grid = document.getElementById("galleryGrid");
  const imagePath = 'images/'; // Path to your images folder
  
  grid.innerHTML = galleryImages.map((g,i) => {
    // Alternate heights for masonry variety
    const heights = [300,220,260,200,320,240,280,200,300,250];
    const h = heights[i % heights.length];
    return `
      <div class="gallery-item" onclick="openLightbox(${i})">
        <img 
          src="${imagePath}${g.filename}" 
          alt="${g.caption}" 
          loading="lazy"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22${h}%22%3E%3Crect fill=%22%23ddd%22 width=%22500%22 height=%22${h}%22/%3E%3C/svg%3E'"
        >
        <div class="gallery-overlay">
          <div class="gal-caption">${g.caption}</div>
        </div>
      </div>`;
  }).join("");
}

/* ─── LIGHTBOX ─── */
function openLightbox(idx){
  lightboxIndex = idx;
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function lightboxNav(dir){
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

function updateLightbox(){
  const imagePath = 'images/';
  const g = galleryImages[lightboxIndex];
  document.getElementById("lightboxImg").src = `${imagePath}${g.filename}`;
  document.getElementById("lightboxCaption").textContent = g.caption;
  document.getElementById("lightboxCounter").textContent = `${lightboxIndex+1} / ${galleryImages.length}`;
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", e => {
  if(!document.getElementById("lightbox").classList.contains("open")) return;
  if(e.key === "ArrowRight") lightboxNav(1);
  if(e.key === "ArrowLeft") lightboxNav(-1);
  if(e.key === "Escape") closeLightbox();
});

document.getElementById("lightbox").addEventListener("click", function(e){
  if(e.target === this) closeLightbox();
});

/* ─── INQUIRY FORM POPULATION ─── */
function populateDestSelect(){
  const sel = document.getElementById("fdest");
  destinations.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = `${d.name} — ${d.municipality}`;
    sel.appendChild(opt);
  });
}

/* ─── FORM VALIDATION ─── */
function setError(groupId, show){
  const el = document.getElementById(groupId);
  if(show) el.classList.add("has-error");
  else el.classList.remove("has-error");
}

function submitForm(){
  let valid = true;

  const name = document.getElementById("fname").value.trim();
  setError("fg-name", !name);
  if(!name) valid = false;

  const email = document.getElementById("femail").value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  setError("fg-email", !emailOk);
  if(!emailOk) valid = false;

  const phone = document.getElementById("fphone").value.trim();
  const phoneOk = /^[\d\s\-+()+]{7,15}$/.test(phone);
  setError("fg-phone", !phoneOk);
  if(!phoneOk) valid = false;

  const dest = document.getElementById("fdest").value;
  setError("fg-dest", !dest);
  if(!dest) valid = false;

  const date = document.getElementById("fdate").value;
  setError("fg-date", !date);
  if(!date) valid = false;

  const visitors = parseInt(document.getElementById("fvisitors").value);
  setError("fg-visitors", !(visitors >= 1));
  if(!(visitors >= 1)) valid = false;

  const msg = document.getElementById("fmessage").value.trim();
  setError("fg-message", !msg);
  if(!msg) valid = false;

  if(valid){
    document.getElementById("inquiryForm").style.display = "none";
    document.getElementById("formSuccess").style.display = "block";
  }
}

/* ─── SCROLL REVEAL ─── */
function observeReveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => io.observe(el));
}

/* ─── NAVBAR SCROLL ─── */
window.addEventListener("scroll", () => {
  const nb = document.getElementById("navbar");
  if(window.scrollY > 50) nb.classList.add("scrolled");
  else nb.classList.remove("scrolled");
});

/* ─── MOBILE NAV ─── */
function openMobileNav(){ document.getElementById("mobileNav").classList.add("open"); document.body.style.overflow="hidden"; }
function closeMobileNav(){ document.getElementById("mobileNav").classList.remove("open"); document.body.style.overflow=""; }

/* ─── SET MIN DATE FOR FORM ─── */
function setMinDate(){
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("fdate").min = today;
}

/* ─── HERO BG ─── */
function loadHeroBg(){
  const bg = document.getElementById("heroBg");
  const img = new Image();
  img.onload = () => {
    bg.style.backgroundImage = `url('${img.src}')`;
    bg.classList.add("loaded");
  };
  img.onerror = () => {
    // Fallback if image fails
    bg.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };
  img.src = "images/Rizal-waterfall.jpg"; // Use one of your actual images!
}

/* ─── INIT ─── */
document.addEventListener("DOMContentLoaded", () => {
  loadHeroBg();
  renderDestinations();
  renderFestivals();
  renderGallery();
  populateDestSelect();
  setMinDate();
  observeReveal();
});