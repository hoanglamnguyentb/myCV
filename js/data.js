import { setItem, getItem } from './utility.js';
export { user_reset, likes_reset, topics_reset, topic_childs_reset, colors_reset, categories_reset, resetData };

const user_reset = {
  first_name: 'Hoàng Lam',
  last_name: 'Nguyễn',
  job_title: 'Full Stack Developer',
  avatar: './images/Lam.jpg',
  email: 'hoanglamnguyentb@gmail.com',
  phone_number: '0986295956',
  birthday: '2003-06-15',
  address: 'Thái Hoà, Thái Thuỵ, Thái Bình',
  interests:
    'Xin chào, Tôi là Hoàng Lam. Tôi bắt đầu với hành trình lập trình vào tháng 5/2022 tại trường FPT Aptech.Trong thời gian rảnh rỗi tôi thường nghe nhạc, nó giúp tôi thư giãn. Khi có cơ hội, tôi thường về quê để tận hưởng không gian trong lành và gặp gỡ gia đình.',
  target:
    'Với  kiến thức tích luỹ, tôi đang tìm kiếm cơ hội để tham gia vào môi trường làm việc chuyên nghiệp trong ngành IT.</br>Mục tiêu của tôi là không ngừng học hỏi, phát triển kỹ năng. Tôi muốn được tham gia, áp dụng kiến thức, kỹ năng của mình để thực hiện những dự án có thể mang lại giá trị thực sự cho công ty.',
};

const colors_reset = {
  primary: '#27384C',
  secondary: '#999',
};

const topics_reset = [
  {
    id: 1,
    title: 'Học vấn',
  },
  {
    id: 2,
    title: 'Chứng chỉ',
  },
  {
    id: 3,
    title: 'Kinh nghiệm',
  },
];

const categories_reset = [
  {
    id: 1,
    title: 'Programming Languages',
    skills: 'C;C#;Java;Javascript;PHP',
  },
  {
    id: 2,
    title: 'Frontend Development',
    skills: 'HTML;CSS;Bootstrap;AngularJS',
  },
  {
    id: 3,
    title: 'Backend Development',
    skills: 'Node.js;Express.js',
  },
  {
    id: 4,
    title: 'Database',
    skills: 'SQL Server;MySQL;MongoDB',
  },
  {
    id: 5,
    title: 'Devops',
    skills: 'Azure',
  },
  {
    id: 6,
    title: 'Framework',
    skills: 'Laravel;ASP.NET',
  },
  {
    id: 7,
    title: 'Other',
    skills: 'Git;Postman;Figma;Photoshop',
  },
];

const topic_childs_reset = [
  {
    id: 1,
    company: 'FPTAptech',
    role: '',
    description: 'FPT Aptech Vietnam - Hệ thống đào tạo lập trình viên quốc tế',
    from: '2022-06-09',
    to: '2024-01-01',
    parent_id: 1,
  },
  {
    id: 2,
    company: 'ADSE (Advanced Diploma in Software Engineering)',
    role: '',
    description: 'FPT Aptech',
    from: '',
    to: '',
    parent_id: 2,
  },
  {
    id: 3,
    company: 'Hệ thống hỗ trợ trực tuyến Online Help Desk',
    role: 'Trưởng nhóm, thành viên',
    description: 'Hệ thống xử lý tự yêu cầu từ các cơ sở vật chất khác nhau trong trường học tự động',
    from: '2022-11-09',
    to: '2022-12-09',
    parent_id: 3,
  },
];

const likes_reset = 99;

var user = getItem('user');
var likes = getItem('likes');
var topics = getItem('topics');
var topic_childs = getItem('topic_childs');
var colors = getItem('colors');
var categories = getItem('categories');
var skills = getItem('skills');

if (user == null) {
  setItem('user', user_reset);
}

if (likes == null) {
  setItem('likes', likes_reset);
}

if (topics == null) {
  setItem('topics', topics_reset);
}

if (topic_childs == null) {
  setItem('topic_childs', topic_childs_reset);
}

if (colors == null) {
  setItem('colors', colors_reset);
}

if (categories == null) {
  setItem('categories', categories_reset);
}

// Reset data

function resetData() {
  setItem('user', user_reset);
  setItem('likes', likes_reset);
  setItem('topics', topics_reset);
  setItem('topic_childs', topic_childs_reset);
  setItem('colors', colors_reset);
  setItem('categories', categories_reset);
  location.reload();
}
