// =======================================================================
// THƯ VIỆN BÀI GIẢNG 5 CHẶNG MẪU CHUẨN SGK TOÁN 4 (16 CHỦ ĐỀ TOÀN DIỆN)
// Mỗi chủ đề gồm 4 chặng, mỗi chặng có nhiều câu hỏi (2 câu/chặng = 8 câu)
// =======================================================================

export const STUDIO_TEMPLATES = {
  trung_binh_cong: {
    title: "Bài: Tìm số trung bình cộng",
    subtitle: "Khám phá quy tắc tính trung bình cộng và giải các bài toán thực tế",
    category: "Số và Phép tính",
    icon: "📊",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Bình có 10 quả táo, An có 20 quả táo. Nếu chia đều số táo cho cả hai bạn thì mỗi bạn được bao nhiêu quả táo?",
            options: ["12 quả", "15 quả", "18 quả", "20 quả"],
            correctIndex: 1,
            explanation: "Tổng số táo của hai bạn: 10 + 20 = 30 (quả). Chia đều cho 2 bạn: 30 : 2 = 15 (quả). Số 15 chính là số trung bình cộng của 10 và 20!"
          },
          {
            question: "Tìm số trung bình cộng của hai số 14 và 18:",
            options: ["15", "16", "17", "32"],
            correctIndex: 1,
            explanation: "Trung bình cộng = (14 + 18) : 2 = 32 : 2 = 16."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Muốn tìm số trung bình cộng của nhiều số, ta thực hiện như thế nào?",
            options: [
              "Lấy số lớn nhất cộng số bé nhất rồi chia 2",
              "Tính tổng các số đó, rồi chia tổng đó cho số các số hạng",
              "Lấy tích các số đó chia cho số các số hạng",
              "Lấy tổng các số đó nhân với số các số hạng"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK Toán 4: Muốn tìm số trung bình cộng của nhiều số, ta tính tổng của các số đó, rồi chia tổng đó cho số các số hạng."
          },
          {
            question: "Khi tìm trung bình cộng của 4 số hạng, sau khi tính tổng của 4 số đó, ta chia cho mấy?",
            options: ["Chia cho 2", "Chia cho 4", "Chia cho 3", "Chia cho 5"],
            correctIndex: 1,
            explanation: "Vì có 4 số hạng nên ta lấy tổng chia cho số các số hạng là 4."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Tìm số trung bình cộng của ba số: 30, 40 và 50.",
            options: ["35", "40", "45", "60"],
            correctIndex: 1,
            explanation: "Tổng ba số là: 30 + 40 + 50 = 120. Trung bình cộng: 120 : 3 = 40."
          },
          {
            question: "Tìm số trung bình cộng của bốn số: 10, 20, 30, 40.",
            options: ["20", "25", "30", "35"],
            correctIndex: 1,
            explanation: "Tổng bốn số là: 10 + 20 + 30 + 40 = 100. Trung bình cộng: 100 : 4 = 25."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một cửa hàng ngày thứ nhất bán được 120 kg gạo, ngày thứ hai bán 140 kg, ngày thứ ba bán 160 kg. Hỏi trung bình mỗi ngày bán được bao nhiêu kg gạo?",
            options: ["130 kg", "140 kg", "150 kg", "420 kg"],
            correctIndex: 1,
            explanation: "Tổng số gạo trong 3 ngày: 120 + 140 + 160 = 420 (kg). Trung bình mỗi ngày bán được: 420 : 3 = 140 (kg)."
          },
          {
            question: "Ba bạn Hoa, Lan, Mai có cân nặng lần lượt là 33 kg, 35 kg và 37 kg. Cân nặng trung bình của mỗi bạn là:",
            options: ["34 kg", "35 kg", "36 kg", "37 kg"],
            correctIndex: 1,
            explanation: "Tổng cân nặng: 33 + 35 + 37 = 105 (kg). Trung bình cộng: 105 : 3 = 35 (kg)."
          }
        ]
      }
    ]
  },

  tong_hieu: {
    title: "Bài: Tìm hai số khi biết Tổng và Hiệu",
    subtitle: "Nắm vững hai công thức Số lớn = (Tổng + Hiệu) : 2 và Số bé = (Tổng - Hiệu) : 2",
    category: "Số và Phép tính",
    icon: "➕",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Hai số có tổng là 50, hiệu của hai số là 10. Số lớn là:",
            options: ["20", "30", "40", "25"],
            correctIndex: 1,
            explanation: "Số lớn = (Tổng + Hiệu) : 2 = (50 + 10) : 2 = 60 : 2 = 30."
          },
          {
            question: "Hai số có tổng là 50, hiệu của hai số là 10. Số bé là:",
            options: ["15", "20", "25", "30"],
            correctIndex: 1,
            explanation: "Số bé = (Tổng - Hiệu) : 2 = (50 - 10) : 2 = 40 : 2 = 20 (hoặc lấy 50 - 30 = 20)."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Công thức chuẩn SGK để tìm SỐ LỚN khi biết tổng và hiệu của hai số là:",
            options: [
              "Số lớn = (Tổng - Hiệu) : 2",
              "Số lớn = (Tổng + Hiệu) : 2",
              "Số lớn = Tổng x Hiệu : 2",
              "Số lớn = Tổng + Hiệu"
            ],
            correctIndex: 1,
            explanation: "Ghi nhớ: Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng - Hiệu) : 2 hoặc Số bé = Số lớn - Hiệu."
          },
          {
            question: "Nếu biết Tổng là 80 và Số lớn là 50, ta có thể tìm Số bé bằng cách nào nhanh nhất?",
            options: ["Lấy 80 + 50", "Lấy 80 - 50 = 30", "Lấy 80 : 2", "Lấy 50 : 2"],
            correctIndex: 1,
            explanation: "Vì Tổng = Số lớn + Số bé nên Số bé = Tổng - Số lớn = 80 - 50 = 30."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Lớp 4A có 32 học sinh, số bạn nữ nhiều hơn số bạn nam là 4 bạn. Lớp 4A có bao nhiêu bạn nữ?",
            options: ["16 bạn", "18 bạn", "14 bạn", "20 bạn"],
            correctIndex: 1,
            explanation: "Số bạn nữ (số lớn) = (Tổng + Hiệu) : 2 = (32 + 4) : 2 = 36 : 2 = 18 (bạn)."
          },
          {
            question: "Lớp 4A có 32 học sinh, số bạn nữ nhiều hơn bạn nam 4 bạn. Lớp 4A có bao nhiêu bạn nam?",
            options: ["12 bạn", "14 bạn", "16 bạn", "18 bạn"],
            correctIndex: 1,
            explanation: "Số bạn nam (số bé) = (Tổng - Hiệu) : 2 = (32 - 4) : 2 = 28 : 2 = 14 (bạn)."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Hai ngăn sách có tất cả 120 quyển. Nếu chuyển 10 quyển từ ngăn trên xuống ngăn dưới thì hai ngăn bằng nhau. Lúc đầu ngăn trên có:",
            options: ["60 quyển", "70 quyển", "80 quyển", "65 quyển"],
            correctIndex: 1,
            explanation: "Chuyển 10 quyển mà bằng nhau => Ngăn trên hơn ngăn dưới: 10 x 2 = 20 (quyển). Ngăn trên lúc đầu là: (120 + 20) : 2 = 70 (quyển)."
          },
          {
            question: "Một mảnh đất hình chữ nhật có nửa chu vi là 40 m, chiều dài hơn chiều rộng 8 m. Chiều dài mảnh đất là:",
            options: ["20 m", "24 m", "16 m", "32 m"],
            correctIndex: 1,
            explanation: "Nửa chu vi chính là Tổng chiều dài và chiều rộng (40 m). Chiều dài (số lớn) = (40 + 8) : 2 = 24 (m)."
          }
        ]
      }
    ]
  },

  dau_hieu_chia_het: {
    title: "Bài: Dấu hiệu chia hết cho 2, 5, 9, 3",
    subtitle: "Nhận biết nhanh các số chia hết dựa vào chữ số tận cùng và tổng các chữ số",
    category: "Số và Phép tính",
    icon: "🔢",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Các số có chữ số tận cùng là chữ số nào thì chia hết cho 2?",
            options: ["1, 3, 5, 7, 9", "0, 2, 4, 6, 8", "Chỉ chữ số 0", "Chỉ 2 và 4"],
            correctIndex: 1,
            explanation: "Các số có chữ số tận cùng là 0, 2, 4, 6, 8 (chữ số chẵn) thì chia hết cho 2."
          },
          {
            question: "Các số có chữ số tận cùng là chữ số nào thì chia hết cho 5?",
            options: ["Chỉ chữ số 5", "0 hoặc 5", "0, 2, 4, 6, 8", "Bất kì chữ số nào"],
            correctIndex: 1,
            explanation: "Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Dấu hiệu chia hết cho 9 là gì?",
            options: [
              "Số có chữ số tận cùng là 9",
              "Các số có tổng các chữ số chia hết cho 9",
              "Số có chữ số tận cùng là 3, 6 hoặc 9",
              "Số chẵn chia hết cho 9"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK: Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9."
          },
          {
            question: "Dấu hiệu chia hết cho 3 là gì?",
            options: [
              "Số có tận cùng là 3",
              "Các số có tổng các chữ số chia hết cho 3",
              "Số có tận cùng là 0 hoặc 3",
              "Tất cả các số lẻ"
            ],
            correctIndex: 1,
            explanation: "Các số có tổng các chữ số chia hết cho 3 thì chia hết cho 3."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Trong các số sau, số nào vừa chia hết cho 2 vừa chia hết cho 5?",
            options: ["125", "230", "344", "415"],
            correctIndex: 1,
            explanation: "Số vừa chia hết cho 2 vừa chia hết cho 5 phải có chữ số tận cùng là 0. Do đó là số 230."
          },
          {
            question: "Trong các số: 135, 248, 351, 412, số nào chia hết cho 9?",
            options: ["248", "135", "412", "Không có số nào"],
            correctIndex: 1,
            explanation: "Số 135 có tổng các chữ số là 1 + 3 + 5 = 9, chia hết cho 9."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Điền chữ số thích hợp vào dấu * để số 5*4 chia hết cho 9:",
            options: ["0", "9", "8", "4"],
            correctIndex: 0,
            explanation: "Tổng các chữ số: 5 + * + 4 = 9 + *. Để 9 + * chia hết cho 9 thì * có thể là 0 hoặc 9. Phương án đúng là 0."
          },
          {
            question: "Số tự nhiên nhỏ nhất có 3 chữ số khác nhau chia hết cho cả 2 và 5 là:",
            options: ["100", "120", "102", "110"],
            correctIndex: 1,
            explanation: "Số nhỏ nhất có 3 chữ số khác nhau tận cùng là 0: hàng trăm nhỏ nhất là 1, hàng chục nhỏ nhất tiếp theo khác 1 và 0 là 2 => Số 120."
          }
        ]
      }
    ]
  },

  nhan_chia_so: {
    title: "Bài: Phép nhân và chia với số có hai chữ số",
    subtitle: "Rèn luyện kĩ năng đặt tính rồi tính và tính nhẩm thông minh",
    category: "Số và Phép tính",
    icon: "✖️",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Khi nhân một số tự nhiên với 10; 100; 1000 ta làm thế nào?",
            options: [
              "Cộng thêm 10 vào số đó",
              "Viết thêm 1, 2, 3 chữ số 0 vào bên phải số đó",
              "Nhân số đó với 2 rồi thêm chữ số 0",
              "Bỏ bớt chữ số 0 ở bên phải"
            ],
            correctIndex: 1,
            explanation: "Nhân một số với 10, 100, 1000... ta chỉ việc viết thêm một, hai, ba... chữ số 0 vào bên phải số đó."
          },
          {
            question: "Tính nhẩm: 45 x 100 =",
            options: ["450", "4500", "45000", "4050"],
            correctIndex: 1,
            explanation: "45 x 100 = 4500 (viết thêm hai chữ số 0 vào bên phải 45)."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Khi thực hiện phép tính nhân với số có hai chữ số, tích riêng thứ hai được viết như thế nào?",
            options: [
              "Thẳng cột với tích riêng thứ nhất",
              "Lùi sang bên trái một cột so với tích riêng thứ nhất",
              "Lùi sang bên phải một cột",
              "Viết ở đâu cũng được"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK: Tích riêng thứ hai được viết lùi sang bên trái một cột vì nó là số chục!"
          },
          {
            question: "Tính: 24 x 11 =",
            options: ["254", "264", "274", "284"],
            correctIndex: 1,
            explanation: "Mẹo nhân với 11: 2 + 4 = 6 viết xen vào giữa 2 và 4 => 264."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Kết quả của phép nhân 35 x 12 là:",
            options: ["380", "420", "450", "350"],
            correctIndex: 1,
            explanation: "35 x 12 = 35 x (10 + 2) = 350 + 70 = 420."
          },
          {
            question: "Kết quả của phép chia 960 : 24 là:",
            options: ["30", "40", "45", "50"],
            correctIndex: 1,
            explanation: "96 : 24 = 4; do đó 960 : 24 = 40."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một quyển sách có 25 trang, mỗi trang có 18 dòng. Hỏi quyển sách đó có tất cả bao nhiêu dòng?",
            options: ["400 dòng", "450 dòng", "420 dòng", "500 dòng"],
            correctIndex: 1,
            explanation: "Số dòng của cả quyển sách là: 25 x 18 = 450 (dòng)."
          },
          {
            question: "Xếp đều 720 chiếc bút vào các hộp, mỗi hộp chứa 24 chiếc bút. Hỏi xếp được bao nhiêu hộp?",
            options: ["25 hộp", "30 hộp", "35 hộp", "28 hộp"],
            correctIndex: 1,
            explanation: "Số hộp xếp được là: 720 : 24 = 30 (hộp)."
          }
        ]
      }
    ]
  },

  bieu_thuc_chua_chu: {
    title: "Bài: Biểu thức có chứa một chữ",
    subtitle: "Làm quen với chữ thay cho số và tính giá trị của biểu thức",
    category: "Số và Phép tính",
    icon: "🔤",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Nếu a = 5 thì giá trị của biểu thức 12 + a là:",
            options: ["15", "17", "20", "125"],
            correctIndex: 1,
            explanation: "Thay a = 5 vào biểu thức: 12 + 5 = 17."
          },
          {
            question: "Nếu b = 4 thì giá trị của biểu thức 6 x b là:",
            options: ["10", "24", "64", "20"],
            correctIndex: 1,
            explanation: "Thay b = 4 vào biểu thức: 6 x 4 = 24."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Mỗi lần thay chữ bằng số, ta tính được:",
            options: [
              "Nhiều giá trị khác nhau",
              "Một giá trị của biểu thức đó",
              "Không tính được giá trị nào",
              "Hai giá trị đồng thời"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK: Mỗi lần thay chữ bằng số, ta tính được một giá trị của biểu thức đó."
          },
          {
            question: "Giá trị của biểu thức 45 - m với m = 15 là:",
            options: ["20", "30", "35", "60"],
            correctIndex: 1,
            explanation: "45 - 15 = 30."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Tính giá trị của biểu thức (28 + x) : 5 với x = 12:",
            options: ["6", "8", "10", "7"],
            correctIndex: 1,
            explanation: "Thay x = 12: (28 + 12) : 5 = 40 : 5 = 8."
          },
          {
            question: "Tính giá trị của biểu thức 100 - 4 x y với y = 15:",
            options: ["60", "40", "85", "50"],
            correctIndex: 1,
            explanation: "Nhân chia trước cộng trừ sau: 4 x 15 = 60. Sau đó: 100 - 60 = 40."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một hình vuông có cạnh độ dài a. Công thức tính chu vi P của hình vuông theo a là:",
            options: ["P = a x a", "P = a x 4", "P = a + 4", "P = a x 2"],
            correctIndex: 1,
            explanation: "Chu vi hình vuông bằng độ dài cạnh nhân với 4: P = a x 4."
          },
          {
            question: "Một hình vuông có cạnh a = 15 cm. Chu vi của hình vuông đó là:",
            options: ["30 cm", "60 cm", "225 cm", "45 cm"],
            correctIndex: 1,
            explanation: "Chu vi hình vuông là: P = 15 x 4 = 60 (cm)."
          }
        ]
      }
    ]
  },

  phan_so: {
    title: "Bài: Khái niệm phân số & Tử số - Mẫu số",
    subtitle: "Nhận biết tử số, mẫu số, viết và đọc các phân số chuẩn SGK",
    category: "Phân số",
    icon: "🍰",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Một chiếc bánh pizza được chia đều thành 8 phần bằng nhau, Nam ăn 3 phần. Phân số chỉ phần bánh Nam đã ăn là:",
            options: ["8/3", "3/8", "3/5", "5/8"],
            correctIndex: 1,
            explanation: "Chiếc bánh chia đều 8 phần (mẫu số là 8), Nam ăn 3 phần (tử số là 3) => Phân số là 3/8."
          },
          {
            question: "Trong phân số 5/9, tử số là số nào và mẫu số là số nào?",
            options: [
              "Tử số là 9, mẫu số là 5",
              "Tử số là 5, mẫu số là 9",
              "Cả 5 và 9 đều là tử số",
              "Mẫu số bằng 0"
            ],
            correctIndex: 1,
            explanation: "Tử số là số tự nhiên viết trên gạch ngang (5), mẫu số là số tự nhiên khác 0 viết dưới gạch ngang (9)."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Mẫu số của một phân số biểu thị điều gì?",
            options: [
              "Số phần bằng nhau được lấy đi",
              "Tổng số phần bằng nhau được chia ra của đơn vị",
              "Chữ số lớn hơn",
              "Phép chia cho 0"
            ],
            correctIndex: 1,
            explanation: "Mẫu số cho biết đơn vị được chia thành bao nhiêu phần bằng nhau."
          },
          {
            question: "Thương của phép chia số tự nhiên 7 : 12 được viết dưới dạng phân số là:",
            options: ["12/7", "7/12", "7/5", "19/12"],
            correctIndex: 1,
            explanation: "Thương của phép chia a : b (với b khác 0) được viết thành phân số a/b: 7 : 12 = 7/12."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Phân số nào dưới đây có tử số lớn hơn mẫu số (phân số lớn hơn 1)?",
            options: ["3/5", "7/4", "6/6", "8/9"],
            correctIndex: 1,
            explanation: "Phân số 7/4 có tử số (7) lớn hơn mẫu số (4) nên phân số này lớn hơn 1."
          },
          {
            question: "Phân số nào dưới đây bằng 1?",
            options: ["5/8", "8/8", "9/8", "0/8"],
            correctIndex: 1,
            explanation: "Phân số có tử số bằng mẫu số (khác 0) thì bằng 1: 8/8 = 1."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Đội văn nghệ trường có 20 bạn, trong đó có 9 bạn nam. Phân số chỉ số bạn nữ trong đội là:",
            options: ["9/20", "11/20", "11/9", "20/11"],
            correctIndex: 1,
            explanation: "Số bạn nữ là: 20 - 9 = 11 (bạn). Phân số chỉ số bạn nữ là 11/20."
          },
          {
            question: "Một rổ có 15 quả cam, mẹ đã biếu bà 2/3 số cam đó. Số cam mẹ đã biếu bà là:",
            options: ["5 quả", "10 quả", "12 quả", "8 quả"],
            correctIndex: 1,
            explanation: "15 x 2/3 = (15 : 3) x 2 = 5 x 2 = 10 (quả cam)."
          }
        ]
      }
    ]
  },

  rut_gon_phan_so: {
    title: "Bài: Rút gọn phân số & Phân số bằng nhau",
    subtitle: "Rèn luyện tính chất cơ bản của phân số và cách đưa về phân số tối giản",
    category: "Phân số",
    icon: "✂️",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Rút gọn phân số 6/8 về phân số tối giản ta được:",
            options: ["2/3", "3/4", "1/2", "3/8"],
            correctIndex: 1,
            explanation: "Cả 6 và 8 đều chia hết cho 2: 6 : 2 = 3; 8 : 2 = 4 => 3/4."
          },
          {
            question: "Phân số nào dưới đây là phân số tối giản?",
            options: ["4/6", "5/7", "9/12", "10/15"],
            correctIndex: 1,
            explanation: "Phân số 5/7 có tử số và mẫu số không cùng chia hết cho số tự nhiên nào lớn hơn 1, nên là phân số tối giản."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Khi nhân cả tử số và mẫu số của một phân số với cùng một số tự nhiên khác 0, ta được:",
            options: [
              "Một phân số lớn hơn",
              "Một phân số bằng phân số đã cho",
              "Một phân số bé hơn",
              "Một số tự nhiên"
            ],
            correctIndex: 1,
            explanation: "Tính chất cơ bản của phân số: Khi nhân hoặc chia cả tử số và mẫu số với cùng một số tự nhiên khác 0, ta được một phân số bằng phân số đã cho."
          },
          {
            question: "Để rút gọn phân số 15/25, ta cùng chia cả tử số và mẫu số cho mấy?",
            options: ["Chia cho 3", "Chia cho 5", "Chia cho 10", "Chia cho 2"],
            correctIndex: 1,
            explanation: "Cả 15 và 25 đều có tận cùng là 5 nên chia hết cho 5: 15:5 / 25:5 = 3/5."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Rút gọn phân số 18/24 thành phân số tối giản:",
            options: ["6/8", "3/4", "9/12", "2/3"],
            correctIndex: 1,
            explanation: "Cùng chia tử và mẫu cho 6: 18 : 6 = 3; 24 : 6 = 4 => 3/4."
          },
          {
            question: "Phân số nào dưới đây bằng phân số 2/3?",
            options: ["4/9", "6/9", "5/6", "4/3"],
            correctIndex: 1,
            explanation: "Nhân cả tử và mẫu của 2/3 với 3 ta được: (2x3)/(3x3) = 6/9."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Tìm một phân số bằng phân số 3/5 và có mẫu số là 20:",
            options: ["9/20", "12/20", "15/20", "6/20"],
            correctIndex: 1,
            explanation: "Ta thấy 20 : 5 = 4. Nhân cả tử và mẫu của 3/5 với 4: (3x4)/(5x4) = 12/20."
          },
          {
            question: "Rút gọn phân số 36/48 về tối giản ta được:",
            options: ["6/8", "3/4", "18/24", "9/12"],
            correctIndex: 1,
            explanation: "Chia cả tử và mẫu cho 12: 36 : 12 = 3; 48 : 12 = 4 => 3/4."
          }
        ]
      }
    ]
  },

  quy_dong_mau_so: {
    title: "Bài: Quy đồng mẫu số các phân số",
    subtitle: "Biến đổi các phân số khác mẫu thành các phân số có cùng mẫu số chung",
    category: "Phân số",
    icon: "🔄",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Mẫu số chung đơn giản nhất của hai phân số 1/2 và 1/3 là:",
            options: ["5", "6", "8", "12"],
            correctIndex: 1,
            explanation: "Mẫu số chung = 2 x 3 = 6."
          },
          {
            question: "Quy đồng mẫu số hai phân số 1/3 và 1/4 với mẫu số chung 12 ta được:",
            options: ["3/12 và 4/12", "4/12 và 3/12", "2/12 và 3/12", "1/12 và 1/12"],
            correctIndex: 1,
            explanation: "1/3 = (1x4)/(3x4) = 4/12; 1/4 = (1x3)/(4x3) = 3/12."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Khi quy đồng mẫu số của 3/4 và 5/8, ta có thể chọn mẫu số chung là bao nhiêu để gọn nhất?",
            options: ["32", "8", "16", "12"],
            correctIndex: 1,
            explanation: "Vì 8 chia hết cho 4 (8 : 4 = 2) nên ta chọn 8 làm mẫu số chung (MSC), chỉ cần quy đồng 3/4 = 6/8 và giữ nguyên 5/8!"
          },
          {
            question: "Quy đồng mẫu số 3/5 và 2/3 với MSC là 15:",
            options: ["6/15 và 10/15", "9/15 và 10/15", "9/15 và 8/15", "5/15 và 3/15"],
            correctIndex: 1,
            explanation: "3/5 = (3x3)/(5x3) = 9/15; 2/3 = (2x5)/(3x5) = 10/15."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Quy đồng mẫu số hai phân số 2/7 và 3/5 được kết quả là:",
            options: ["10/35 và 21/35", "14/35 và 15/35", "10/35 và 15/35", "12/35 và 21/35"],
            correctIndex: 0,
            explanation: "MSC là 35: 2/7 = (2x5)/(7x5) = 10/35; 3/5 = (3x7)/(5x7) = 21/35."
          },
          {
            question: "Quy đồng mẫu số của 5/6 và 7/12 (chọn MSC là 12) ta được:",
            options: ["10/12 và 7/12", "12/12 và 7/12", "5/12 và 7/12", "15/12 và 7/12"],
            correctIndex: 0,
            explanation: "12 : 6 = 2, nhân cả tử và mẫu của 5/6 với 2: 5/6 = 10/12; giữ nguyên 7/12."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Hai bạn An và Bình cùng đọc một cuốn sách. An đã đọc được 3/8 cuốn sách, Bình đọc được 1/2 cuốn sách. Quy đồng mẫu số phần sách hai bạn đã đọc với MSC 8:",
            options: ["3/8 và 2/8", "3/8 và 4/8", "6/8 và 4/8", "3/8 và 1/8"],
            correctIndex: 1,
            explanation: "1/2 = 4/8; giữ nguyên 3/8 => Hai phân số là 3/8 và 4/8."
          },
          {
            question: "Mẫu số chung nhỏ nhất của 3 phân số 1/2; 1/3 và 1/4 là:",
            options: ["24", "12", "6", "18"],
            correctIndex: 1,
            explanation: "12 vừa chia hết cho 2, 3 và 4, nên 12 là MSC nhỏ nhất."
          }
        ]
      }
    ]
  },

  so_sanh_phan_so: {
    title: "Bài: So sánh hai phân số",
    subtitle: "So sánh phân số cùng mẫu, khác mẫu, cùng tử số và so sánh với 1",
    category: "Phân số",
    icon: "⚖️",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Trong hai phân số có cùng mẫu số, phân số nào lớn hơn?",
            options: [
              "Phân số nào có tử số bé hơn thì lớn hơn",
              "Phân số nào có tử số lớn hơn thì lớn hơn",
              "Hai phân số luôn bằng nhau",
              "Không so sánh được"
            ],
            correctIndex: 1,
            explanation: "Quy tắc: Trong hai phân số có cùng mẫu số, phân số nào có tử số lớn hơn thì lớn hơn."
          },
          {
            question: "So sánh hai phân số: 3/7 và 5/7:",
            options: ["3/7 > 5/7", "3/7 < 5/7", "3/7 = 5/7", "Không so sánh được"],
            correctIndex: 1,
            explanation: "Cùng mẫu số là 7, vì 3 < 5 nên 3/7 < 5/7."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Muốn so sánh hai phân số khác mẫu số, bước đầu tiên ta cần làm là gì?",
            options: [
              "Cộng tử số với nhau",
              "Quy đồng mẫu số hai phân số đó rồi so sánh tử số",
              "Lấy tử số chia cho mẫu số",
              "Nhân chéo rồi cộng lại"
            ],
            correctIndex: 1,
            explanation: "SGK Toán 4: Muốn so sánh hai phân số khác mẫu số, ta có thể quy đồng mẫu số hai phân số đó, rồi so sánh các tử số của chúng."
          },
          {
            question: "Trong hai phân số có cùng tử số, phân số nào có mẫu số bé hơn thì:",
            options: ["Bé hơn", "Lớn hơn", "Bằng nhau", "Bằng 0"],
            correctIndex: 1,
            explanation: "Cùng tử số, mẫu số càng bé thì chia phần càng to nên phân số đó lớn hơn! Ví dụ: 1/2 > 1/4."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "So sánh hai phân số: 3/4 và 5/8:",
            options: ["3/4 < 5/8", "3/4 > 5/8", "3/4 = 5/8", "Không so sánh được"],
            correctIndex: 1,
            explanation: "Quy đồng 3/4 = 6/8. Vì 6/8 > 5/8 nên 3/4 > 5/8."
          },
          {
            question: "Phân số nào dưới đây lớn hơn phân số 4/9?",
            options: ["2/9", "5/9", "3/9", "1/9"],
            correctIndex: 1,
            explanation: "5/9 có cùng mẫu 9 và tử số 5 > 4 nên 5/9 > 4/9."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Sắp xếp các phân số sau theo thứ tự từ bé đến lớn: 1/2; 3/4; 1/4:",
            options: ["3/4; 1/2; 1/4", "1/4; 1/2; 3/4", "1/2; 1/4; 3/4", "1/4; 3/4; 1/2"],
            correctIndex: 1,
            explanation: "Quy đồng cùng mẫu 4: 1/4, 2/4 (1/2), 3/4. Thứ tự từ bé đến lớn là: 1/4; 1/2; 3/4."
          },
          {
            question: "So sánh phân số 7/6 với 1:",
            options: ["7/6 < 1", "7/6 > 1", "7/6 = 1", "Không xác định"],
            correctIndex: 1,
            explanation: "Tử số (7) lớn hơn mẫu số (6) nên phân số lớn hơn 1: 7/6 > 1."
          }
        ]
      }
    ]
  },

  phep_cong_tru_phan_so: {
    title: "Bài: Phép cộng và trừ phân số",
    subtitle: "Nắm vững quy tắc cộng trừ phân số cùng mẫu và khác mẫu số",
    category: "Phân số",
    icon: "➕",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Muốn cộng hai phân số có cùng mẫu số, ta làm thế nào?",
            options: [
              "Cộng cả tử số với tử số, mẫu số với mẫu số",
              "Cộng tử số với tử số và giữ nguyên mẫu số",
              "Nhân tử số với nhau",
              "Lấy tử số trừ tử số"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK: Muốn cộng hai phân số cùng mẫu số, ta cộng hai tử số với nhau và giữ nguyên mẫu số."
          },
          {
            question: "Tính: 2/7 + 3/7 =",
            options: ["5/14", "5/7", "6/7", "1/7"],
            correctIndex: 1,
            explanation: "2/7 + 3/7 = (2 + 3)/7 = 5/7."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Muốn trừ hai phân số khác mẫu số, ta thực hiện như thế nào?",
            options: [
              "Trừ tử với tử, trừ mẫu với mẫu",
              "Quy đồng mẫu số hai phân số rồi trừ hai tử số, giữ nguyên mẫu số chung",
              "Đổi dấu phân số thứ hai",
              "Lấy mẫu số lớn trừ mẫu số bé"
            ],
            correctIndex: 1,
            explanation: "SGK Toán 4: Muốn trừ hai phân số khác mẫu số, ta quy đồng mẫu số hai phân số, rồi trừ hai phân số đó."
          },
          {
            question: "Tính: 7/9 - 4/9 =",
            options: ["3/0", "3/9 = 1/3", "11/9", "3/18"],
            correctIndex: 1,
            explanation: "7/9 - 4/9 = (7 - 4)/9 = 3/9 = 1/3 (rút gọn tối giản)."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Tính: 1/2 + 1/4 =",
            options: ["2/6", "3/4", "1/4", "2/4"],
            correctIndex: 1,
            explanation: "Quy đồng 1/2 = 2/4. Khi đó: 2/4 + 1/4 = 3/4."
          },
          {
            question: "Tính: 5/6 - 1/3 =",
            options: ["4/3", "1/2", "3/6", "2/3"],
            correctIndex: 1,
            explanation: "Quy đồng 1/3 = 2/6. Ta có: 5/6 - 2/6 = 3/6 = 1/2."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một mảnh đất trồng rau hết 2/5 diện tích, trồng hoa hết 1/5 diện tích. Hỏi diện tích trồng rau và hoa chiếm bao nhiêu phần diện tích mảnh đất?",
            options: ["3/10", "3/5", "2/25", "1/5"],
            correctIndex: 1,
            explanation: "Tổng diện tích là: 2/5 + 1/5 = 3/5 diện tích mảnh đất."
          },
          {
            question: "Một sợi dây dài 1 m, cắt đi 3/8 m. Hỏi đoạn dây còn lại dài bao nhiêu mét?",
            options: ["4/8 m", "5/8 m", "3/8 m", "2/8 m"],
            correctIndex: 1,
            explanation: "1 - 3/8 = 8/8 - 3/8 = 5/8 (m)."
          }
        ]
      }
    ]
  },

  phep_nhan_chia_phan_so: {
    title: "Bài: Phép nhân và chia phân số",
    subtitle: "Quy tắc nhân hai phân số và chia phân số bằng cách nhân đảo ngược",
    category: "Phân số",
    icon: "✖️",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Muốn nhân hai phân số, ta làm thế nào?",
            options: [
              "Quy đồng mẫu số rồi nhân tử số",
              "Lấy tử số nhân với tử số, mẫu số nhân với mẫu số",
              "Lấy tử số nhân với mẫu số",
              "Nhân chéo hai phân số"
            ],
            correctIndex: 1,
            explanation: "Quy tắc SGK: Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số."
          },
          {
            question: "Tính: 2/3 x 4/5 =",
            options: ["6/8", "8/15", "8/8", "6/15"],
            correctIndex: 1,
            explanation: "(2 x 4) / (3 x 5) = 8/15."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Phân số đảo ngược của phân số 3/7 là phân số nào?",
            options: ["3/7", "7/3", "-3/7", "1/7"],
            correctIndex: 1,
            explanation: "Phân số đảo ngược của 3/7 là phân số đổi chỗ tử số và mẫu số: 7/3."
          },
          {
            question: "Muốn chia một phân số cho một phân số, ta làm như thế nào?",
            options: [
              "Lấy tử chia tử, mẫu chia mẫu",
              "Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược",
              "Lấy phân số thứ hai chia phân số thứ nhất",
              "Quy đồng mẫu số rồi chia"
            ],
            correctIndex: 1,
            explanation: "SGK Toán 4: Muốn chia một phân số cho một phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Tính: 3/5 : 2/3 =",
            options: ["6/15", "9/10", "5/2", "6/10"],
            correctIndex: 1,
            explanation: "3/5 : 2/3 = 3/5 x 3/2 = (3 x 3) / (5 x 2) = 9/10."
          },
          {
            question: "Tính: 4/7 x 14/8 =",
            options: ["1/2", "1", "2", "4/8"],
            correctIndex: 1,
            explanation: "(4 x 14) / (7 x 8) = 56 / 56 = 1."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một hình chữ nhật có chiều dài 4/5 m, chiều rộng 3/4 m. Diện tích hình chữ nhật là:",
            options: ["7/9 m²", "3/5 m²", "12/20 m²", "7/20 m²"],
            correctIndex: 1,
            explanation: "Diện tích = 4/5 x 3/4 = 12/20 = 3/5 (m²)."
          },
          {
            question: "Một tấm bìa hình chữ nhật có diện tích 1/2 m², chiều rộng là 1/4 m. Chiều dài của tấm bìa là:",
            options: ["1/8 m", "2 m", "1 m", "3/4 m"],
            correctIndex: 1,
            explanation: "Chiều dài = Diện tích : Chiều rộng = 1/2 : 1/4 = 1/2 x 4 = 2 (m)."
          }
        ]
      }
    ]
  },

  yen_ta_tan: {
    title: "Bài: Yến, tạ, tấn & Bảng đơn vị đo khối lượng",
    subtitle: "Mối quan hệ giữa kg, yến, tạ, tấn và các bài toán thực tế",
    category: "Đại lượng và Đo lường",
    icon: "⚖️",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "1 yến bằng bao nhiêu ki-lô-gam?",
            options: ["5 kg", "10 kg", "100 kg", "1000 kg"],
            correctIndex: 1,
            explanation: "1 yến = 10 kg."
          },
          {
            question: "1 tạ bằng bao nhiêu yến?",
            options: ["5 yến", "10 yến", "100 yến", "20 yến"],
            correctIndex: 1,
            explanation: "1 tạ = 10 yến = 100 kg."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "1 tấn bằng bao nhiêu tạ và bằng bao nhiêu ki-lô-gam?",
            options: [
              "1 tấn = 100 tạ = 1000 kg",
              "1 tấn = 10 tạ = 1000 kg",
              "1 tấn = 10 tạ = 100 kg",
              "1 tấn = 5 tạ = 500 kg"
            ],
            correctIndex: 1,
            explanation: "Bảng đơn vị: 1 tấn = 10 tạ = 100 yến = 1000 kg."
          },
          {
            question: "Trong bảng đơn vị đo khối lượng, hai đơn vị đo liền nhau hơn kém nhau bao nhiêu lần?",
            options: ["2 lần", "10 lần", "100 lần", "1000 lần"],
            correctIndex: 1,
            explanation: "Mỗi đơn vị đo khối lượng lớn gấp 10 lần đơn vị bé hơn liền sau nó."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Đổi 3 tạ 50 kg sang ki-lô-gam:",
            options: ["305 kg", "350 kg", "3500 kg", "80 kg"],
            correctIndex: 1,
            explanation: "3 tạ = 300 kg. Do đó: 300 + 50 = 350 kg."
          },
          {
            question: "Đổi 2 tấn 4 tạ sang tạ:",
            options: ["204 tạ", "24 tạ", "240 tạ", "6 tạ"],
            correctIndex: 1,
            explanation: "2 tấn = 20 tạ. Do đó: 20 + 4 = 24 tạ."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một xe ô tô chở 3 tấn gạo và 5 tạ ngô. Hỏi ô tô đó chở tất cả bao nhiêu ki-lô-gam lương thực?",
            options: ["3050 kg", "3500 kg", "350 kg", "8000 kg"],
            correctIndex: 1,
            explanation: "3 tấn = 3000 kg; 5 tạ = 500 kg. Tổng cộng: 3000 + 500 = 3500 (kg)."
          },
          {
            question: "Một con bò nặng 3 tạ, một con trâu nặng 450 kg. Hỏi con nào nặng hơn và nặng hơn bao nhiêu kg?",
            options: [
              "Bò nặng hơn 150 kg",
              "Trâu nặng hơn 150 kg",
              "Hai con nặng bằng nhau",
              "Trâu nặng hơn 50 kg"
            ],
            correctIndex: 1,
            explanation: "Đổi 3 tạ = 300 kg. Trâu nặng 450 kg > 300 kg, hơn: 450 - 300 = 150 (kg)."
          }
        ]
      }
    ]
  },

  dien_tich_m2_dm2: {
    title: "Bài: Đơn vị đo diện tích (dm², m², mm², km²)",
    subtitle: "Làm chủ các đơn vị đo diện tích và chuyển đổi nhanh giữa các đơn vị",
    category: "Đại lượng và Đo lường",
    icon: "🟩",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "1 mét vuông (m²) bằng bao nhiêu đề-xi-mét vuông (dm²)?",
            options: ["10 dm²", "100 dm²", "1000 dm²", "10000 dm²"],
            correctIndex: 1,
            explanation: "Vì 1 m = 10 dm nên 1 m² = 10 x 10 = 100 dm²."
          },
          {
            question: "1 đề-xi-mét vuông (dm²) bằng bao nhiêu xăng-ti-mét vuông (cm²)?",
            options: ["10 cm²", "100 cm²", "1000 cm²", "10000 cm²"],
            correctIndex: 1,
            explanation: "1 dm² = 100 cm²."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Trong bảng đơn vị đo diện tích, mỗi đơn vị lớn gấp bao nhiêu lần đơn vị bé hơn liền sau?",
            options: ["10 lần", "100 lần", "1000 lần", "10000 lần"],
            correctIndex: 1,
            explanation: "Quy tắc: Mỗi đơn vị đo diện tích lớn gấp 100 lần đơn vị bé hơn tiếp liền."
          },
          {
            question: "Để đo diện tích một khu rừng, một thành phố hay diện tích một tỉnh, người ta thường dùng đơn vị nào?",
            options: ["Mét vuông (m²)", "Ki-lô-mét vuông (km²)", "Đề-xi-mét vuông (dm²)", "Héc-tô-mét"],
            correctIndex: 1,
            explanation: "Để đo diện tích các vùng đất lớn người ta dùng đơn vị ki-lô-mét vuông (km²)."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Đổi: 4 m² 25 dm² = ... dm²?",
            options: ["4250 dm²", "425 dm²", "4025 dm²", "45 dm²"],
            correctIndex: 1,
            explanation: "4 m² = 400 dm². 400 + 25 = 425 dm²."
          },
          {
            question: "Đổi: 5 km² = ... m²?",
            options: ["5000 m²", "5 000 000 m²", "50 000 m²", "500 000 m²"],
            correctIndex: 1,
            explanation: "1 km² = 1 000 000 m² nên 5 km² = 5 000 000 m²."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một căn phòng hình chữ nhật có chiều dài 8 m, chiều rộng 5 m. Người ta lát sàn bằng các viên gạch men hình vuông cạnh 5 dm. Hỏi cần bao nhiêu viên gạch?",
            options: ["100 viên", "160 viên", "200 viên", "80 viên"],
            correctIndex: 1,
            explanation: "Diện tích phòng: 8 x 5 = 40 m² = 4000 dm². Diện tích 1 viên gạch: 5 x 5 = 25 dm². Số viên gạch: 4000 : 25 = 160 (viên)."
          },
          {
            question: "Một mảnh vườn hình chữ nhật có chu vi 60 m, chiều rộng kém chiều dài 10 m. Diện tích mảnh vườn đó là:",
            options: ["150 m²", "200 m²", "300 m²", "100 m²"],
            correctIndex: 1,
            explanation: "Nửa chu vi = 30 m. Chiều dài = (30 + 10):2 = 20 m. Chiều rộng = 20 - 10 = 10 m. Diện tích = 20 x 10 = 200 (m²)."
          }
        ]
      }
    ]
  },

  thoi_gian_giay_the_ki: {
    title: "Bài: Giây, thế kỉ & Đơn vị đo thời gian",
    subtitle: "Nhận biết đơn vị giây, thế kỉ và cách xác định năm thuộc thế kỉ nào",
    category: "Đại lượng và Đo lường",
    icon: "⏳",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "1 phút bằng bao nhiêu giây?",
            options: ["10 giây", "60 giây", "100 giây", "3600 giây"],
            correctIndex: 1,
            explanation: "1 phút = 60 giây; 1 giờ = 60 phút = 3600 giây."
          },
          {
            question: "1 thế kỉ bằng bao nhiêu năm?",
            options: ["10 năm", "100 năm", "1000 năm", "50 năm"],
            correctIndex: 1,
            explanation: "1 thế kỉ = 100 năm."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Từ năm 1 đến năm 100 là thế kỉ thứ mấy?",
            options: ["Thế kỉ 0", "Thế kỉ I (thứ nhất)", "Thế kỉ II", "Thế kỉ X"],
            correctIndex: 1,
            explanation: "Từ năm 1 đến năm 100 là thế kỉ thứ nhất (thế kỉ I)."
          },
          {
            question: "Bác Hồ đọc Tuyên ngôn Độc lập năm 1945. Năm đó thuộc thế kỉ nào?",
            options: ["Thế kỉ XIX", "Thế kỉ XX", "Thế kỉ XXI", "Thế kỉ XVIII"],
            correctIndex: 1,
            explanation: "Từ năm 1901 đến năm 2000 là thế kỉ hai mươi (thế kỉ XX)."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Năm 2026 hiện nay thuộc thế kỉ nào?",
            options: ["Thế kỉ XX", "Thế kỉ XXI", "Thế kỉ XXII", "Thế kỉ XIX"],
            correctIndex: 1,
            explanation: "Từ năm 2001 đến năm 2100 thuộc thế kỉ hai mươi mốt (thế kỉ XXI)."
          },
          {
            question: "Đổi: 2 phút 15 giây sang giây:",
            options: ["125 giây", "135 giây", "215 giây", "75 giây"],
            correctIndex: 1,
            explanation: "2 phút = 120 giây. 120 + 15 = 135 giây."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Chiến thắng Điện Biên Phủ diễn ra vào năm 1954. Tính đến năm 2024 là tròn bao nhiêu năm?",
            options: ["60 năm", "70 năm", "80 năm", "50 năm"],
            correctIndex: 1,
            explanation: "2024 - 1954 = 70 năm."
          },
          {
            question: "Vận động viên Mai chạy cự li 100 m hết 15 giây. Bạn Hùng chạy hết 1/4 phút. Hỏi ai chạy nhanh hơn?",
            options: [
              "Hùng chạy nhanh hơn",
              "Hai bạn chạy bằng nhau",
              "Mai chạy nhanh hơn",
              "Không so sánh được"
            ],
            correctIndex: 1,
            explanation: "1/4 phút = 60 : 4 = 15 giây. Do đó cả hai bạn chạy bằng nhau!"
          }
        ]
      }
    ]
  },

  hinh_binh_hanh: {
    title: "Bài: Hình bình hành và công thức tính diện tích",
    subtitle: "Nhận biết hai cặp cạnh đối song song bằng nhau và công thức S = a x h",
    category: "Hình học",
    icon: "📐",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Hình bình hành là hình có đặc điểm nào dưới đây?",
            options: [
              "4 góc đều vuông",
              "Hai cặp cạnh đối diện song song và bằng nhau",
              "4 cạnh đều bằng nhau",
              "Chỉ có một cặp cạnh song song"
            ],
            correctIndex: 1,
            explanation: "Định nghĩa SGK: Hình bình hành có hai cặp cạnh đối diện song song và bằng nhau."
          },
          {
            question: "Trong hình bình hành ABCD, cạnh AB song song và bằng cạnh nào?",
            options: ["Cạnh BC", "Cạnh CD", "Cạnh AD", "Đường chéo AC"],
            correctIndex: 1,
            explanation: "Trong hình bình hành ABCD, AB // CD và AB = CD; AD // BC và AD = BC."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Muốn tính diện tích hình bình hành có độ dài đáy là a và chiều cao là h (cùng đơn vị đo), ta làm thế nào?",
            options: [
              "S = (a + h) x 2",
              "S = a x h",
              "S = a x h : 2",
              "S = a x 4"
            ],
            correctIndex: 1,
            explanation: "Quy tắc: Diện tích hình bình hành bằng độ dài đáy nhân với chiều cao (cùng một đơn vị đo): S = a x h."
          },
          {
            question: "Nếu biết diện tích S và chiều cao h của hình bình hành, muốn tìm độ dài đáy a ta lấy:",
            options: ["a = S x h", "a = S : h", "a = S - h", "a = S + h"],
            correctIndex: 1,
            explanation: "Vì S = a x h nên độ dài đáy a = S : h."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Một hình bình hành có độ dài đáy là 12 cm, chiều cao tương ứng là 8 cm. Diện tích của hình bình hành đó là:",
            options: ["40 cm²", "96 cm²", "48 cm²", "20 cm²"],
            correctIndex: 1,
            explanation: "Diện tích = 12 x 8 = 96 (cm²)."
          },
          {
            question: "Một hình bình hành có độ dài đáy là 2 dm, chiều cao là 15 cm. Diện tích hình bình hành đó là:",
            options: ["30 cm²", "300 cm²", "35 cm²", "150 cm²"],
            correctIndex: 1,
            explanation: "Đổi 2 dm = 20 cm (cùng đơn vị đo). Diện tích = 20 x 15 = 300 (cm²)."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một mảnh đất trồng hoa hình bình hành có độ dài đáy 25 m, chiều cao kém đáy 5 m. Diện tích mảnh đất đó là:",
            options: ["450 m²", "500 m²", "600 m²", "250 m²"],
            correctIndex: 1,
            explanation: "Chiều cao là: 25 - 5 = 20 (m). Diện tích mảnh đất: 25 x 20 = 500 (m²)."
          },
          {
            question: "Một hình bình hành có diện tích 150 cm², độ dài đáy là 15 cm. Chiều cao của hình bình hành là:",
            options: ["5 cm", "10 cm", "15 cm", "20 cm"],
            correctIndex: 1,
            explanation: "Chiều cao = 150 : 15 = 10 (cm)."
          }
        ]
      }
    ]
  },

  hinh_thoi: {
    title: "Bài: Hình thoi và công thức tính diện tích",
    subtitle: "Đặc điểm hai đường chéo vuông góc và công thức S = (m x n) : 2",
    category: "Hình học",
    icon: "🔶",
    stages: [
      {
        stageNum: 1, name: "Khởi Động",
        questions: [
          {
            question: "Hình thoi có đặc điểm nào dưới đây?",
            options: [
              "Chỉ có 2 cạnh bằng nhau",
              "Hai cặp cạnh đối diện song song và 4 cạnh bằng nhau",
              "Có 4 góc vuông",
              "Không có cạnh nào song song"
            ],
            correctIndex: 1,
            explanation: "Hình thoi có hai cặp cạnh đối diện song song và bốn cạnh bằng nhau."
          },
          {
            question: "Hai đường chéo của hình thoi có đặc điểm gì đặc biệt?",
            options: [
              "Song song với nhau",
              "Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường",
              "Luôn bằng nhau",
              "Không bao giờ cắt nhau"
            ],
            correctIndex: 1,
            explanation: "SGK Toán 4: Hai đường chéo của hình thoi vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường."
          }
        ]
      },
      {
        stageNum: 2, name: "Khám Phá",
        questions: [
          {
            question: "Công thức tính diện tích hình thoi có độ dài hai đường chéo là m và n (cùng đơn vị đo) là:",
            options: [
              "S = m x n",
              "S = (m x n) : 2",
              "S = (m + n) x 2",
              "S = m + n"
            ],
            correctIndex: 1,
            explanation: "Quy tắc: Diện tích hình thoi bằng tích của độ dài hai đường chéo chia cho 2 (cùng đơn vị đo): S = (m x n) : 2."
          },
          {
            question: "Một hình thoi có độ dài hai đường chéo là 8 cm và 6 cm. Diện tích của hình thoi là:",
            options: ["48 cm²", "24 cm²", "14 cm²", "28 cm²"],
            correctIndex: 1,
            explanation: "Diện tích = (8 x 6) : 2 = 48 : 2 = 24 (cm²)."
          }
        ]
      },
      {
        stageNum: 3, name: "Luyện Tập",
        questions: [
          {
            question: "Một hình thoi có độ dài hai đường chéo là 15 cm và 20 cm. Diện tích của hình thoi là:",
            options: ["300 cm²", "150 cm²", "75 cm²", "35 cm²"],
            correctIndex: 1,
            explanation: "Diện tích = (15 x 20) : 2 = 300 : 2 = 150 (cm²)."
          },
          {
            question: "Một hình thoi có độ dài hai đường chéo là 4 dm và 30 cm. Diện tích hình thoi đó là:",
            options: ["120 cm²", "600 cm²", "60 dm²", "1200 cm²"],
            correctIndex: 1,
            explanation: "Đổi 4 dm = 40 cm. Diện tích = (40 x 30) : 2 = 1200 : 2 = 600 (cm²)."
          }
        ]
      },
      {
        stageNum: 4, name: "Vận Dụng",
        questions: [
          {
            question: "Một tấm kính trang trí hình thoi có độ dài hai đường chéo là 12 dm và 10 dm. Diện tích tấm kính đó là:",
            options: ["120 dm²", "60 dm²", "44 dm²", "30 dm²"],
            correctIndex: 1,
            explanation: "Diện tích tấm kính là: (12 x 10) : 2 = 60 (dm²)."
          },
          {
            question: "Một hình thoi có diện tích 40 cm², một đường chéo dài 8 cm. Độ dài đường chéo kia là:",
            options: ["5 cm", "10 cm", "12 cm", "16 cm"],
            correctIndex: 1,
            explanation: "Độ dài đường chéo kia = (40 x 2) : 8 = 80 : 8 = 10 (cm)."
          }
        ]
      }
    ]
  }
};
