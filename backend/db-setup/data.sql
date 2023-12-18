INSERT INTO brands (id, name)
VALUES
('brand-1', 'Giant'),
('brand-2', 'Specialized'),
('brand-3', 'Trek'),
('brand-4', 'Everyday'),
('brand-5', 'Hoodrich'),
('brand-6', 'Wilier'),
('brand-7', 'Fuji'),
('brand-8', 'SLP'),
('brand-9', 'Moma'),
('brand-10', 'Kestrel');

INSERT INTO sizes (id, size)
VALUES
('size-1', 'XS'),
('size-2', 'S'),
('size-3', 'M'),
('size-4', 'L'),
('size-5', 'XL');

INSERT INTO colors (id, color)
VALUES
('color-1', 'Black'),
('color-2', 'White'),
('color-3', 'Red'),
('color-4', 'Blue'),
('color-5', 'Green');

INSERT INTO categories (id, category)
VALUES
('category-1', 'Road'),
('category-2', 'Mountain'),
('category-3', 'Hybrid'),
('category-4', 'Electric'),
('category-5', 'BMX'),
('category-6', 'Freestyle'),
('category-7', 'Mountain-Bike'),
('category-8', 'Paseo'),
('category-9', 'Ruta');

INSERT INTO models_by_brand (id, id_brand, modelName)
VALUES
('model-1', 'brand-1', 'TCR Advanced Pro 1'),
('model-2', 'brand-1', 'Defy Advanced Pro 2'),
('model-3', 'brand-2', 'Tarmac SL7'),
('model-4', 'brand-2', 'Epic Expert'),
('model-5', 'brand-4', 'Everyday Tyron'),
('model-6', 'brand-5', 'Hoodrich BMX'),
('model-7', 'brand-6', 'Wilier Plus'),
('model-8', 'brand-7', 'Fuji Place'),
('model-9', 'brand-8', 'Federosa'),
('model-10', 'brand-9', 'Urban WRT500'),
('model-11', 'brand-6', 'Racer3000'),
('model-12', 'brand-7', 'Pathfinder'),
('model-13', 'brand-10', 'Triatlon');

INSERT INTO bikes (id, id_model_name, description, price, id_brand, id_size, id_color, image, id_category)
VALUES
('bike-1', 'model-1', 'The ultimate road bike for competitive riders.', 5000.00, 'brand-1', 'size-3', 'color-1', 'https://images.giant-bicycles.com/products/model/2023/TCRAdvancedPro1Disc_0_750.jpg', 'category-1'),
('bike-2', 'model-2', 'A versatile road bike for all-around riding.', 3500.00, 'brand-1', 'size-2', 'color-2', 'https://images.giant-bicycles.com/products/model/2023/DefyAdvancedPro2Disc_0_750.jpg', 'category-1'),
('bike-3', 'model-3', 'A high-performance mountain bike for serious off-road riding.', 6000.00, 'brand-2', 'size-4', 'color-3', 'https://images.specialized.com/bikes/2023/tarmac/tarmac_sl7_pro_race_disc/swatches/tarmac-sl7-pro-race-disc-red-2023.jpg', 'category-2'),
('bike-4', 'model-4', 'A trail-capable mountain bike for all-mountain adventures.', 4500.00, 'brand-2', 'size-5', 'color-4', 'https://images.specialized.com/bikes/2023/epic/epic-expert/swatches/epic-expert-black-2023.jpg', 'category-2'),
('bike-5', 'model-5', 'Lokiiiiiiii.', 5554500.00, 'brand-2', 'size-5', 'color-4', '/images/products/Ruta-1.jpg', 'category-2');

INSERT INTO users (id, first_name, last_name, email, birthday, phone, password)
VALUES
('user-1', 'John', 'Doe', 'johndoe@example.com', '1980-01-01', '+1234567890', 'password1'),
('user-2', 'Jane', 'Smith', 'janesmith@example.com', '1985-12-25', '+9876543210', 'password2');

INSERT INTO cart (id, id_bike, id_user)
VALUES
('cart-1', 'bike-1', 'user-1'),
('cart-2', 'bike-2', 'user-2');