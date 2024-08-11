//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('product') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/1.png',
            category: 'adidas',
            price: 200000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'mizuno',
            price: 180000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/3.jpg',
            category: 'Món mặn',
            price: 180000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 4,
            status: 1, title: 'Nike X Crazylight',
            img: './assets/img/products/4.jpg',
            category: 'nike',
            price: 699000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Nike X Crazylight',
            img: './assets/img/products/25.jpg',
            category: 'nike',
            price: 280000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/6.jpg',
            category: 'nike',
            price: 540000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Nike X Crazylight',
            category: 'nike',
            img: './assets/img/products/19.jpg',
            price: 340000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Nike X Crazylight',
            img: './assets/img/products/8.jpg',
            category: 'nike',
            price: 140000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Nike X Crazylight',
            category: "nike",
            img: './assets/img/products/24.jpg',
            price: 34000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 10,
            status: 1, 
            title: 'Nike X Crazylight',
            category: "nike",
            img: './assets/img/products/10.jpg',
            price: 25000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 11,
            status: 1, 
            title: 'Nike X Crazylight',
            category: 'nike',
            img: './assets/img/products/13.jpg',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/12.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/14.jpg',
            category: '',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/15.jpg',
            category: 'adidas',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/16.jpg',
            category: 'adidas',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/17.jpg',
            category: 'adidas',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/18.jpg',
            category: 'mizuno',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/19.jpg',
            category: 'nike',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/20.jpg',
            category: 'mizuno',
            price: 130000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 20,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/21.jpg',
  category: 'mizuno',
              price: 130000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Adidas X Crazylight',
  category: 'mizuno',
              img: './assets/img/products/22.jpg',
            price: 550000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Adidas X Crazylight',
  category: 'mizuno',
              img: './assets/img/products/23.jpg',
            price: 550000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Adidas X Crazylight',
  category: 'mizuno',
              img: './assets/img/products/24.jpg',
            price: 510000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/27.jpg',
  category: 'mizuno',
              price: 950000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/28.jpg',

      category: 'mizuno',
                  price: 350000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/41.jpg',
            price: 450000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/29.jpg',
            price: 520000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/30.jpg',
            price: 350000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Adidas X Crazylight',
            category: 'adidas',
            img: './assets/img/products/31.jpg',
            price: 420000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Adidas X Crazylight',
            category: 'adidas',
            img: './assets/img/products/32.jpg',
            price: 175000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Adidas X Crazylight',
            category: 'adidas',
            img: './assets/img/products/33.jpg',
            price: 350000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/34.jpg',
            price: 460000,
            desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/35.jpg',
            price: 200000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/36.jpg',
            price: 270000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 35,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/37.jpg',
            price: 300000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 36,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/38.jpg',
            price: 280000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Adidas X Crazylight',
            category: 'mizuno',
            img: './assets/img/products/39.jpg',
            price: 280000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/40.jpg',
            price: 140000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Adidas X Crazylight',
             category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 40,
            status: 1, 
             title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 50000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },

        {
            id: 41,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 50000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 42,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 699000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 43,
            status: 1, 
             title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 550000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 44,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 220000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 45,
            status: 1, 
            title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 75000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 46,
            status: 1, 
         title: 'Adidas X Crazylight',
             category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 75000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 47,
            status: 1, 
             title: 'Adidas X Crazylight',
              category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 170000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 48,
            status: 1, 
            title: 'Adidas X Crazylight',
             category: 'mizuno',
            img: './assets/img/products/42.jpg',
            price: 120000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 49,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 80000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 50,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 70000,
                        desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'

        },
        {
            id: 51,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 160000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 52,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 20000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 53,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 10000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 54,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 50000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 55,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 56,
            status: 1, 
             title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 99000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 57,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 49000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 58,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 60000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 59,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 130000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Adidas X Crazylight',
            img: './assets/img/products/2.jpg',
            category: 'puma',
            price: 100000,
            desc: 'New Balance là thương hiệu đã đồng hành cùng những màn trình diễn ấn tượng của sao trẻ thuộc biên chế Arsenal trong năm 2023, và tất nhiên, sự ưu ái thương hiệu này dành cho cầu thủ người Anh đã được thể hiện qua phối màu độc quyền trên mẫu Furon V7 với một gam màu đỏ tương đồng với màu áo sân nhà của Pháo thủ thành London.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Lê Văn Hòa",
            phone: "1234567890",
            password: "123456",
            address: '',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Lê Văn Hòa",
            phone: "1234567890",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();