CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    tags VARCHAR(255),
    categories VARCHAR(255)
);

CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

ALTER TABLE blog_posts
ADD CONSTRAINT fk_blog_posts_tags FOREIGN KEY (tags) REFERENCES tags(name);

ALTER TABLE blog_posts
ADD CONSTRAINT fk_blog_posts_categories FOREIGN KEY (categories) REFERENCES categories(name);
