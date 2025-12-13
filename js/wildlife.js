document.addEventListener("DOMContentLoaded", () => {
  const gridBtn = document.getElementById("gridViewBtn");
  const mapBtn = document.getElementById("mapViewBtn");
  const sightingsContainer = document.getElementById("sightings");
  const mapContainer = document.getElementById("map-container");

  // Location coordinates for each sighting
  const locationCoords = {
    "Tulum, Mexico": [20.2114, -87.4654],
    "Chicago, IL": [41.8781, -87.6298],
    "Tuscon, AZ": [32.2226, -110.9747],
    "Jackson, WY": [43.4799, -110.7624],
    "Costa Rica": [9.7489, -83.7534],
    "Yellowstone, WY": [44.4280, -110.5885],
    "Amsterdam, Netherlands": [52.3676, 4.9041],
    "AuSable, MI": [44.4106, -83.3330],
    "Green Bay, WI": [44.5133, -88.0133],
    "Tucson, AZ": [32.2226, -110.9747],
    "Berlin, Germany": [52.5200, 13.4050],
    "Barcelona, Spain": [41.3851, 2.1734]
  };

  // Example data for each sighting
  const sightingData = {
    "Ferruginous Pygmy Owl": {
      scientific: "Glaucidium brasilianum",
      description: "Found these diurnal cuties while on a morning walk in Tulum, Mexico. Quite the personality on these two!",
      img: "../photos/ferriginouspygmyowl.png",
      location: "Tulum, Mexico",
      coords: [20.282188221426793, -87.38036160619276]
    },
    "Snowy Owl": {
      scientific: "Bubo scandiacus",
      description: "Caught the famous Montrose snowy owls before work one day! Sorry for the horrendous photo!",
      img: "../photos/snowyowl.png",
      location: "Chicago, IL",
      coords: [41.968818, -87.631523]
    },
    "Greater Roadrunner": {
      scientific: "Geococcyx californianus",
      description: "This guy was running around a canyon in Tuscon, seemingly unbothered by human presence.",
      img: "../photos/roadrunner.png",
      location: "Tuscon, AZ",
      coords: [32.322436761616935, -110.8096851131288]
    },
    "Moose": {
      scientific: "Alces alces",
      description: "Spotted outside a gas station in Jackson, WY. Holy smokes are they huge...",
      img: "../photos/moose.png",
      location: "Jackson, WY",
      coords: [43.585527531177604, -110.82646752477555]
    },
    "Greater White-fronted Goose": {
      scientific: "Anser albifrons",
      description: "I saw this goose in the parking lot on the way into work at the Lincoln Park Zoo. Didn't have to try too hard for this guy!",
      img: "../photos/greaterwhitefrontedgoose.png",
      location: "Chicago, IL",
      coords: [41.92361574439163, -87.63247185213538]
    },
    "Common Potoo": {
      scientific: "Nyctibius griseus",
      description: "Saw this guy on the side of the road in rural Costa Rica. Hard to not mistake it for just another fence post.",
      img: "../photos/potoo.png",
      location: "Costa Rica",
      coords: [9.480850581141752, -84.11876581338923]
    },
    "Lesson's Motmot": {
      scientific: "Momotus lessonii",
      description: "Found this magnificent bird in some jungle near where we were staying in Costa Rica. One of my favorite bird sightings of all time.",
      img: "../photos/motmot.png",
      location: "Costa Rica",
      coords: [9.422690133743304, -84.16006251304852]
    },
    "American Bison": {
      scientific: "Bison bison",
      description: "Found this massive guy just outside the ranger station in Yellowstone National Park. Seems to be wearing some sort of collar?",
      img: "../photos/bison.png",
      location: "Yellowstone, WY",
      coords: [45.02986083828517, -110.70528993232945]
    },
    "Elk": {
      scientific: "Cervus canadensis",
      description: "Similar to the Bison, this guy was found right outside the visitor's center. Didn't seem to phased by people or cars.",
      img: "../photos/elk.png",
      location: "Yellowstone, WY",
      coords: [44.97467988528676, -110.70002956648177]
    },
    "American Bittern": {
      scientific: "Botaurus lentiginosus",
      description: "Finally got eyes on this secretive marsh bird while leading a volunteer group at Lincoln Park Zoo's Nature Boardwalk. Shout out to the photographer who showed it to us!",
      img: "../photos/bittern.png",
      location: "Chicago, IL",
      coords: [41.916779059431924, -87.63126429133563]
    },
    "Egyptian Goose": {
      scientific: "Alopochen aegyptiaca",
      description: "Saw these two in Vondelpark while on a European trip with some friends. Also I spotted these guys on my birthday!",
      img: "../photos/egyptiangeese.png",
      location: "Amsterdam, Netherlands",
      coords: [52.35763943213383, 4.866430108374714]
    },
    "Long-eared Owl": {
      scientific: "Asio otus",
      description: "Found this owl roosting in some bramble at Montrose. Those ears really do a great job of breaking up the body shape. Sorry for the bad picture!",
      img: "../photos/longearedowl.png",
      location: "Chicago, IL",
      coords: [41.963746902298034, -87.6341576060426]
    },
    "Pileated Woodpecker": {
      scientific: "Dryocopus pileatus",
      description: "My first pileated sighting since I was a young boy. Saw this guy drumming away at an fallen tree. Lots of good bugs for sure!",
      img: "../photos/pilleated.png",
      location: "AuSable, MI",
      coords: [44.66833971676804, -84.52465991133202]
    },
    "Mexican Free-tailed Bat": {
      scientific: "Tadarida brasiliensis",
      description: "Found this guy flipped on his back in the sand. Flipped him over and got him to crawl up onto some rock. Hopefully he was able to take back off!",
      img: "../photos/mexicanfreetailed.png",
      location: "Tulum, Mexico",
      coords: [20.28390320326743, -87.37966048102233]
    },
    "Black-billed Cuckoo": {
      scientific: "Coccyzus erythropthalmus",
      description: "My first Cuckoo sighting! Caught this one at Fonferek's Glen near Green Bay, WI.",
      img: "../photos/cuckoo.png",
      location: "Green Bay, WI",
      coords: [44.42592574755989, -87.93892622280761]
    },
    "Acorn Woodpecker": {
      scientific: "Melanerpes formicivorus",
      description: "Caught one of these amazing woodpeckers on my trip to Arizona. Definitely one of my favorites!",
      img: "../photos/acornwoodpecker.png",
      location: "Tucson, AZ",
      coords: [31.725155932570654, -110.88020645793905]
    },
    "Elegant Trogon": {
      scientific: "Trogon elegans",
      description: "Saw this Trogan at Sabine Canyon outside of Tuscon. Highly recommended spot for birders if you are in AZ!",
      img: "../photos/trojon.png",
      location: "Tucson, AZ",
      coords: [31.722365138886246, -110.87997427528668]
    },
    "Cliff Swallow": {
      scientific: "Petrochelidon pyrrhonota",
      description: "Always fun to see these rare visitors building nests over at Lincoln Park Zoo. Check underneath the bridge at Nature Boardwalk during summer to find these guys!",
      img: "../photos/cliffswallows.png",
      location: "Chicago, IL",
      coords: [41.918194580898586, -87.6329672597927]
    },
    "Mandarin Duck": {
      scientific: "Aix galericulata",
      description: "Saw this guy floating down a river in Berlin. Spectactular colors, remind me of the Wood Duck in America.",
      img: "../photos/mandarinduck.png",
      location: "Berlin, Germany",
      coords: [52.503593487797346, 13.442390567157384]
    },
    "Eurasian Hoopoe": {
      scientific: "Upupa epops",
      description: "Super cool bird with an awesome hairstyle. Found probing the ground for insects near a park in Barcelona.",
      img: "../photos/hoopoe.png",
      location: "Barcelona, Spain",
      coords: [41.42242547375266, 2.2206889287541087]
    }
  };

  // ---- Sort by date descending ----
  const sightings = Array.from(sightingsContainer.children);
  sightings.sort((a, b) => {
    return new Date(b.dataset.date) - new Date(a.dataset.date);
  });
  sightings.forEach(sighting => sightingsContainer.appendChild(sighting));

  // ---- Set initial view to grid ----
  sightingsContainer.className = "grid-view";
  if (mapContainer) {
    mapContainer.style.display = "none";
  }
  gridBtn.classList.add("active");
  mapBtn.classList.remove("active");

  // ---- Toggle buttons ----
  gridBtn.addEventListener("click", () => {
    // Show grid, hide map
    sightingsContainer.className = "grid-view";
    sightingsContainer.style.display = ""; // Remove inline display style
    if (mapContainer) {
      mapContainer.style.display = "none";
    }
    
    gridBtn.classList.add("active");
    mapBtn.classList.remove("active");
  });

  mapBtn.addEventListener("click", () => {
    // Hide grid, show map
    sightingsContainer.className = "";
    sightingsContainer.style.display = "none";
    
    if (mapContainer) {
      mapContainer.style.display = "block";
    }
    
    mapBtn.classList.add("active");
    gridBtn.classList.remove("active");

    // Initialize map only once
    if (!window.myMap && mapContainer) {
      window.myMap = L.map('map').setView([41.8781, -87.6298], 3);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(window.myMap);
      const greenPin = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


// Add markers for all sightings
Object.entries(sightingData).forEach(([species, data]) => {
  if (data.coords) {
const marker = L.marker(data.coords, {
  icon: greenPin
}).addTo(window.myMap);


marker.bindPopup(`<b>${species}</b><br>${data.location}`);

  }
});
    } else if (window.myMap) {
      // If map already exists, invalidate size to fix display issues
      setTimeout(() => {
        window.myMap.invalidateSize();
      }, 100);
    }
  });

  // Select modal elements
  const modal = document.getElementById("sightingModal");
  const modalTitle = document.getElementById("modal-title");
  const modalScientific = document.getElementById("modal-scientific-name");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");

  // Open modal on card click
  document.querySelectorAll(".sighting").forEach(card => {
    card.addEventListener("click", () => {
      const speciesName = card.querySelector(".info-text").innerText;
      const data = sightingData[speciesName];

      if (data) {
        modalTitle.innerText = speciesName;
        modalScientific.innerHTML = `<em>${data.scientific}</em>`;
        modalImg.src = data.img;
        modalDesc.innerText = data.description;
        modal.style.display = "block";
      }
    });
  });

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Click outside modal to close
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Zoom image on click
  if (modalImg) {
    modalImg.addEventListener("click", () => {
      modalImg.classList.toggle("zoomed");
    });
  }
});