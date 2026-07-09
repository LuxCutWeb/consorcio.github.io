/* ==========================================================================
   Core Enterprise Application Engine - Corporación Technology Group
   Single Page Architecture Core Data Matrix & Functional Framework
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Enterprise Mock Database Matrix ---
    const BRANDS_DATA = [
        { id: 'b1', name: 'Eltiodeli', desc: 'Dispositivos de alta ingeniería y soluciones de movilidad robustas.', tag: 'Movilidad Avanzada', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80' },
        { id: 'b2', name: 'Yourtech Móviles', desc: 'Hardware enfocado en productividad ejecutiva y ecosistemas de vanguardia.', tag: 'Productividad', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80' },
        { id: 'b3', name: 'Deliblu Móviles', desc: 'Smartphones y gadgets hiperconectados para la generación digital global.', tag: 'Conectividad', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80' },
        { id: 'b4', name: 'iCaracas', desc: 'Especialistas certificados en ecosistemas premium de Apple e integraciones de alta gama.', tag: 'Premium Apple', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80' },
        { id: 'b5', name: 'Mayju Móviles', desc: 'Hardware disruptivo y wearables con sensores biométricos de precisión.', tag: 'Wearables Elite', img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80' },
        { id: 'b6', name: 'Mayjea Móviles', desc: 'Ingeniería móvil equilibrada con foco en autonomía energética extrema.', tag: 'Autonomía', img: 'https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80' },
        { id: 'b7', name: 'ElectronicToyStore Gamer', desc: 'Estaciones de batalla, consolas de última generación y periféricos de grado eSports.', tag: 'Gaming eSports', img: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=600&q=80' }
    ];

    const PRODUCTS_DATA = [
        {
            id: 'p1',
            name: 'iPhone 15 Pro Max Titanium Titanium',
            brand: 'iCaracas',
            category: 'iPhone',
            price: 1399,
            oldPrice: 1599,
            discount: 12,
            rating: 4.9,
            reviews: [
                { user: 'Alejandro M.', score: 5, comment: 'Impecable construcción, el titanio se siente sumamente premium.' },
                { user: 'Valeria C.', score: 4.8, comment: 'Cámara espectacular para creadores de contenido.' }
            ],
            sales: 420,
            stock: 14,
            color: 'Titanio Oscuro',
            ram: '8 GB',
            storage: '256 GB',
            specs: { 'Procesador': 'Apple A17 Pro', 'Pantalla': 'Super Retina XDR 6.7"', 'Batería': '4441 mAh' },
            features: ['Grabación ProRes', 'Botón de Acción', 'Ray Tracing acelerado por hardware'],
            images: [
                'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1695048133230-43efd3663ccc?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p2',
            name: 'Samsung Galaxy S24 Ultra Elite',
            brand: 'Yourtech Móviles',
            category: 'Samsung',
            price: 1249,
            oldPrice: 1399,
            discount: 10,
            rating: 4.8,
            reviews: [
                { user: 'Carlos G.', score: 5, comment: 'La integración con Inteligencia Artificial es sumamente útil para traducción laboral.' }
            ],
            sales: 310,
            stock: 8,
            color: 'Gris Titanio',
            ram: '12 GB',
            storage: '512 GB',
            specs: { 'Procesador': 'Snapdragon 8 Gen 3', 'Pantalla': 'Dynamic AMOLED 2X 6.8"', 'S-Pen': 'Incluido' },
            features: ['Galaxy AI integrada', 'Zoom Óptico 10x', 'Estructura blindada de titanio'],
            images: [
                'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p3',
            name: 'Xiaomi 14 Ultra Cinematic Edition',
            brand: 'Deliblu Móviles',
            category: 'Xiaomi',
            price: 999,
            oldPrice: 1150,
            discount: 13,
            rating: 4.7,
            reviews: [],
            sales: 185,
            stock: 3,
            color: 'Negro Cerámica',
            ram: '16 GB',
            storage: '512 GB',
            specs: { 'Lente': 'Leica Summilux', 'Sensor': '1 pulgada principal', 'Carga': '90W HyperCharge' },
            features: ['Fotografía profesional Leica', 'Aperatura variable física', 'Pantalla All-Around Liquid'],
            images: [
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p4',
            name: 'Consola PlayStation 5 Slim 1TB',
            brand: 'ElectronicToyStore Gamer',
            category: 'PlayStation',
            price: 499,
            oldPrice: 549,
            discount: 9,
            rating: 4.9,
            reviews: [{ user: 'Marcos R.', score: 5, comment: 'Súper silenciosa y el tamaño reducido es excelente.' }],
            sales: 890,
            stock: 25,
            color: 'Blanco Glaciar',
            ram: '16 GB GDDR6',
            storage: '1 TB SSD',
            specs: { 'Arquitectura': 'AMD RDNA 2', 'Resolución': '4K 120Hz', 'Lector': 'Removible' },
            features: ['Retrocompatibilidad total', 'Audio 3D Tempest', 'Gatillos adaptativos DualSense'],
            images: [
                'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p5',
            name: 'ROG Strix Scar 18 Aerospace',
            brand: 'ElectronicToyStore Gamer',
            category: 'Laptops',
            price: 2899,
            oldPrice: 3200,
            discount: 9,
            rating: 5.0,
            reviews: [],
            sales: 64,
            stock: 4,
            color: 'Carbono Stealth',
            ram: '32 GB',
            storage: '2 TB SSD',
            specs: { 'CPU': 'Intel Core i9 14900HX', 'GPU': 'RTX 4090 Mobile', 'Pantalla': 'Mini LED 18" 240Hz' },
            features: ['Metal Líquido Conductonaut', 'Teclado RGB por tecla', 'Enfriamiento Tri-Fan'],
            images: [
                'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p6',
            name: 'Motorola Edge 50 Ultra Pro',
            brand: 'Mayjea Móviles',
            category: 'Motorola',
            price: 799,
            oldPrice: 899,
            discount: 11,
            rating: 4.6,
            reviews: [],
            sales: 145,
            stock: 12,
            color: 'Madera Nórdica',
            ram: '12 GB',
            storage: '512 GB',
            specs: { 'Material': 'Acabado Madera Real', 'Carga': '125W TurboPower', 'Zoom': 'Periscopio 3x' },
            features: ['Validación de color Pantone', 'Protección IP68', 'Ecosistema Ready For'],
            images: [
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p7',
            name: 'Mayju Chrono Watch S9',
            brand: 'Mayju Móviles',
            category: 'Smartwatch',
            price: 349,
            oldPrice: 399,
            discount: 12,
            rating: 4.7,
            reviews: [],
            sales: 240,
            stock: 19,
            color: 'Negro Mate',
            ram: '2 GB',
            storage: '32 GB',
            specs: { 'Sensor': 'ECG + SpO2 + Presión', 'Autonomía': '5 Días Continuos', 'Pantalla': 'AMOLED 1.43"' },
            features: ['Monitoreo cardíaco grado médico', 'GPS de doble banda', 'Caja de titanio de grado aeroespacial'],
            images: [
                'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            id: 'p8',
            name: 'Eltiodeli Sound-Master ANC X',
            brand: 'Eltiodeli',
            category: 'Audífonos',
            price: 249,
            oldPrice: 299,
            discount: 16,
            rating: 4.5,
            reviews: [],
            sales: 320,
            stock: 22,
            color: 'Plata Satinado',
            ram: 'N/A',
            storage: 'N/A',
            specs: { 'Cancelación': 'Híbrida Activa 45dB', 'Driver': 'Hi-Res Berilio 40mm', 'Codecs': 'LDAC, aptX HD' },
            features: ['Audio espacial de 360 grados', 'Estructura plegable premium', 'Batería de 60 horas de duración'],
            images: [
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
            ]
        }
    ];

    // --- State Management Engine ---
    let cart = JSON.parse(localStorage.getItem('ctg_cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('ctg_favorites')) || [];
    let activeFilters = { brand: [], category: [], ram: [], storage: [], maxPrice: 3000 };
    let currentSort = 'default';

    // --- Operational Elements Query Selectors ---
    const productsContainer = document.getElementById('products-display-container');
    const brandsContainer = document.getElementById('brands-display-container');
    const categoriesShowcase = document.getElementById('categories-showcase-container');
    const cartCount = document.getElementById('cart-count');
    const favCount = document.getElementById('fav-count');
    const globalSearch = document.getElementById('global-search');
    const searchDropdown = document.getElementById('search-dropdown');
    const priceRange = document.getElementById('price-range');
    const priceRangeValue = document.getElementById('price-range-value');
    const sortSelect = document.getElementById('sort-select');
    const emptyCatalogState = document.getElementById('empty-catalog-state');
    const filteredCountText = document.getElementById('filtered-count');
    const totalCountText = document.getElementById('total-count');

    // --- Component Drawers Handling ---
    function setupDrawer(triggerId, drawerId, closeId) {
        const trigger = document.getElementById(triggerId);
        const drawer = document.getElementById(drawerId);
        const close = document.getElementById(closeId);
        const overlay = drawer ? drawer.querySelector('.drawer-overlay') : null;

        if (trigger && drawer && close) {
            trigger.addEventListener('click', () => drawer.classList.add('open'));
            close.addEventListener('click', () => drawer.classList.remove('open'));
            if (overlay) overlay.addEventListener('click', () => drawer.classList.remove('open'));
        }
    }
    setupDrawer('cart-trigger', 'cart-drawer', 'close-cart');
    setupDrawer('favorites-trigger', 'favorites-drawer', 'close-favorites');
    setupDrawer('account-trigger', 'account-drawer', 'close-account');

    // --- Core View Generators & Renderers ---

    // Render Portfolio Brands Segment Cards
    function renderBrands() {
        if (!brandsContainer) return;
        brandsContainer.innerHTML = BRANDS_DATA.map(brand => `
            <div class="brand-card glassmorphism" data-brand-name="${brand.name}">
                <div class="brand-logo-badge">${brand.tag}</div>
                <div class="brand-image-wrapper">
                    <img src="${brand.img}" alt="${brand.name}" loading="lazy">
                </div>
                <div class="brand-card-overlay">
                    <h3>${brand.name}</h3>
                    <p>${brand.desc}</p>
                    <button class="btn btn-primary btn-sm btn-filter-brand-action">Ver productos <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `).join('');

        // Dynamic Brand Selection Interactivity
        document.querySelectorAll('.btn-filter-brand-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = e.target.closest('.brand-card');
                const brandName = card.dataset.brandName;
                resetAllFiltersState();
                activeFilters.brand.push(brandName);
                syncFiltersCheckboxesUI();
                executeFilteringEngine();
                scrollToTargetSection('marketplace-section');
            });
        });
    }

    // Render Interactive Filter Sidepanel Architecture
    function renderFilterSidebarOptions() {
        const categories = [...new Set(PRODUCTS_DATA.map(p => p.category))];
        const brands = [...new Set(PRODUCTS_DATA.map(p => p.brand))];
        const rams = [...new Set(PRODUCTS_DATA.map(p => p.ram))].filter(r => r !== 'N/A');
        const storages = [...new Set(PRODUCTS_DATA.map(p => p.storage))].filter(s => s !== 'N/A');

        document.getElementById('filter-category-list').innerHTML = categories.map(cat => `
            <label class="checkbox-label">
                <input type="checkbox" value="${cat}" data-filter="category"> ${cat}
            </label>
        `).join('');

        document.getElementById('filter-brand-list').innerHTML = brands.map(b => `
            <label class="checkbox-label">
                <input type="checkbox" value="${b}" data-filter="brand"> ${b}
            </label>
        `).join('');

        document.getElementById('filter-ram-list').innerHTML = rams.map(r => `
            <label class="checkbox-label">
                <input type="checkbox" value="${r}" data-filter="ram"> ${r}
            </label>
        `).join('');

        document.getElementById('filter-storage-list').innerHTML = storages.map(s => `
            <label class="checkbox-label">
                <input type="checkbox" value="${s}" data-filter="storage"> ${s}
            </label>
        `).join('');

        // Event Attachment for Live Filters
        document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(chk => {
            chk.addEventListener('change', (e) => {
                const type = e.target.dataset.filter;
                const value = e.target.value;
                if (e.target.checked) {
                    activeFilters[type].push(value);
                } else {
                    activeFilters[type] = activeFilters[type].filter(item => item !== value);
                }
                executeFilteringEngine();
            });
        });
    }

    // Render Product Grid Architecture Matrix
    function renderProductsGrid(productsToRender) {
        if (!productsContainer) return;
        totalCountText.textContent = PRODUCTS_DATA.length;
        filteredCountText.textContent = productsToRender.length;

        if (productsToRender.length === 0) {
            productsContainer.innerHTML = '';
            emptyCatalogState.classList.remove('hidden');
            return;
        }
        emptyCatalogState.classList.add('hidden');

        productsContainer.innerHTML = productsToRender.map(product => {
            const isFav = favorites.includes(product.id) ? 'active' : '';
            return `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-card-badge">-${product.discount}%</div>
                    <div class="product-card-fav ${isFav}"><i class="fas fa-heart"></i></div>
                    <div class="product-image-box">
                        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-meta">
                        <span class="brand-label">${product.brand}</span>
                        <h4>${product.name}</h4>
                        <div class="product-rating">
                            <i class="fas fa-star"></i> <span>${product.rating} (${product.sales} ventas)</span>
                        </div>
                        <div class="product-stock-sales">
                            <span class="stock-status ${product.stock <= 5 ? 'low' : ''}">
                                ${product.stock <= 5 ? `¡Solo ${product.stock} unidades!` : `Stock disponible`}
                            </span>
                        </div>
                        <div class="product-price-row">
                            <span class="price">$${product.price}</span>
                            <span class="old-price">$${product.oldPrice}</span>
                            <span class="discount">Ahorra $${product.oldPrice - product.price}</span>
                        </div>
                    </div>
                    <div class="product-card-actions">
                        <button class="btn btn-secondary btn-sm btn-quick-view"><i class="far fa-eye"></i></button>
                        <button class="btn btn-primary btn-sm btn-add-cart"><i class="fas fa-shopping-bag"></i> Agregar</button>
                    </div>
                </div>
            `;
        }).join('');

        attachProductCardEventListeners();
    }

    // Connect Product Actions Event Hooks
    function attachProductCardEventListeners() {
        document.querySelectorAll('.product-card').forEach(card => {
            const productId = card.dataset.id;

            card.querySelector('.btn-quick-view').addEventListener('click', () => openProductDetailModal(productId));
            card.querySelector('h4').addEventListener('click', () => openProductDetailModal(productId));
            card.querySelector('.product-image-box').addEventListener('click', () => openProductDetailModal(productId));

            card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
                e.stopPropagation();
                addProductToCartEngine(productId);
            });

            card.querySelector('.product-card-fav').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleProductFavoriteEngine(productId, e.currentTarget);
            });
        });
    }

    // Render Categorization Strategy Box System
    function renderCategoriesShowcase() {
        if (!categoriesShowcase) return;
        const layoutIcons = {
            'iPhone': 'fab fa-apple', 'Samsung': 'fas fa-mobile-android', 'Xiaomi': 'fas fa-bolt',
            'Laptops': 'fas fa-laptop-code', 'Gaming': 'fas fa-gamepad', 'Smartwatch': 'fas fa-watch-fitness',
            'Audífonos': 'fas fa-headphones-alt', 'PlayStation': 'fab fa-playstation', 'Motorola': 'fas fa-mobile'
        };

        const staticCategories = [...new Set(PRODUCTS_DATA.map(p => p.category))];
        categoriesShowcase.innerHTML = staticCategories.map(cat => `
            <div class="category-showcase-card glassmorphism" data-category="${cat}">
                <i class="${layoutIcons[cat] || 'fas fa-microchip'}"></i>
                <h4>${cat}</h4>
            </div>
        `).join('');

        document.querySelectorAll('.category-showcase-card').forEach(card => {
            card.addEventListener('click', () => {
                const cat = card.dataset.category;
                resetAllFiltersState();
                activeFilters.category.push(cat);
                syncFiltersCheckboxesUI();
                executeFilteringEngine();
                scrollToTargetSection('marketplace-section');
            });
        });
    }

    // --- Core Algorithmic Data Filters Engine ---
    function executeFilteringEngine() {
        let results = [...PRODUCTS_DATA];

        // Pipeline stage 1: Brand Checkbox Array
        if (activeFilters.brand.length > 0) {
            results = results.filter(p => activeFilters.brand.includes(p.brand));
        }
        // Pipeline stage 2: Category Array
        if (activeFilters.category.length > 0) {
            results = results.filter(p => activeFilters.category.includes(p.category));
        }
        // Pipeline stage 3: RAM Array
        if (activeFilters.ram.length > 0) {
            results = results.filter(p => activeFilters.ram.includes(p.ram));
        }
        // Pipeline stage 4: Storage Array
        if (activeFilters.storage.length > 0) {
            results = results.filter(p => activeFilters.storage.includes(p.storage));
        }
        // Pipeline stage 5: Max Price Threshold Range slider
        results = results.filter(p => p.price <= activeFilters.maxPrice);

        // Pipeline stage 6: Applied Complex Sorting Rules
        if (currentSort === 'price-asc') {
            results.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-desc') {
            results.sort((a, b) => b.price - a.price);
        } else if (currentSort === 'rating') {
            results.sort((a, b) => b.rating - a.rating);
        } else if (currentSort === 'sales') {
            results.sort((a, b) => b.sales - a.sales);
        }

        renderProductsGrid(results);
    }

    function resetAllFiltersState() {
        activeFilters = { brand: [], category: [], ram: [], storage: [], maxPrice: 3000 };
        if (priceRange) {
            priceRange.value = 3000;
            priceRangeValue.textContent = 'Máx: $3000';
        }
    }

    function syncFiltersCheckboxesUI() {
        document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(chk => {
            const type = chk.dataset.filter;
            const val = chk.value;
            chk.checked = activeFilters[type].includes(val);
        });
    }

    // --- Real-time Suggestive Global Autocomplete Search Layer ---
    if (globalSearch) {
        globalSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                searchDropdown.style.display = 'none';
                return;
            }

            const matched = PRODUCTS_DATA.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.brand.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query)
            );

            if (matched.length === 0) {
                searchDropdown.innerHTML = `<div class="suggestion-item"><span>No se encontraron coincidencias</span></div>`;
            } else {
                searchDropdown.innerHTML = matched.slice(0, 5).map(p => `
                    <div class="suggestion-item" data-id="${p.id}">
                        <img src="${p.images[0]}" alt="">
                        <div class="suggestion-info">
                            <h5>${p.name}</h5>
                            <span>${p.brand} • $${p.price}</span>
                        </div>
                    </div>
                `).join('');
            }
            searchDropdown.style.display = 'block';

            // Element click dynamic listener
            searchDropdown.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.dataset.id;
                    if(id) openProductDetailModal(id);
                    searchDropdown.style.display = 'none';
                    globalSearch.value = '';
                });
            });
        });

        // Outside Click Closes Dropdown Suggestbox
        document.addEventListener('click', (e) => {
            if (!globalSearch.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });
    }

    // --- Interactive Shopping Cart System Layer ---
    function addProductToCartEngine(id) {
        const targetProduct = PRODUCTS_DATA.find(p => p.id === id);
        if (!targetProduct) return;

        const cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            if (cartItem.quantity < targetProduct.stock) {
                cartItem.quantity++;
            } else {
                alert('Inviable añadir más unidades. Umbral máximo de stock alcanzado.');
                return;
            }
        } else {
            cart.push({ id: id, quantity: 1 });
        }
        syncCartStateStorageAndUI();
        triggerCartDrawerFeedbackHighlight();
    }

    function syncCartStateStorageAndUI() {
        localStorage.setItem('ctg_cart', JSON.stringify(cart));
        const totalItemsCount = cart.reduce((acc, current) => acc + current.quantity, 0);
        cartCount.textContent = totalItemsCount;

        const cartContainer = document.getElementById('cart-items-container');
        if (!cartContainer) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-state">
                    <i class="far fa-shopping-bag-bounce"></i>
                    <p>Su carrito corporativo está vacío.</p>
                </div>
            `;
            document.getElementById('cart-subtotal').textContent = '$0.00';
            document.getElementById('cart-total').textContent = '$0.00';
            return;
        }

        let calculatedSubtotal = 0;
        cartContainer.innerHTML = cart.map(item => {
            const product = PRODUCTS_DATA.find(p => p.id === item.id);
            if (!product) return '';
            const lineTotal = product.price * item.quantity;
            calculatedSubtotal += lineTotal;

            return `
                <div class="drawer-item-card" data-id="${product.id}">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <div class="drawer-item-details">
                        <span class="brand">${product.brand}</span>
                        <h5>${product.name}</h5>
                        <span class="price">$${product.price} x ${item.quantity}</span>
                        <div class="quantity-control-cluster">
                            <button class="btn-qty-minus"><i class="fas fa-minus"></i></button>
                            <span>${item.quantity}</span>
                            <button class="btn-qty-plus"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <i class="far fa-trash-alt btn-delete-drawer-item"></i>
                </div>
            `;
        }).join('');

        document.getElementById('cart-subtotal').textContent = `$${calculatedSubtotal.toLocaleString()}`;
        document.getElementById('cart-total').textContent = `$${calculatedSubtotal.toLocaleString()}`;

        attachCartControlHooks();
    }

    function attachCartControlHooks() {
        document.querySelectorAll('.drawer-item-card').forEach(card => {
            const id = card.dataset.id;
            const productRef = PRODUCTS_DATA.find(p => p.id === id);

            card.querySelector('.btn-qty-minus').addEventListener('click', () => {
                const item = cart.find(i => i.id === id);
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(i => i.id !== id);
                }
                syncCartStateStorageAndUI();
            });

            card.querySelector('.btn-qty-plus').addEventListener('click', () => {
                const item = cart.find(i => i.id === id);
                if (item.quantity < productRef.stock) {
                    item.quantity++;
                } else {
                    alert('Límite de stock de almacén alcanzado.');
                }
                syncCartStateStorageAndUI();
            });

            card.querySelector('.btn-delete-drawer-item').addEventListener('click', () => {
                cart = cart.filter(i => i.id !== id);
                syncCartStateStorageAndUI();
            });
        });
    }

    function triggerCartDrawerFeedbackHighlight() {
        const icon = document.getElementById('cart-trigger');
        icon.classList.add('animate-pulse');
        setTimeout(() => icon.classList.remove('animate-pulse'), 1000);
    }

    // --- Interactive Favorites System Layer ---
    function toggleProductFavoriteEngine(id, elementNode) {
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
            if(elementNode) elementNode.classList.remove('active');
        } else {
            favorites.push(id);
            if(elementNode) elementNode.classList.add('active');
        }
        localStorage.setItem('ctg_favorites', JSON.stringify(favorites));
        favCount.textContent = favorites.length;
        syncFavoritesDrawerUI();
    }

    function syncFavoritesDrawerUI() {
        favCount.textContent = favorites.length;
        const favContainer = document.getElementById('favorites-items-container');
        if (!favContainer) return;

        if (favorites.length === 0) {
            favContainer.innerHTML = `<div class="empty-state"><p>No ha guardado dispositivos favoritos.</p></div>`;
            return;
        }

        favContainer.innerHTML = favorites.map(id => {
            const product = PRODUCTS_DATA.find(p => p.id === id);
            if (!product) return '';
            return `
                <div class="drawer-item-card" data-id="${product.id}">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <div class="drawer-item-details">
                        <span class="brand">${product.brand}</span>
                        <h5>${product.name}</h5>
                        <span class="price">$${product.price}</span>
                    </div>
                    <i class="far fa-trash-alt btn-delete-drawer-item remove-fav-direct"></i>
                </div>
            `;
        }).join('');

        favContainer.querySelectorAll('.remove-fav-direct').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.closest('.drawer-item-card').dataset.id;
                toggleProductFavoriteEngine(id);
                executeFilteringEngine(); // Sync grid iconography states
            });
        });
    }

    // --- Product SPA Complex Detailed Modal Architecture ---
    const productModal = document.getElementById('product-modal');
    
    function openProductDetailModal(id) {
        const product = PRODUCTS_DATA.find(p => p.id === id);
        if (!product) return;

        const modalBody = document.getElementById('product-modal-body');
        
        // Generate Related Mock Products Subset
        const relatedProducts = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
        let relatedHtml = '';
        if(relatedProducts.length > 0) {
            relatedHtml = `
                <div class="related-products-section">
                    <h4>Dispositivos Tecnológicos Relacionados</h4>
                    <div class="related-products-row">
                        ${relatedProducts.map(rp => `
                            <div class="drawer-item-card sub-related-click" data-id="${rp.id}" style="cursor:pointer; background:var(--bg-tint); padding:10px; border-radius:8px;">
                                <img src="${rp.images[0]}" style="width:50px; height:50px;">
                                <div>
                                    <h6>${rp.name}</h6>
                                    <span style="color:var(--accent-blue); font-weight:700;">$${rp.price}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <div class="product-gallery-view">
                <div class="main-zoom-image-frame" id="modal-zoom-frame">
                    <img src="${product.images[0]}" id="modal-main-img" alt="">
                </div>
                <div class="gallery-thumbnails-row">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail-box ${index === 0 ? 'active' : ''}" data-src="${img}">
                            <img src="${img}" alt="">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-product-buy-panel">
                <span class="modal-brand">${product.brand}</span>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin-bottom:15px;">
                    <i class="fas fa-star"></i> <span>${product.rating} de Calificación Comercial</span>
                </div>
                <div class="modal-price-matrix">
                    <span class="current-price">$${product.price}</span>
                    <span class="old-price" style="text-decoration:line-through; color:var(--text-muted);">$${product.oldPrice}</span>
                </div>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:20px;">Adquiera este ecosistema de alto rendimiento con el respaldo oficial y garantía extendida provista por el consorcio internacional Corporación Technology Group.</p>
                
                <div class="product-card-actions" style="margin-bottom:30px;">
                    <button class="btn btn-primary btn-block" id="modal-btn-add-cart"><i class="fas fa-shopping-bag"></i> Añadir Al Carrito Premium</button>
                </div>

                <div class="modal-tabs-container">
                    <div class="modal-tab-headers">
                        <span class="modal-tab-link active" data-pane="pane-specs">Especificaciones</span>
                        <span class="modal-tab-link" data-pane="pane-features">Características</span>
                        <span class="modal-tab-link" data-pane="pane-reviews">Opiniones (${product.reviews.length})</span>
                    </div>
                    <div class="modal-tab-content">
                        <div class="modal-tab-pane active" id="pane-specs">
                            <div class="specs-table-sheet">
                                ${Object.entries(product.specs).map(([key, value]) => `
                                    <div class="spec-row-item"><span class="label">${key}</span><span>${value}</span></div>
                                `).join('')}
                                <div class="spec-row-item"><span class="label">Configuración RAM</span><span>${product.ram}</span></div>
                                <div class="spec-row-item"><span class="label">Almacenamiento Físico</span><span>${product.storage}</span></div>
                            </div>
                        </div>
                        <div class="modal-tab-pane" id="pane-features">
                            <ul style="padding-left:16px; list-style-type:square;">
                                ${product.features.map(f => `<li style="margin-bottom:8px;">${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="modal-tab-pane" id="pane-reviews">
                            <div class="reviews-scroller">
                                ${product.reviews.length === 0 ? '<p>Este lote premium no cuenta con reseñas aún.</p>' : product.reviews.map(r => `
                                    <div class="review-item-block">
                                        <div class="review-meta-row"><strong>${r.user}</strong><span><i class="fas fa-star" style="color:#ffb800"></i> ${r.score}</span></div>
                                        <p style="font-style:italic;">"${r.comment}"</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${relatedHtml}
        `;

        productModal.classList.add('open');

        // Connect Modal Specific Interactions
        document.getElementById('modal-btn-add-cart').addEventListener('click', () => addProductToCartEngine(product.id));

        // Thumbnail Switching Event Wire
        modalBody.querySelectorAll('.thumbnail-box').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                modalBody.querySelectorAll('.thumbnail-box').forEach(t => t.classList.remove('active'));
                const frame = e.currentTarget;
                frame.classList.add('active');
                document.getElementById('modal-main-img').src = frame.dataset.src;
            });
        });

        // Tab Panes Modal Selector Switching Hook
        modalBody.querySelectorAll('.modal-tab-link').forEach(link => {
            link.addEventListener('click', (e) => {
                modalBody.querySelectorAll('.modal-tab-link').forEach(l => l.classList.remove('active'));
                modalBody.querySelectorAll('.modal-tab-pane').forEach(p => p.classList.remove('active'));
                link.classList.add('active');
                document.getElementById(link.dataset.pane).classList.add('active');
            });
        });

        // Inter-related click reload sub-routine
        modalBody.querySelectorAll('.sub-related-click').forEach(rc => {
            rc.addEventListener('click', () => {
                openProductDetailModal(rc.dataset.id);
            });
        });
    }

    const closeProductModalBtn = document.getElementById('close-product-modal');
    if(closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', () => productModal.classList.remove('open'));
        productModal.querySelector('.modal-overlay').addEventListener('click', () => productModal.classList.remove('open'));
    }

    // --- Interactive Client Dashboard Account Panel Panel ---
    function renderUserAccountPanelDashboard() {
        const dashboardBox = document.getElementById('account-dashboard-container');
        if (!dashboardBox) return;

        dashboardBox.innerHTML = `
            <div class="account-profile-header">
                <div class="profile-avatar-container">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Usuario Corporativo">
                </div>
                <div class="profile-title">
                    <h4>Ing. Sophia Reinhardt-Vance</h4>
                    <p>Socio de Cuenta Corporativa Tier Elite</p>
                </div>
            </div>
            <div class="account-grid-tabs">
                <span class="account-tab-btn active" data-block="orders-panel">Historial de Pedidos</span>
                <span class="account-tab-btn" data-block="config-panel">Configuración & Seguridad</span>
            </div>
            <div class="account-tabs-panes-wrapper">
                <div class="account-block-pane" id="orders-panel">
                    <div class="simulated-orders-list">
                        <div class="order-row-card">
                            <div class="order-row-header">
                                <span class="order-id">ID: CTG-2026-98441</span>
                                <span class="order-status-badge">Entregado de Forma Segura</span>
                            </div>
                            <div class="order-body-info">
                                <h6>1x Laptop ASUS ROG Strix Scar 18 Aerospace</h6>
                                <span class="total-paid">$2,899</span>
                            </div>
                        </div>
                        <div class="order-row-card">
                            <div class="order-row-header">
                                <span class="order-id">ID: CTG-2026-45112</span>
                                <span class="order-status-badge">Entregado</span>
                            </div>
                            <div class="order-body-info">
                                <h6>1x Mayju Chrono Watch S9 Titanio</h6>
                                <span class="total-paid">$349</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="account-block-pane hidden" id="config-panel">
                    <div class="specs-table-sheet" style="color:var(--text-muted); font-size:0.9rem;">
                        <div class="spec-row-item"><span class="label">Canal de Facturación</span><span>Corporación Technology Group SAC</span></div>
                        <div class="spec-row-item"><span class="label">Dirección Fiscal</span><span>San Isidro Financial Core, Edificio Capital Piso 14</span></div>
                        <div class="spec-row-item"><span class="label">Autenticación Multifactor</span><span style="color:var(--green-success)">Habilitada via Token</span></div>
                    </div>
                </div>
            </div>
        `;

        // Dashboard Internal Tab Switching Logic
        dashboardBox.querySelectorAll('.account-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                dashboardBox.querySelectorAll('.account-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const targetBlock = btn.dataset.block;
                if(targetBlock === 'orders-panel') {
                    document.getElementById('orders-panel').classList.remove('hidden');
                    document.getElementById('config-panel').classList.add('hidden');
                } else {
                    document.getElementById('orders-panel').classList.add('hidden');
                    document.getElementById('config-panel').classList.remove('hidden');
                }
            });
        });
    }
    renderUserAccountPanelDashboard();

    // --- Special Offer Combo Bundles Action Wire Routine ---
    document.querySelectorAll('.offer-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const comboType = e.target.dataset.combo;
            if(comboType === 'apple-combo') {
                addProductToCartEngine('p1');
                setTimeout(() => addProductToCartEngine('p8'), 300);
                alert('Combo Ecosistema Apple Cargado de forma unificada en su carrito.');
            } else {
                addProductToCartEngine('p4');
                setTimeout(() => addProductToCartEngine('p5'), 300);
                alert('Setup Ultimate Elite transferido al carrito transaccional.');
            }
            document.getElementById('cart-drawer').classList.add('open');
        });
    });

    // --- Dynamic Promotional Countdown Countdown Core Clocks ---
    function initializeCountdownClocks() {
        document.querySelectorAll('.countdown-timer').forEach(timer => {
            const closingDate = new Date(timer.dataset.time).getTime();
            
            const processTimerInterval = setInterval(() => {
                const now = new Date().getTime();
                const pathDifference = closingDate - now;

                if (pathDifference < 0) {
                    clearInterval(processTimerInterval);
                    timer.innerHTML = 'Oferta de lote corporativo finalizada.';
                    return;
                }

                const d = Math.floor(pathDifference / (1000 * 60 * 60 * 24));
                const h = Math.floor((pathDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((pathDifference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((pathDifference % (1000 * 60)) / 1000);

                timer.querySelector('.days').textContent = d.toString().padStart(2, '0');
                timer.querySelector('.hours').textContent = h.toString().padStart(2, '0');
                timer.querySelector('.minutes').textContent = m.toString().padStart(2, '0');
                timer.querySelector('.seconds').textContent = s.toString().padStart(2, '0');
            }, 1000);
        });
    }
    initializeCountdownClocks();

    // --- Infrastructure Wiring & Controls Hooking ---

    // Price Range Filter Slider Listener Hook
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            const val = e.target.value;
            priceRangeValue.textContent = `Máx: $${val}`;
            activeFilters.maxPrice = parseFloat(val);
            executeFilteringEngine();
        });
    }

    // Sort Dropdown Selector Dynamic Hooks
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            executeFilteringEngine();
        });
    }

    // Global Reset Filter Button Trigger
    const btnResetFilters = document.getElementById('btn-reset-filters');
    if(btnResetFilters) {
        btnResetFilters.addEventListener('click', () => {
            resetAllFiltersState();
            syncFiltersCheckboxesUI();
            executeFilteringEngine();
        });
    }

    // Adaptive Sticky Floating Navbar Layout Switcher
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const btnScrollTop = document.getElementById('scroll-top');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if(window.scrollY > 500) {
            btnScrollTop.classList.add('visible');
        } else {
            btnScrollTop.classList.remove('visible');
        }
    });

    // Smooth Navigation Intersite Core Router Scroller
    function scrollToTargetSection(targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 90; // Fixed structural navbar height buffer
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('.scroll-to-view, .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target || link.getAttribute('href').substring(1);
            if(targetId && document.getElementById(targetId)) {
                scrollToTargetSection(targetId);
                
                // Toggle navbar active indicators
                document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
                if(link.classList.contains('nav-link')) link.classList.add('active');
            }
        });
    });

    document.getElementById('nav-logo-click').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top:0, behavior:'smooth' });
    });

    const btnScrollTop = document.getElementById('scroll-top');
    if(btnScrollTop) {
        btnScrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Footer Connect Elements Filtering Routing Fast Pass Hooks
    document.querySelectorAll('.brand-footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetBrandName = link.dataset.brand;
            resetAllFiltersState();
            activeFilters.brand.push(targetBrandName);
            syncFiltersCheckboxesUI();
            executeFilteringEngine();
            scrollToTargetSection('marketplace-section');
        });
    });

    document.querySelectorAll('.category-footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetCatName = link.dataset.cat;
            resetAllFiltersState();
            activeFilters.category.push(targetCatName);
            syncFiltersCheckboxesUI();
            executeFilteringEngine();
            scrollToTargetSection('marketplace-section');
        });
    });

    // --- Premium Light / Dark Core Aesthetic Theme Switcher ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const storedThemeState = localStorage.getItem('ctg_theme') || 'dark-mode';
    
    if (storedThemeState === 'light-mode') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeToggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
            localStorage.setItem('ctg_theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
            localStorage.setItem('ctg_theme', 'dark-mode');
        }
    });

    // Checkout Premium Simulation Action
    document.getElementById('btn-checkout').addEventListener('click', () => {
        alert('Simulación Transaccional: Conexión segura de pasarela exitosa. Listo para integrar pasarela bancaria o Firebase Checkout.');
        cart = [];
        syncCartStateStorageAndUI();
        document.getElementById('cart-drawer').classList.remove('open');
    });

    // --- Complex Intersection Observer Layout Micro-Animations Layer ---
    const sectionRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger execution animation only once safely
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-reveal').forEach(sec => {
        sectionRevealObserver.observe(sec);
    });

    // --- Main Initializer Executions Core Pipeline ---
    renderBrands();
    renderFilterSidebarOptions();
    executeFilteringEngine();
    renderCategoriesShowcase();
    syncCartStateStorageAndUI();
    syncFavoritesDrawerUI();

    // Kill/Dismiss Loader Fade Phase smoothly
    const pageLoader = document.getElementById('loader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('fade-out');
        }, 800);
    }
});
