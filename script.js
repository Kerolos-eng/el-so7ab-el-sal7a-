const friends = [
  {
    name: "أحمد",
    nick: "المنظم",
    hobby: "بيحب الكورة والتخطيط للخروجات",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "محمود",
    nick: "الجوكر",
    hobby: "دايماً بيضحكنا وبياخد أجمد صور",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "سيف",
    nick: "الهادئ",
    hobby: "بيعشق القهوة والكلام العميق",
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "عمر",
    nick: "المغامر",
    hobby: "أي رحلة فيها صحراء أو بحر لازم يبقى موجود",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "يوسف",
    nick: "الداعم",
    hobby: "واقِف جنب أي حد فينا وقت الزنقة",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "كريم",
    nick: "ملك البلاي ليست",
    hobby: "بيظبط الأغاني في كل خروجة",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
];

const container = document.getElementById("friends-list");

friends.forEach((friend) => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <img src="${friend.image}" alt="صورة ${friend.name}" loading="lazy" />
    <div class="card-content">
      <h3>${friend.name} - ${friend.nick}</h3>
      <p class="meta">${friend.hobby}</p>
    </div>
  `;

  container.appendChild(card);
});
