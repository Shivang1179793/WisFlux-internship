document.addEventListener('DOMContentLoaded', () => {
	const addBlogButton = document.getElementById('add-blog');
	const blogTitleInput = document.getElementById('blog-title');
	const blogContentInput = document.getElementById('blog-content');
	const blogContainer = document.querySelector('.bottom');

	// Function to save blog to Local Storage
	function saveBlog(title, content) {
		let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
		blogs.push({ title, content });
		localStorage.setItem('blogs', JSON.stringify(blogs));
	}

	// Function to load blogs from Local Storage and display them
	function loadBlogs() {
		let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
		blogContainer.innerHTML = ''; // Clear existing blogs
		blogs.forEach((blog, index) => {
			const blogElement = document.createElement('div');
			blogElement.classList.add('blog');
			blogElement.innerHTML = `
                <span class="cross" data-index="${index}">&times;</span>
                <div class="blog-title">${blog.title}</div>
                <div class="blog-content">${blog.content}</div>
            `;
			blogContainer.appendChild(blogElement);
		});
	}

	// Event listener for adding new blog
	addBlogButton.addEventListener('click', () => {
		const title = blogTitleInput.value.trim();
		const content = blogContentInput.value.trim();

		if (title && content) {
			saveBlog(title, content);
			blogTitleInput.value = '';
			blogContentInput.value = '';
			loadBlogs();
		}
	});

	// Event delegation for removing a blog
	blogContainer.addEventListener('click', (e) => {
		if (e.target.classList.contains('cross')) {
			const index = e.target.dataset.index;
			let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
			blogs.splice(index, 1); // Remove blog at the specified index
			localStorage.setItem('blogs', JSON.stringify(blogs));
			loadBlogs();
		}
	});

	// Initial load of blogs
	loadBlogs();
});
