// ============================================================
// EBOOK CONTENT
// To add or edit text: update the sections array below.
// type: "cover"   — the opening cover page (first section)
// type: "front"   — front matter (no chapter number)
// type: "chapter" — numbered chapters (Chapter 1, 2, 3 …)
// Separate paragraphs within content using a blank line.
// ============================================================

const CHARS_PER_PAGE = 450; // Desktop page length. Mobile uses ~60% of this automatically.

const sections = [
  {
    type: "cover",
    title: "마음에서 들려오는 사랑의 소리",
    content: `영적독서

헨리 J.M. 나웬 지음 | 한정아 옮김

마음의 성으로 향하는 다리를 스스로 통제할 수 있을 때 비로소 너는 마음의 평화와 기쁨을 누릴 수 있으며 그 기쁨을 다른 사람들과 나눌 수 있게 될 것이다.`
  },
  {
    type: "front",
    title: "머리말",
    content: `이 책은 1987년 12월부터 1988년 6월까지 쓴 일기를 토대로 한 것이다. 당시는 내 인생에서 가장 힘들고 고통스러운 시기였다. 극심한 고뇌와 번민에 사로잡혀 있던 나는 과연 인생을 포기하지 않고 끝까지 살아갈 수 있을지 끝없이 회의하고 있었다. 나는 내 인생을 지탱해 오던 모든 것이 허물어졌다고 생각했다. 자존심, 삶과 일을 지속할 수 있는 힘, 사랑받고 있다는 느낌, 영혼의 치유를 바라는 마음뿐만 아니라 심지어 하느님께 대한 믿음까지도 허물어져 내렸다. 영적 삶에 대한 글을 쓰는 작가로서 하느님을 사랑하고 사람들에게 희망을 심어준다고 알려진 나 자신이 칠흑 같은 어둠 속에 혼자 내팽개쳐진 것 같은 두려움과 고통에 떨면서 하루하루를 보내고 있었다.

그 당시 나는 자신이 보잘것없는 미약하고 의미없는 존재라는 생각에 사로잡혀 있었다. 내 삶에 의미를 부여하던 모든 것이 한순간에 사라져 버렸고 나는 끝도 없는 나락으로 떨어져 버렸다고 생각했다.

지금 생각해도 이상한 것은 내가 진정으로 편히 쉴 안식처를 찾은 직후에 이런 시련이 찾아왔다는 사실이다.

나는 몇 년간의 교수생활을 마치고 정신장애자들의 공동체인 라르슈 공동체의 일원이 되었다. 라르슈의 형제 자매들은 내가 기대했던 것보다 훨씬 따뜻하고 기쁘게 나를 맞아주었으며, 감성적으로나 영적으로 성장할 수 있도록 안전하고 튼튼한 토대가 되어주었다. 이제 나는 세상에 부러울 것이 하나도 없을 정도로 충만한 기쁨을 느꼈는데 바로 그때부터 모든 것이 서서히 허물어져 내리기 시작한 것이다.

주변 사람들이 사랑하고 좋아하며 감사한다며 심지어 나를 존경하기까지 한다고 끊임없이 일깨워 주던 바로 그때, 나는 자신이 누구에게도 사랑받지 못하는 쓸모없는 존재라는 생각에 사로잡히게 되었다. 사람들이 팔을 벌리고 다가와 나를 안아주던 바로 그때, 나는 고뇌와 번민에 빠져 더이상 삶을 계속할 이유가 없다고 생각했다. 진정한 안식처를 찾은 바로 그때, 나는 집 없는 사람의 외로움을 느꼈다. 사람들이 나를 신앙심 깊은 신부라고 존경하던 바로 그때, 내 마음속에서는 하느님께 대한 믿음이 사라지고 있다는 생각을 했다. 사람들이 하느님께 더 가까이 다가갈 수 있도록 도와주었다고 고마워하던 바로 그때, 나는 하느님이 나를 버렸다고 생각했다. 이런 생각은 나를 무기력하게 만들었다. 고통 속에 눈물로 지새우는 잠 못 이루는 밤이 계속되었다. 어떠한 위로나 설득도 도움이 되지 못했다. 나는 더이상 다른 사람들의 문제에 관심을 기울일 수가 없게 되었다. 식욕도 사라져 버렸고 음악이나 미술, 심지어 자연의 아름다움까지도 감동을 주지 못했다.

칠흑 같은 어둠 속을 헤매고 다니는 기분이었다. 그때까지 전혀 느끼지 못했던 내 마음 깊은 곳의 어둠과 악마의 세계에서 터져 나오는 고통의 절규만이 내가 느낄 수 있었던 전부였다.

이와 같은 고통과 시련은 사랑하는 친구와의 우정이 갑자기 무너져 내리면서 시작되었다. 라르슈 공동체에서 몸과 마음이 나약한 형제 자매들과 함께 살면서 나는 그때까지 닫아두었던 마음의 빗장을 열게 되었다. 그러자 온전히 마음을 줄 수 있는 친구들이 하나 둘 늘어났다. 그런데 그 중에서도 특히 한 친구는 다른 사람과는 다른 방식으로 나를 사랑하고 이해해 주었다. 그와 나의 우정은 점점 깊어갔다. 나는 자신이 온전히 사랑받고 있다는 기쁨을 느낄 수 있었고 새로운 힘과 자신감을 얻게 되었다. 이것은 내겐 너무나 새로운 경험이었고 그로 인해 나는 기쁨과 평화를 누리며 생활할 수 있게 되었다. 그때까지 살아오면서 꼭꼭 닫아두었던 마음의 빗장이 완전히 열린 것 같았다.

그러나 이 충만한 우정이 결국 고통과 번민을 가져오게 되었다. 그 친구와의 우정으로 행복해하던 나는 얼마 지나지 않아 마음의 빗장을 열고 내게로 다가온 그 친구만으로는 내 마음을 채울 수 없다는 사실을 깨닫게 되었다. 점점 그에게 의존하는 마음이 커지더니 그를 나 혼자만 차지하고 싶다는 소유욕이 강해져 갔다. 그러다가 그와의 우정이 방해를 받기 시작하자 내 모든 생활이 허물어져 갔다. 버림받았다는 생각, 거부당하고 배신당했다는 생각이 걷잡을 수 없이 커져갔다. 극단은 서로 통한다는 말이 새삼 실감이 날 정도였다.

인간과의 어떠한 우정도 내 마음 깊은 곳에서 우러나오는 열망을 채울 수 없고 오직 하느님만이 내가 원하는 모든 것을 주실 수 있으며, 오직 예수님만이 내 길을 함께 가는 진정한 동반자라는 사실도 잘 알고 있었다. 그러나 이런 생각도 내 고통을 덜어주지는 못했다.

이윽고 나는 정신적으로나 육체적으로 나를 소진시키는 이 고통과 번민에서 벗어나기 위해서는 내 삶의 터전인 라르슈 공동체를 떠나 새로운 자유로 인도해 줄 새로운 사람들을 만나야 한다는 결론에 도달했다. 공동체의 특별 배려로 나는 안식의 시간을 갖게 되었고 공동체를 떠나 새로운 사람들을 만나 심리적·영적인 관심과 보살핌을 받았다. 공동체를 떠나 있던 6개월 동안에도 나는 결코 끝나지 않을 것 같은 번민 속에서 살았다. 그 동안 나를 보살펴 준 두 분 신부님은 결코 나를 혼자 내버려 두는 법이 없었다. 그들은 마치 상처받은 아이를 보살피는 부모처럼 흔들리는 나를 붙잡아 주었고 하루하루 힘겹게 살고 있는 나를 지켜봐 주었다.

지금 생각해도 놀라운 사실은 이런 고통과 시련의 시기에도 글쓰기를 멈추지 않았다는 것이다. 솔직히 말해 글을 쓰는 것은 고통과 번민으로부터 벗어나려고 몸부림치는 내게 유일한 탈출구가 되었다. 글을 쓰는 동안만은 절망에서 허우적거리는 나 자신을 멀찍이 떨어져서 바라볼 수 있었다. 거의 매일 나를 보살펴 주던 지도 신부님들과 대화를 나누고 나면 곧 나는 영적 묵상을 담은 글을 썼다. 어느날 신부님들과 나눈 매일매일의 대화와 묵상 주제를 가지고 글을 써야겠다는 생각이 들어 시작한 글쓰기였다.

이 묵상일기는 다른 사람들에게 보여주기 위해 쓴 것이 아니라 오로지 내 영혼을 위로하고 치유하기 위해 쓴 소박한 글이다.

글을 쓰기 시작한 처음 몇 주 동안은 고통과 번민이 오히려 더 심해지는 것 같았다. 그때까지 의식하지 못했던 고통이 더 생생하게 되살아났다. 소중한 친구와의 우정이 깨지면서 그때까지 꼭꼭 숨어 있던 내 영혼의 어두운 그림자와 맞닥뜨리게 되었고, 삶을 이어나가기 위해서는 그 어둠과 정면으로 맞서야만 했다. 늘 지극한 관심을 갖고 조용히 지켜봐 준 신부님들 덕분에 나는 빛을 향해 조금씩 조금씩 걸음을 내딛게 되었다. 그들의 보살핌과 또 자신과의 처절한 싸움이 없었다면 나는 끝없는 우울과 절망의 나락에 빠져 삶을 포기했을지도 모른다.

공동체로 돌아온 후 나는 두려움을 떨쳐버리지 못하면서도 그 동안 써온 묵상일기를 다시 읽어보았다. 일기에는 너무나도 치열하고 고통스러웠던 몸부림이 그대로 드 러나 있어서 나 외에 다른 누군가가 이 글을 읽는다는 것은 상상도 할 수 없었다. 오랜 친구이자 더블데이 출판사의 편집자인 빌 배리가 지극히 개인적이고 치열한 내 삶의 궤적을 담은 이 일기야말로 많은 사람들에게 큰 위로와 힘이 될 거라고 끈질기게 설득할 때도 나는 이 글을 출판하겠다는 엄두가 나지 않았다. 그래서 대신 렘브란트의 '돌아온 탕자'라는 그림에서 동기를 얻어 책을 쓰기 시작했고, 시련기에 묵상한 내용을 어느 정도 그 책에 담아놓았다.

그후 8년이 지난 어느날, 친구 웬디 그리어가 다시 한번 이 묵상일기를 책으로 펴내지 않겠느냐는 제안을 해왔다. 그래서 나는 깊이 간직해 두었던 일기를 꺼내 다시 읽어보면서 그 힘든 시간을 되돌아보았다. 그러자 그렇게 고통스러웠던 그 시기가 이번에는 온전한 영적인 자유와 희망, 창의력을 지닌 새로운 인간으로 태어나기 위해 필연적으로 겪어야 했던 정화의 시기로 여겨지면서 이 묵상일기가 다른 사람들에게 도움이 될 수도 있겠다는 생각이 들었다.

웬디를 비롯한 몇몇 친구는 내 책을 통해 나를 알게 된 사람들에게 자신이 경험한 개인적인 고통과 번민을 숨기지 말고 드러내는 것이 자신이 해야 할 일이라고 충고했다. 시련기가 없었다면 내가 다른 사람들의 영혼에 호소하는 책을 쓸 수 없었을 거라고도 했다. 그들은 내 글을 통해서 위로와 힘을 얻은 독자들에게 이 일기를 숨길 이유가 어디 있으며, 내 글이 지닌 호소력이 그만큼 힘든 대가를 치르고 얻어낸 것임을 알리는 것도 좋지 않은가고 설득했다.

이 일기를 읽는 독자들은 빛과 어둠, 희망과 절망, 그리고 사랑과 두려움이 동전의 양면처럼 늘 함께하며 진정한 영적 자유를 얻기 위해서는 그만큼 치열하고 힘든 투쟁을 치러야 하는 것임을 알게 될 것이라고도 했다.

결국 나는 그들의 설득에 넘어가고 말았다. 결코 다른 사람들에게 보이고 싶지 않았던 묵상일기를 빌 배리에게 넘겼고 그래서 이 책이 나오게 되었다. 이젠 내가 옳은 결정을 한 것이기를 바랄 뿐이다.`
  },
  {
    type: "front",
    title: "이 책을 읽는 독자들에게",
    content: `이 묵상일기를 단번에 읽어내려가는 것은 좋은 방법이 아니다. 이 글은 오랜 시간을 두고 쓰여진 것이며 따라서 독자들도 묵상을 하며 한 편 한 편 읽어 나가는 것이 좋겠다. 첫 페이지부터 순서대로 읽을 필요는 없다. 차례를 보면 글의 내용을 대략 알 수 있으므로 그때그때 필요하다고 생각되는 부분을 찾아서 읽어도 좋다. 이 묵상일기가 여러분의 생활에 소금과 같은 역할을 할 수 있기를 바란다. 그러나 한꺼번에 많은 소금을 넣으면 너무 짜지 않겠는가. 조금만 넣어도 음식의 간을 맞출 수 있는 소금처럼 이 책도 조금씩 조금씩 읽어 나가면 영혼을 풍요롭게 할 수 있을 것이다.`
  },
  {
    type: "chapter",
    title: "절망을 두려워하지 말라",
    content: `네 마음 깊은 곳에는 심연과도 같은 깊은 구멍이 있다. 지칠 줄 모르는 욕구를 충족시키는 데 몰두하며 살아가는 네가 이 절망의 구멍을 메우기란 불가능하다. 그렇다고 두 손 놓고 앉아 있으면 안 된다. 이 절망의 구멍을 두려워하며 피하지 말고 직접 맞닥뜨려 구멍을 서서히 메우도록 노력해야 한다.

커다란 입을 벌리고 우리를 빨아들이려는 절망의 구멍이 두려워서, 그리고 고통과 번민이 너무도 버거워서 도망치고 싶다는 유혹이 들 때가 많을 것이다. 그러나 고통과 두려움에 몸을 맡기고 허우적거리거나 다른 일에 정신이 팔려 치유해야 할 상처를 나 몰라라 방치해서는 안 된다.`
  },
  {
    type: "chapter",
    title: "하느님의 약속을 굳게 믿어라",
    content: `고민을 아무에게나 털어놓지 말아야 한다. 그렇게 털어놓았다가는 버림받았다는 느낌만 더 커질 수 있기 때문이다. 네 바람을 다른 사람들이 채워줄 수 있을 거라고 기대하지 말아라. 고민을 다른 사람들에게 털어놓으면서 그들이 위로해 줄 거라고 기대하다가는 결국엔 비웃음과 조롱거리만 될 뿐이다.

그러므로 외부 세계에 대해서는 빗장을 닫아걸고 고통 을 인내하며 자신의 마음과 하느님의 뜻이 무엇인지를 깊이 성찰해 보아야 한다. 언젠가 하느님은 네 고통을 함께 나눌 사람들을 보내주실 것이고, 그들은 너를 진실한 사랑으로 이끌 것이다.

하느님은 당신이 하신 약속을 꼭 지키신다. 죽기 전에 너는 그렇게도 갈망하던 사랑을 받고 있는 모습을, 그리고 하느님의 자녀로 온전히 받아들여진 네 모습을 발견할 수 있을 것이다. 그러나 하느님의 약속은 네가 기대하는 방식으로 이루어지지 않을 수도 있고, 네 욕구와 바람대로 이루어지지 않을 수도 있다. 그러나 하느님의 약속이 네 마음을 채우고 네 가장 큰 바람을 이루어 주실 것이 분명하다.

하느님의 약속을 굳게 믿기만 하면 된다. 다른 것을 다 빼앗기더라도 하느님의 약속에 대한 믿음만은 굳게 지켜야 한다. 그러면 이 믿음이 네 영혼을 치유해 줄 것이다.`
  },
  {
    type: "chapter",
    title: "진정한 자아를 찾아라",
    content: `이제 부모의 그늘에서 벗어날 때가 되었다. 너는 부모의 눈을 통해 자신을 확인하려 들고 그들의 자랑스러운 자녀가 되기 위해 애쓰는 것을 그만두어야 한다.

언제부터였는지 기억도 나지 않을 만큼 아주 오래전부터 너는 다른 사람들의 눈을 통해 자신의 정체성을 찾으려고 노력하고, 다른 사람들을 기쁘게 해주는 데만 열중해 왔다. 물론 그것을 전적으로 나쁘게만 볼 필요는 없다. 너는 소중한 사람들을 사랑하고 싶어했고 그래서 더 쉽게 마음을 줄 수 있었는지도 모른다. 하지만 이제는 그 동안 공들여 확보해 놓은 너를 지지해 주는 사람들을 포기하고 하느님만으로 충분하다는 믿음을 가져야 한다. 그리고 다른 사람을 기쁘게 해주려고 애쓰기보다는 진정한 자유인으로 거듭나도록 해야 한다.`
  },
  {
    type: "chapter",
    title: "마음에서 들려오는 소리에 귀를 기울여라",
    content: `너는 진정 새로운 인간으로 거듭나기를 바라는가? 그것을 위해 기꺼이 노력할 준비가 되어 있는가? 혹시 스스로는 어떤 노력도 하지 않으면서 다른 사람들이 도와주기만을 바라는 것은 아닌가?

새로운 인간으로 거듭나는 것은 네 혼자 힘으로 이룰 수 있는 일이 아니다. 의지력이 있다고 해서 가능한 일도 아니다. 거듭나는 방법을 알려주는 내면의 소리에 귀를 기울여야 한다. 너는 이미 그 목소리의 존재를 알고 있고, 종종 귀를 기울이기도 한다. 그러나 네가 무엇을 해야 하는지를 듣고 나면 곧 회의를 품기 시작하고 그 소리를 따를 수 없다는 핑계를 만들며, 공연히 다른 사람들의 의견을 구한다. 이렇게 되면 끝도 없이 모순된 생각과 감정, 의견에 휩싸여 네 마음속에 계신 하느님의 목소리는 흘려 듣게 된다. 결국 하느님이 아니라 주변 사람들에게 지나치게 의존하게 되는 것이다.

네 마음속 깊은 곳에서 들려오는 소리에 귀를 기울일 때만 자유와 기쁨으로 충만한 새로운 인간으로 거듭난다는 사실을 잊어서는 안 된다.`
  },
  {
    type: "chapter",
    title: "하느님께 의지하라",
    content: `네 마음속에는 신성과 인성이 분리된 채 존재하고 있다. 신성이 존재하는 곳에서는 하느님의 의지와 방식, 그리고 하느님의 사랑을 느낄 수 있다. 그러나 한편에는 사랑과 관심과 위로를 받기 원하는 인간적인 욕구가 존재한다. 이렇게 따로 떨어져 있는 인성과 신성이 조화를 이루도록 해야 한다.

네 욕구를 채워줄 수 있다고 생각되는 사람들에게 도움을 청하는 대신, 마음속에서 우리를 붙잡아 주고 보살펴 주는 하느님께 의지해야 한다. 공동체 안에서, 너를 사랑하는 사람들에게서 하느님의 모습을 보게 된다. 어느 누구도 너의 욕구를 모두 채워줄 수는 없다. 그러나 공동체는 너를 지탱시켜 줄 수 있고, 고통과 번민으로 흔들릴 때 붙잡아 주고 하느님의 사랑을 보여주는 사람들이 있다는 사실을 알게 해줄 것이다.`
  },
  {
    type: "chapter",
    title: "삶의 토대로 되돌아가라",
    content: `너는 '저를 사랑하시나요?'라고 물을 때 돌아오는 '그렇다.'라는 대답을 굳게 믿어야 한다. 실제로 그 대답이 진실이 아닐지도 모른다는 의혹이 일더라도 믿음을 버려서는 안 된다.

때로는 환락에 몸을 맡기고 되는 대로 살고 싶다는 생각이 걷잡을 수 없이 일어나기도 한다. 하지만 그렇게 한다고 해서 해답이 찾아지지 않는다는 사실을 너는 잘 알고 있다.

옛일을 되씹거나 죄책감이나 수치심을 느낀다고 해서 해답이 찾아질 리도 없다. 이런 태도는 결국 너를 방탕한 생활로 내몰고 네 삶의 토대를 뿌리째 뒤흔들어 놓을 것이다.

너는 튼튼한 삶의 토대가 있다는 것, 하느님의 사랑을 느끼지 못할 때조차도 그 사랑에 힘찬 목소리로 화답할 수 있는 토대가 있다는 것을 굳게 믿어야 한다. 지금 당장은 허무감에 사로잡혀 용기있게 '그렇다.'라고 말할 여력이 없을지 모른다.

그러나 그럴 때도 '하느님은 나를 사랑하시고 그 사랑만으로 충분하다.'라고 말할 수 있어야 한다. 그리고 세상을 살아가면서 힘들고 외로워지면 너를 지탱해 주는 그 튼튼한 토대로 언제든지 다시 돌아가야 한다.`
  },
  {
    type: "chapter",
    title: "사랑에는 한계가 있다",
    content: `다른 사람들이 '미안하지만 이 일만은 안 되겠는데…'라고 하면서 너와의 관계에 선을 그으려 하면 너는 거부당했다고 느끼며 좌절한다. 너는 자신이 바라는 것을 다른 사람들이 해주지 못할 수도 있다는 사실을 받아들이지 못한다. 너는 늘 끝없는 사랑과 관심을 받기를 갈망한다.

이제부터는 사랑에도 선을 긋도록 해야 한다. 물론 지금까지 살아온 방식과는 전혀 달라서 결코 쉽지 않을 것이다. 이제까지는 다른 사람들이 너에게 요구하는 것이면 무엇이든지 주고, 더 달라면 더 주곤 하다가 결국에는 지쳐서 끝내는 이용당했다는 생각을 했다면 이제부터는 달라져야 한다. 자신의 한계를 인정할 때 비로소 다른 사람들에게도 한계가 있음을 인정하고 그들을 존중하며 감사하게 될 것이다.

사랑하는 사람들에 대한 바람과 요구가 점점 커지게 되면 결국 그들은 네 요구에 질려 네 곁을 떠나게 된다.

그러므로 너는 스스로의 능력과 한계를 잘 파악해서 자신의 욕구를 어느 정도 억제할 수 있도록 노력해야 한다. 서로 진정으로 사랑하기 위해서는 스스로 인내하고 욕구를 억제하면서 기꺼이 상대방의 뜻을 들어줄 수 있어야 한다. 그리고 자신의 욕구를 억제하고 사랑하는 사람을 위해 의미있는 희생을 하기 위해서는 네 사랑의 한계를 인정할 줄 알아야 한다.`
  },
  {
    type: "chapter",
    title: "사랑의 신비를 알라",
    content: `네 사랑이 하느님으로부터 나온 것이라면 그 사랑은 영원하다. 이는 하느님의 선물이다. 너는 이 영원한 사랑을 다른 사람들과 나눌 수 있다. 다른 사람들이 더이상 너를 사랑하지 않는다고 해서 너도 그들을 사랑하지 않을 필요는 없다. 사람들끼리의 사랑은 변할 수 있지만 하느님이 주신 사랑은 다른 사람과 나누어도 늘 변함이 없다.

언젠가는 아무 대가도 바라지 않는 무조건적인 사랑을 할 수 있을 만큼 자유로워질 것이다. 그때가 되면 다른 사람들의 무조건적인 사랑도 부담스러워하지 않고 받아들일 수 있게 될 것이다. 너는 사랑을 받고 있으면서도 깨닫지 못할 때가 많다. 그리고 사랑하는 사람으로부터 받는 사랑이 아니면 무시해 버리기도 한다.

네가 하느님의 사랑하는 자녀임을 알고, 네 사랑의 한계를 인정하며 우리의 욕구를 억제한다면 오히려 자유로워져서 아무 대가도 바라지 않는 진정한 사랑을 할 수 있게 될 것이다. 이것이 바로 사랑의 신비다.`
  },
  {
    type: "chapter",
    title: "귀향",
    content: `잊지 말아야 할 것이 두 가지 있다. 하나는 네가 그토록 찾아 헤매던 사랑을 찾게 해주겠다고 한 하느님의 약속이고, 다른 하나는 하느님은 당신의 약속을 반드시 지키신다는 사실이다.

그러므로 이제는 방황을 끝내고 고향으로 돌아와 하느님만이 네가 원하는 것을 주실 수 있다는 사실을 믿자. 너는 사랑을 찾아 평생을 이리저리 헤매고 다녔다. 이제는 그 끝없는 방황에 종지부를 찍어야 할 때다. 하느님께서는 모든 것을 이룰 수 있는 충만한 사랑을 주신다는 사실을 믿어야 한다. 하느님은 네가 세상을 떠나기 전에 그토록 갈망하던 사랑과 행복을 맛보게 해주실 것이다. 그러니 그 약속을 믿고 지금 당장 방황을 끝내자.

그곳에서 너는 느끼게 될 것이고 평생 갈망하던 것을 얻게 될 것이다. 물론 사랑을 찾아 다시 방랑의 길을 떠나지 않기 위해서는 너를 붙잡아 줄 사람들의 도움이 필요하다. 그렇더라도 일단 고향에 돌아오면 영혼에 평화와 안식을 줄 사랑을 찾게 될 것이다.`
  },
  {
    type: "chapter",
    title: "다른 사람들의 한계를 이해하라",
    content: `너는 너를 받아들이지 않는 사람들의 말에 귀를 기울이는 경향이 있다. 그들은 너에 대해서 얘기하고 네 욕구와 바람에 귀를 기울이는 대신 자신의 문제와 한계, 욕구와 바람에 대해서 얘기하며 네 동정을 구한다. 물론 그들은 네가 못생겼다거나 인간성이 나쁘다거나 매력이 없다고는 얘기하지 않는다. 그들은 다만 네가 자신들이 줄 수 없는 것을 요구하고 있으며 그래서 자신들이 자유로워지기 위해서 거리를 둘 수밖에 없다고 말한다. 그러면 너는 슬프게도 그 말을 듣고, 그들이 너를 거부하는 것이라고 생각한다. 사실은 그들이야말로 두 팔을 벌려 맞아주시는 사랑의 하느님을 만나라고 이끌어 주는 사람들인데도 말이다.`
  },
  {
    type: "chapter",
    title: "하나가 되는 곳이 있음을 믿어라",
    content: `너는 감정과 정열과 느낌에 얽매이지 않고 살아가도록 부름받았다. 감정이나 정열은 다른 사람에게서 거부당할 때나 버림받은 것에 대한 반응이므로, 여기서 벗어나지 못하면 끊임없이 외로움과 질투, 심지어 분노까지 느끼게 된다.

너는 이런 감정에서 벗어나 안전하게 살 수 있는 곳이 있다는 사실을 믿어야 한다. 감정과 정열에서 벗어난다는 말은 적합하지 않을지도 모르겠다. 그것은 이런 인간적인 감정이 전혀 존재하지 않는다는 말로 해석될 수 있기 때문이다. 네가 편히 쉴 수 있는 곳은 이런 인간의 감정이 조화를 이루면서 존재하는 내면의 중심과 같은 곳이다.

너는 이 안식처에 대해서 별로 아는 바가 없으므로 두려움을 갖는 건 놀라운 일이 아니다. 그러나 이미 너는 이 안식처를 스쳐지나간 적이 있고 때로는 이곳에 들르기도 했다. 물론 대부분의 시간은 지극히 인간적인 감정과 정열에 사로잡혀 그 안에서 마음의 평화와 기쁨을 얻으려고 헛된 노력을 기울여 왔지만 말이다.

또한 너는 이 안식처가 하느님이 너와 함께하시는 장소라는 사실을 완전히 받아들이지 못한 채 네가 가진 모든 것을 잃어버릴지도 모르는 끝도 없는 나락이라고 두려워해 왔다. 그러니 이제부터라도 두려워하지 말아야 한다. 이곳에서 생명의 하느님이 두 팔 벌려 너를 맞아들이고 안식을 주실 것이라는 믿음을 가져야 한다.

이 안식처는 네 안의 모든 것이 하나가 될 수 있는 장소이기도 하다. 네 마음속에는 상반된 감정과 욕구가 공존하고 있다. 감정과 정열이 네 마음과는 따로 떨어져 존재하는 듯하고, 우리 몸의 욕구 역시 자아와는 따로 떨어져 있으며 생각과 꿈도 영적인 바람과 따로 분리되어 존재하는 듯하다.

너는 이 상반된 감정과 욕구가 조화를 이루도록 노력해야 한다. 하나 됨이야말로 육화의 기쁜 소식이다. 말씀이 사람이 되셨기에 너와 하느님이 함께 살 수 있는 안식처가 분명히 존재한다. 이 일치의 장소를 찾게 될 때 너는 그 안에서 진정한 자유를 누리며 살아가게 될 것이다.`
  },
  {
    type: "chapter",
    title: "직관을 믿어라",
    content: `너는 지금 특별한 시기를 보내고 있다. 이 기간 동안은 홀로 묵상하고 기도하며 다른 사람과의 만남을 자제하고 검소하게 살아가야 한다. 한동안 외출도 가급적 삼가고 전화도 줄이고 편지 쓰기도 자제해야 한다.

친구와 우정을 쌓아가고 성직생활을 성실히 하며 동시에 저작활동에도 힘을 다하고 싶다는 바람이 이루어진다고 해도 그것이 진정으로 네가 원하는 것이 아니라는 사실을 너는 잘 알고 있다. 그리고 다른 사람들에 대한 사랑과 관심이 줄어들지 않는다 해도 결국 네 가장 큰 소망과 절실한 욕구를 만족시켜 줄 사랑은 하느님 사랑뿐이라는 사실도 잘 알고 있다. 네 마음속에는 평화와 번민이 나란히 자리잡고 있어 하느님께 헌신하며 살고 싶다고 갈망하다가도 인간의 애정과 관심을 갈구하게 된다.

네가 해야 할 일이 무엇인지 분명히 알았다면 의심을 품지 말아야 한다. 그러면 친구와 일에서 벗어나 사는 것이나 신문과 재미있는 책을 멀리하며 사는 것을 더이상 두려워하지 않게 될 것이다. 또한 다른 사람들이 너에 대해 어떻게 말하고 생각하건 별로 신경을 쓰지 않게 될 것이다. 더 나아가 네가 다른 사람들에게서 잊혀지고 세상과 인연을 끊게 된다 하더라도 그 때문에 화를 내지는 않을 것이다.

너는 기도하는 것이 참으로 쉽다는 것을 알게 될 것이다. 얼마나 큰 은총인가! 다른 사람들이 극장이나 파티에 너를 초대하지 않았다고 해도 너는 더이상 소외감이나 버림받았다는 느낌을 갖지 않게 될 것이다. 오히려 혼자 있게 된 것이 행복하다고 생각할 것이다. 예수께 기도하며 그 말씀을 귀기울여 듣는 것은 그리 어려운 일이 아니다. 이제 너는 예수께서 얼마나 가까이 계신지 알고 있다. 예수께서는 사랑으로 너를 안전하게 붙잡아 주신다. 때로는 과거의 아픈 기억이나 미래에 대한 환상으로 마음이 아플 때도 있겠지만 그래도 예전만큼 두렵지는 않을 것이다. 이런 아픔과 환상이야말로 너를 예수 곁에 가까이 있게 해주는 자극제가 될 수 있다.

네 마음속에서 무언가 새로운 일이 일어나고 있다는 사실을 너는 알고 있다. 이제까지 너를 지배하던 생각과 욕구와 감정이 서서히 사라지는 동시에 무언가 새로운 것이 생겨나고 있음이 분명하다. 그러므로 너는 이 변화에 주목하고 관심을 기울이는 동시에 평온을 잃지 않도록 노력해야 한다. 그런데도 한편으로는 이제까지 너를 지배해 왔던 태도나 생활 방식을 완전히 바꾸어야 하는 데 대해서, 그리고 앞으로 네 앞에 펼쳐지게 될 다양한 미래상에 대해서 어느 정도 포기하지 않으면 안 된다는 회의와 불안이 싹트게 될 것이다. 하지만 이런 의문이 아무 의미가 없다는 사실 또한 곧 깨닫게 될 것이다. 그것은 이제까지 네 생각과 말과 행동의 토대가 되어왔던 환경이 완전히 바뀌게 될 것이기 때문이다.

이런 생각을 하다 보면 갑자기 슬픔이 찾아들지도 모른다. 참기 힘든 외로움이 엄습할지도 모른다. 그러나 이제는 두려워하지 않을 것이다. 네가 비록 나약할지라도 안전하다는 사실을 잘 알고 있으며, 예수님이야말로 안식처이며 네 인생의 다음 걸음을 내딛게 도와주시는 인도자라는 사실을 잘 알고 있기 때문이다.`
  },
  {
    type: "chapter",
    title: "자신의 몸을 아끼고 사랑하라",
    content: `너는 네 몸을 속되다고 생각하며 경멸해 왔고 정복해야 할 적이라고 생각해 왔다. 그러나 하느님은 네 영혼뿐만 아니라 네 몸까지도 사랑하신다. 하느님은 네가 몸을 아끼고 사랑하여 부활에 이르기를 바라신다. 네가 육체를 가지지 못했다면 영원한 삶에 이르는 것은 불가능하다.

그렇다면 어떻게 하는 것이 몸을 사랑하고 아끼는 것일까? 무엇보다도 사랑하고 사랑받는 일을 두려워하지 말아야 한다. 몸은 서로 만지고 보듬어 주기를 바란다. 이런 욕구는 부끄러워하거나 숨겨야 할 일이 아니다. 더 나아가 너는 진정한 사랑을 주고받고자 하는 욕구를 어떻게 충족시킬 수 있을지 고민해야 한다. 육체의 말초적인 욕구만 충족시키고자 하는 욕망에서 벗어날 수 있다면 너는 육체를 아끼고 사랑하며 영혼과 화합을 이룰 수 있을 것이다.

하느님은 예수님의 몸을 빌려 인간이 되셨다. 성령이 마리아에게 임하시자 마리아의 영혼과 몸의 적대관계가 사라지고 화합이 이루어졌다. 이에 따라 하느님의 성령이 인간의 영혼과 화합하게 되었고 인간의 육체는 부활을 통해 하느님께 가까이 갈 수 있게 되었다. 모든 인간의 몸은 창조주이신 하느님의 품안에서 영원히 살 수 있다는 새로운 희망을 갖게 되었다. 예수께서 태어나심으로 인해서 우리의 몸은 진정한 집을 찾게 된 것이다.`
  },
  {
    type: "chapter",
    title: "새로운 나라로 들어가라",
    content: `너는 새로운 나라가 어떤 곳인지 어느 정도는 알고 있다. 그러나 현재 이곳에서 너는 완전한 평화를 누리지 못한다 할지라도 어느 정도 편안함을 느끼며 살고 있다. 이곳에서 오랜 동안 살아오면서 기쁨과 행복을 느끼기도 했고 고통과 슬픔의 순간을 맛보기도 했다. 그러면서 이곳에 너무나 익숙해져 버렸다. 비록 네 마음이 진정으로 원하는 것을 얻지 못하고 있지만 그래도 이곳은 네 삶의 일부가 되어버린 곳이다.

이제 너는 정든 이 터전을 떠나 사랑하는 하느님이 살고 계신 새로운 나라로 가야 한다는 사실을 알게 되었다. 그런데 어떻게 가야 하는가 하는 문제가 남는다. 이제까지 너를 이끌어 주고 도와주었던 것들은 아무 도움이 되지 않는다. 그렇다면 어떻게 새로운 나라로 들어갈 수 있 는가? 유일한 길은, 새로운 나라에서는 네가 진정으로 바라는 것을 찾을 수 있다는 믿음을 갖는 것이다. 그것은 결국 이제까지 네가 소중하게 여기던 가치를 포기해야 한다는 걸 의미한다. 다른 사람들에게 영향력을 행사하고, 사회에서 성공하며, 사람들에게 사랑받고 칭찬받고 싶어하는 마음을 버리는 것이다.

이제까지 의지해 온 이런 가치를 포기하고, 새로운 나라에 들어가면 그 동안 진정으로 바라던 것을 얻게 되리라는 믿음을 갖는 것은 매우 어려운 일이기도 하다. 하지만 이런 믿음이야말로 더없이 중요하다. 새로운 나라에 들어가야 한다는 소명을 받은 네가 택할 수 있는 유일한 길은 그 동안 소중하게 생각했던 모든 가치를 버리고 벌거벗은 나약한 인간의 모습 그대로 믿음에만 의지한 채 그곳으로 향하는 것이다.

하지만 이런 온전한 믿음을 갖기란 결코 쉬운 일이 아니므로 너는 새로운 나라와 현재 살고 있는 이곳의 경계를 넘나들며 망설일 때가 많다. 한동안은 새로운 나라에 들어가서도 진정한 기쁨을 맛보며 행복해할지 모른다. 그러나 그 후 두려움과 떠나온 곳에 대한 미련으로 발길을 되돌리게 될 것이다. 그래서 다시 돌아와 보면 더이상 매력적인 곳도, 네가 바라던 곳도 아니라는 사실을 깨닫게 되어 깊이 절망하게 될 것이다. 그러므로 두렵더라도 새로운 나라를 향해 용기있게 걸음을 내디뎌야 한다. 그곳으로 가면 진정한 행복과 평안을 느끼게 될 거라고 굳게 믿으면서 말이다.`
  }
];

// ============================================================
// PAGINATION ENGINE — no edits needed below this line
// ============================================================

function getCharsPerPage() {
  return window.innerWidth <= 600
    ? Math.round(CHARS_PER_PAGE * 0.6)
    : CHARS_PER_PAGE;
}

let allPages = [];
let currentPage = 0;
let fontSize = parseInt(localStorage.getItem('ebook_font_size') || '17');

function buildPages() {
  allPages = [];
  const charsPerPage = getCharsPerPage();
  const sectionStartIndices = []; // page index before TOC insertion

  // Assign chapter numbers to "chapter" sections
  let chapterCounter = 0;
  sections.forEach(s => {
    s.chapterNum = s.type === 'chapter' ? ++chapterCounter : null;
  });

  // Paginate each section
  sections.forEach((section, sectionIdx) => {
    sectionStartIndices.push(allPages.length);

    const paragraphs = section.content
      .split('\n\n')
      .map(p => p.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
      .filter(p => p.length > 0);

    const sectionPages = [];
    let currentParas = [];
    let currentLen = 0;

    paragraphs.forEach(para => {
      if (currentLen > 0 && currentLen + para.length > charsPerPage) {
        sectionPages.push(currentParas.join('\n\n'));
        currentParas = [para];
        currentLen = para.length;
      } else {
        currentParas.push(para);
        currentLen += para.length;
      }
    });
    if (currentParas.length > 0) sectionPages.push(currentParas.join('\n\n'));

    sectionPages.forEach((text, pageIdx) => {
      allPages.push({
        sectionTitle: section.title,
        sectionType:  section.type,
        chapterNum:   section.chapterNum,
        text,
        isCover:    section.type === 'cover',
        isFirstPage: pageIdx === 0,
        sectionIdx,
        pageIdx
      });
    });
  });

  // Build TOC entries — after insertion, every non-cover section shifts +1
  const tocEntries = sections
    .map((section, i) => {
      if (section.type === 'cover') return null;
      return {
        sectionTitle: section.title,
        sectionType:  section.type,
        chapterNum:   section.chapterNum,
        sectionIdx:   i,                     // for TTS "now playing" highlight
        pageIdx: sectionStartIndices[i] + 1  // +1 for TOC page inserted at index 1
      };
    })
    .filter(Boolean);

  // Insert the TOC page at position 1 (right after cover)
  allPages.splice(1, 0, { isToc: true, tocEntries });
}

// ── Helpers ──────────────────────────────────────────────────

function makeParagraphsHtml(text) {
  return text.split('\n\n').map(p => `<p>${p}</p>`).join('');
}

function contHeaderLabel(page) {
  return page.chapterNum
    ? `Ch. ${page.chapterNum}  ${page.sectionTitle}`
    : page.sectionTitle;
}

// ── Render ───────────────────────────────────────────────────

function renderPage(idx) {
  const page = allPages[idx];
  const card = document.getElementById('bookCard');

  card.style.opacity = '0';

  setTimeout(() => {
    if (page.isToc) {
      renderToc(card, page);
    } else if (page.isCover) {
      renderCover(card, page);
    } else if (page.isFirstPage) {
      renderSectionFirst(card, page);
    } else {
      renderSectionCont(card, page);
    }

    applyFontSize();
    updateTtsForPage();   // refresh TTS button visibility + speaking indicator
    card.style.opacity = '1';
  }, 180);

  currentPage = idx;
  document.getElementById('pageIndicator').textContent = `Page ${idx + 1} of ${allPages.length}`;
  document.getElementById('prevBtn').disabled  = idx === 0;
  document.getElementById('nextBtn').disabled  = idx === allPages.length - 1;
  document.getElementById('firstBtn').disabled = idx === 0;
}

function renderCover(card, page) {
  const parts = page.text.split('\n\n');
  const genre  = parts[0] || '';
  const author = parts[1] || '';
  const quote  = parts.slice(2).join('\n\n');

  card.className = 'book-card cover';
  card.innerHTML = `
    <div class="cover-genre">${genre}</div>
    <div class="cover-title">${page.sectionTitle}</div>
    <div class="cover-author">${author}</div>
    <div class="cover-divider"></div>
    <div class="cover-quote">${quote}</div>
  `;
}

function renderToc(card, page) {
  card.className = 'book-card toc';

  const frontEntries   = page.tocEntries.filter(e => e.sectionType === 'front');
  const chapterEntries = page.tocEntries.filter(e => e.sectionType === 'chapter');

  const frontHtml = frontEntries.map(e => `
    <div class="toc-entry" data-page="${e.pageIdx}" data-section="${e.sectionIdx}">
      <span class="toc-ch"></span>
      <span class="toc-entry-title is-front">${e.sectionTitle}</span>
      <button class="toc-tts-btn" data-section="${e.sectionIdx}" aria-label="이 장 듣기" title="이 장 듣기">&#9654;</button>
      <span class="toc-page-num">${e.pageIdx + 1}</span>
    </div>
  `).join('');

  const chapterHtml = chapterEntries.map(e => `
    <div class="toc-entry" data-page="${e.pageIdx}" data-section="${e.sectionIdx}">
      <span class="toc-ch">Ch.${e.chapterNum}</span>
      <span class="toc-entry-title">${e.sectionTitle}</span>
      <button class="toc-tts-btn" data-section="${e.sectionIdx}" aria-label="이 장 듣기" title="이 장 듣기">&#9654;</button>
      <span class="toc-page-num">${e.pageIdx + 1}</span>
    </div>
  `).join('');

  const separatorHtml = frontEntries.length && chapterEntries.length
    ? '<div class="toc-separator"></div>'
    : '';

  card.innerHTML = `
    <div class="toc-header">목차</div>
    <div class="toc-list">
      ${frontHtml}
      ${separatorHtml}
      ${chapterHtml}
    </div>
  `;

  card.querySelectorAll('.toc-entry').forEach(el => {
    el.addEventListener('click', () => goTo(parseInt(el.dataset.page)));
  });

  // Per-chapter play button — triggers TTS for that chapter without navigating
  card.querySelectorAll('.toc-tts-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      const sIdx = parseInt(btn.dataset.section, 10);
      if (Number.isFinite(sIdx)) ttsPlaySection(sIdx);
    });
  });
}

function renderSectionFirst(card, page) {
  const eyebrow = page.chapterNum ? `Chapter ${page.chapterNum}` : '';

  card.className = 'book-card chapter-first';
  card.innerHTML = `
    <div class="chapter-header">
      ${eyebrow ? `<div class="chapter-eyebrow">${eyebrow}</div>` : ''}
      <div class="chapter-title">${page.sectionTitle}</div>
    </div>
    <div class="page-text">${makeParagraphsHtml(page.text)}</div>
  `;
}

function renderSectionCont(card, page) {
  card.className = 'book-card chapter-cont';
  card.innerHTML = `
    <div class="chapter-header">
      <span class="chapter-title">${contHeaderLabel(page)}</span>
    </div>
    <div class="page-text">${makeParagraphsHtml(page.text)}</div>
  `;
}

// ── Font size ─────────────────────────────────────────────────

function applyFontSize() {
  const target = document.querySelector('.page-text') || document.querySelector('.cover-quote');
  if (target) target.style.fontSize = fontSize + 'px';
  localStorage.setItem('ebook_font_size', fontSize);
}

// ── Navigation ────────────────────────────────────────────────

function goTo(idx) {
  if (idx < 0 || idx >= allPages.length) return;
  renderPage(idx);
}

// ── Init ──────────────────────────────────────────────────────

buildPages();
renderPage(0);

document.getElementById('firstBtn').addEventListener('click', () => goTo(0));
document.getElementById('prevBtn').addEventListener('click',  () => goTo(currentPage - 1));
document.getElementById('nextBtn').addEventListener('click',  () => goTo(currentPage + 1));

document.getElementById('increaseFont').addEventListener('click', () => {
  if (fontSize < 24) { fontSize += 2; applyFontSize(); }
});
document.getElementById('decreaseFont').addEventListener('click', () => {
  if (fontSize > 13) { fontSize -= 2; applyFontSize(); }
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentPage + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(currentPage - 1);
  if (e.key === 'Home') goTo(0);
});

// ── Swipe navigation (mobile) ─────────────────────────────────
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  // Don't intercept swipes on the scrollable TOC page
  if (allPages[currentPage] && allPages[currentPage].isToc) return;

  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  // Must be clearly horizontal (2× wider than tall) and at least 50px
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 2) {
    dx < 0 ? goTo(currentPage + 1) : goTo(currentPage - 1);
  }
}, { passive: true });

// ── Rebuild pages on orientation / resize change ──────────────
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const saved = currentPage;
    buildPages();
    renderPage(Math.min(saved, allPages.length - 1));
  }, 300);
});

// ============================================================
// TEXT-TO-SPEECH
// Two engines, picked at runtime from settings:
//   • "elevenlabs" — calls the ElevenLabs API for an AI-generated
//     audiobook-style Korean narration (multilingual_v2 model). Audio
//     is fetched as MP3, played via a single hidden <audio> element,
//     and cached per-chapter as a blob URL so repeat plays are free.
//   • "browser"    — falls back to the Web Speech API (speechSynthesis)
//     with a preferred ko-KR female voice. No API key required.
// The user picks the engine + provides their key in the settings dialog;
// settings live in localStorage and never leave the device.
// No specific real person's voice is cloned.
// ============================================================

const TTS_LANG = 'ko-KR';

// Voice names that tend to be warm Korean female narrators across
// common platforms. We probe by substring, in priority order.
const TTS_PREFERRED_VOICES = [
  'Yuna',                // Apple (iOS / macOS) Korean female
  'Heami',               // Microsoft Korean (Edge) — female
  'Sun-Hi',              // Microsoft Korean (older) — female
  'Google 한국의',        // Chrome desktop — Korean
  'Korean (South Korea)' // generic fallback label
];

let ttsVoice = null;
let ttsState = 'idle';      // 'idle' | 'playing' | 'paused'
let ttsSectionIdx = -1;     // section currently being spoken
let ttsQueueLen = 0;        // remaining utterances (browser engine)
let ttsToastTimer = null;
let ttsActiveEngine = 'browser';   // 'browser' | 'api' — engine handling current playback
let ttsLoadingSection = -1;        // section idx whose audio is being fetched

// ── External-API engine settings (ElevenLabs) ─────────────────
const TTS_API_DEFAULTS = {
  voiceId: 'jB1Cifc2UQbq1gR3wnb0',  // "Brian" — warm, deep narrator (male)
  modelId: 'eleven_multilingual_v2'
};

let ttsProvider     = 'browser';   // 'browser' | 'elevenlabs'
let ttsApiKey       = '';
let ttsApiVoiceId   = TTS_API_DEFAULTS.voiceId;

// In-memory cache of chapter audio URLs. Map<sectionIdx, url>.
// The URL may be a static path (e.g. "audio/3.mp3") or a blob: URL
// returned by URL.createObjectURL(). Survives the session.
const ttsAudioCache = new Map();

// Result of the existence probe for each pre-generated static file.
// Map<sectionIdx, 'present' | 'absent'>. We probe lazily and remember
// the answer for the rest of the session, so each chapter costs at
// most one HEAD request.
const ttsStaticProbe = new Map();

let ttsAudioEl = null;

// Path to the optional pre-generated audio for a section. Relative so
// the same code works at the domain root or under a sub-path (GitHub
// Pages project sites, custom subdirectories, etc.).
function staticAudioPath(sIdx) {
  return `audio/${sIdx}.mp3`;
}

// Returns the static URL when the file exists, otherwise null. The
// HEAD request is fast and runs at most once per chapter per session.
async function getStaticAudioUrl(sIdx) {
  const cached = ttsStaticProbe.get(sIdx);
  if (cached === 'absent')  return null;
  if (cached === 'present') return staticAudioPath(sIdx);

  const url = staticAudioPath(sIdx);
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.ok) {
      ttsStaticProbe.set(sIdx, 'present');
      return url;
    }
  } catch (_) { /* network / CORS / file:// — treat as absent */ }
  ttsStaticProbe.set(sIdx, 'absent');
  return null;
}

// True when the runtime should call the ElevenLabs API for missing
// chapters. Always false now that the settings UI is gone — the live
// API path stays intact in the engine, but is unreachable from the UI.
// Pre-generated MP3s under audio/{i}.mp3 cover playback; chapters
// without a static file fall back to the browser TTS engine.
function isApiEngineActive() {
  return ttsProvider === 'elevenlabs' && !!ttsApiKey && !!ttsApiVoiceId;
}

function ensureAudioEl() {
  if (ttsAudioEl) return ttsAudioEl;
  ttsAudioEl = document.getElementById('ttsAudio');
  if (!ttsAudioEl) {
    ttsAudioEl = document.createElement('audio');
    ttsAudioEl.id = 'ttsAudio';
    ttsAudioEl.preload = 'auto';
    document.body.appendChild(ttsAudioEl);
  }
  ttsAudioEl.addEventListener('ended', () => {
    if (ttsActiveEngine !== 'api') return;
    ttsState = 'idle';
    ttsSectionIdx = -1;
    updateTtsForPage();
  });
  ttsAudioEl.addEventListener('error', () => {
    if (ttsActiveEngine !== 'api') return;
    ttsState = 'idle';
    ttsSectionIdx = -1;
    showTtsToast('오디오 재생 중 오류가 발생했습니다.');
    updateTtsForPage();
  });
  return ttsAudioEl;
}

function chapterPlainText(sIdx) {
  const section = sections[sIdx];
  if (!section) return '';
  return section.content.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
}

// POST to ElevenLabs and return an audio Blob.  Throws on any non-2xx.
async function fetchElevenLabsAudio(text) {
  if (!ttsApiKey)     throw new Error('API 키가 설정되어 있지 않습니다.');
  if (!ttsApiVoiceId) throw new Error('Voice ID가 비어 있습니다.');

  const endpoint = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(ttsApiVoiceId)}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'xi-api-key':   ttsApiKey,
      'Content-Type': 'application/json',
      'Accept':       'audio/mpeg'
    },
    body: JSON.stringify({
      text,
      model_id: TTS_API_DEFAULTS.modelId,
      voice_settings: {
        // Tuned for calm, warm, natural Korean narration with the male
        // voice — slightly higher style for less robotic delivery,
        // higher similarity to keep the voice grounded.
        stability:         0.5,
        similarity_boost:  0.85,
        style:             0.35,
        use_speaker_boost: true
      }
    })
  });

  if (!res.ok) {
    let msg = `API 오류 (${res.status})`;
    try {
      const data   = await res.json();
      const detail = data && (data.detail && (data.detail.message || data.detail) || data.message);
      if (detail) msg = typeof detail === 'string' ? detail : JSON.stringify(detail);
    } catch (_) {}
    throw new Error(msg);
  }
  return res.blob();
}

// Returns a playable URL for the chapter, generating + caching it on
// first request. Source preference, in order:
//   1. ttsAudioCache (already resolved this session)
//   2. /audio/{sIdx}.mp3 — pre-generated static file (no API call)
//   3. ElevenLabs API   — only when the user has configured a key
// Subsequent calls for the same chapter are instant. Throws Error with
// `kind: 'no-source'` when neither static nor API can serve, so the
// caller can transparently fall back to the browser engine.
async function ensureSectionAudioUrl(sIdx) {
  if (ttsAudioCache.has(sIdx)) return ttsAudioCache.get(sIdx);

  // 1. Pre-generated static file (free, fast, and shared by all users)
  const staticUrl = await getStaticAudioUrl(sIdx);
  if (staticUrl) {
    ttsAudioCache.set(sIdx, staticUrl);
    return staticUrl;
  }

  // 2. Fall back to the ElevenLabs API — but only if it's configured.
  if (!isApiEngineActive()) {
    const e = new Error('재생할 음성을 찾을 수 없습니다.');
    e.kind = 'no-source';
    throw e;
  }

  const text = chapterPlainText(sIdx);
  if (!text) throw new Error('읽을 본문이 없습니다.');
  // ElevenLabs caps a single request at ~5,000 characters. Refuse over
  // that rather than silently truncating.
  if (text.length > 4500) {
    throw new Error('이 장은 너무 길어 한 번에 생성할 수 없습니다 (최대 4,500자).');
  }

  const blob = await fetchElevenLabsAudio(text);
  const url  = URL.createObjectURL(blob);
  ttsAudioCache.set(sIdx, url);
  return url;
}

// Hard-stops both engines so we can switch cleanly between them.
function ttsCancelAll() {
  if (ttsAudioEl) {
    try {
      ttsAudioEl.pause();
      ttsAudioEl.removeAttribute('src');
      ttsAudioEl.load();
    } catch (_) {}
  }
  if (ttsSupported()) {
    try { window.speechSynthesis.cancel(); } catch (_) {}
  }
  ttsQueueLen = 0;
}

function ttsSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickKoreanVoice() {
  if (!ttsSupported()) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) return null;
  const koVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('ko'));
  if (!koVoices.length) return null;
  for (const name of TTS_PREFERRED_VOICES) {
    const match = koVoices.find(v => v.name && v.name.indexOf(name) !== -1);
    if (match) return match;
  }
  return koVoices[0];
}

function initTts() {
  ensureAudioEl();

  // Browser-engine voice fallback for chapters without a pre-generated
  // MP3. The voice is auto-picked (no UI for selection); we just keep
  // it fresh whenever the OS voice list updates asynchronously.
  if (ttsSupported()) {
    ttsVoice = pickKoreanVoice();
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      ttsVoice = pickKoreanVoice();
    });
  }

  document.getElementById('ttsPlayBtn').addEventListener('click', ttsTogglePlay);
  document.getElementById('ttsStopBtn').addEventListener('click', ttsStop);

  // Cancel any in-flight speech / audio if the page is unloaded
  window.addEventListener('beforeunload', () => {
    ttsCancelAll();
  });
}

// Split chapter text into sentence-sized chunks. Speaking many short
// utterances is more reliable than one giant one (Chrome cuts off long
// utterances, and chunks let us start playback faster).
function splitIntoSentences(text) {
  const cleaned = text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
  const matches = cleaned.match(/[^.?!。？！]+[.?!。？！]+|[^.?!。？！]+$/g);
  if (!matches) return [cleaned];
  return matches.map(s => s.trim()).filter(s => s.length > 0);
}

function getCurrentChapterSection() {
  const page = allPages[currentPage];
  if (!page || page.sectionIdx == null) return null;
  const section = sections[page.sectionIdx];
  if (!section) return null;
  if (section.type !== 'chapter' && section.type !== 'front') return null;
  return { section, idx: page.sectionIdx };
}

function speakSection(idx) {
  const section = sections[idx];
  if (!section) return;
  const sentences = splitIntoSentences(section.content);
  if (!sentences.length) return;

  ttsQueueLen = sentences.length;

  sentences.forEach((sentence, i) => {
    const u = new SpeechSynthesisUtterance(sentence);
    u.voice  = ttsVoice;
    u.lang   = TTS_LANG;
    u.rate   = 0.92;   // a touch slower for a calm narration feel
    u.pitch  = 1.05;   // slight lift; sounds gentler
    u.volume = 1.0;

    u.addEventListener('end', () => {
      ttsQueueLen = Math.max(0, ttsQueueLen - 1);
      if (ttsQueueLen === 0) {
        ttsState = 'idle';
        ttsSectionIdx = -1;
        updateTtsForPage();
      }
    });
    u.addEventListener('error', () => {
      ttsQueueLen = 0;
      ttsState = 'idle';
      ttsSectionIdx = -1;
      updateTtsForPage();
    });

    window.speechSynthesis.speak(u);
  });
}

// ── Playback router ──────────────────────────────────────────
// Public entry. Picks the right engine and starts / toggles playback for
// the given section. Used by per-chapter buttons + ttsTogglePlay.
//
// Routing strategy:
//   • First attempt the audio-element engine. ensureSectionAudioUrl()
//     will use a pre-generated file (audio/{sIdx}.mp3) if one exists,
//     so any visitor — even with no API key — gets the AI voice for
//     chapters that have been pre-generated.
//   • If neither a static file nor a configured API key is available,
//     ttsApiPlay() throws kind:'no-source' and we fall through to the
//     browser TTS engine inside ttsApiPlay's catch block.
//   • If the same chapter is already playing under the browser engine
//     (common: a previous play fell through to it), we route the
//     toggle directly to it so pause / resume keeps working.
function ttsPlaySection(sIdx) {
  const section = sections[sIdx];
  if (!section || (section.type !== 'chapter' && section.type !== 'front')) return;

  // If this chapter is currently being read by the browser engine,
  // keep it there for pause / resume. (The audio engine is preferred
  // for fresh starts; once playback is committed to an engine, stay.)
  if (ttsActiveEngine === 'browser' &&
      ttsSectionIdx === sIdx &&
      ttsState !== 'idle') {
    ttsBrowserPlay(sIdx);
    return;
  }

  ttsApiPlay(sIdx);
}

function ttsTogglePlay() {
  const here = getCurrentChapterSection();
  if (!here) return;
  ttsPlaySection(here.idx);
}

// Cancels both engines so we can switch cleanly (e.g. provider change,
// or the user hits Stop).
function ttsStop() {
  ttsCancelAll();
  ttsState = 'idle';
  ttsSectionIdx = -1;
  ttsLoadingSection = -1;
  updateTtsForPage();
}

// ── Browser engine (Web Speech API) ──────────────────────────
function ttsBrowserPlay(sIdx) {
  if (!ttsSupported()) {
    showTtsToast('이 브라우저는 음성 합성을 지원하지 않습니다.');
    return;
  }

  // Same section → toggle pause / resume
  if (ttsSectionIdx === sIdx && ttsActiveEngine === 'browser' && ttsState !== 'idle') {
    if (ttsState === 'playing') {
      window.speechSynthesis.pause();
      ttsState = 'paused';
      updateTtsForPage();
      return;
    }
    if (ttsState === 'paused') {
      window.speechSynthesis.resume();
      ttsState = 'playing';
      updateTtsForPage();
      return;
    }
  }

  // Fresh start (or switching chapter / engine)
  if (!ttsVoice) ttsVoice = pickKoreanVoice();
  if (!ttsVoice) {
    showTtsToast('현재 브라우저에 한국어 음성이 설치되어 있지 않습니다.');
    return;
  }
  ttsCancelAll();
  ttsActiveEngine = 'browser';
  ttsSectionIdx = sIdx;
  ttsState = 'playing';
  ttsLoadingSection = -1;
  speakSection(sIdx);
  updateTtsForPage();
}

// ── Audio-element engine (pre-generated static file OR ElevenLabs) ──
// Despite the historical name, this engine handles every <audio>-based
// playback, regardless of whether the URL came from /audio/{sIdx}.mp3
// or from the ElevenLabs API. ensureSectionAudioUrl() picks the source.
async function ttsApiPlay(sIdx) {
  const audio = ensureAudioEl();

  // Same section currently active under this engine → toggle pause
  if (ttsSectionIdx === sIdx && ttsActiveEngine === 'api' && ttsState !== 'idle') {
    if (ttsState === 'playing') {
      audio.pause();
      ttsState = 'paused';
      updateTtsForPage();
      return;
    }
    if (ttsState === 'paused') {
      try {
        await audio.play();
        ttsState = 'playing';
      } catch (e) {
        showTtsToast('재생을 시작할 수 없습니다.');
        ttsState = 'idle';
      }
      updateTtsForPage();
      return;
    }
  }

  // Switching chapter / engine — cancel anything in flight
  ttsCancelAll();
  ttsActiveEngine   = 'api';
  ttsSectionIdx     = sIdx;
  ttsLoadingSection = sIdx;
  ttsState          = 'idle';   // not "playing" yet — we're loading
  updateTtsForPage();           // shows the spinner

  try {
    const url = await ensureSectionAudioUrl(sIdx);

    // The user may have moved on while we were fetching
    if (ttsLoadingSection !== sIdx) return;

    audio.src = url;
    await audio.play();

    ttsState          = 'playing';
    ttsLoadingSection = -1;
    updateTtsForPage();
  } catch (err) {
    ttsLoadingSection = -1;

    // Nothing pre-generated AND no API key configured. Quietly fall
    // back to the browser TTS engine so the reader still gets audio.
    if (err && err.kind === 'no-source') {
      ttsActiveEngine = 'browser';
      ttsSectionIdx   = -1;
      ttsState        = 'idle';
      ttsBrowserPlay(sIdx);
      return;
    }

    ttsSectionIdx = -1;
    ttsState      = 'idle';
    showTtsToast(err && err.message ? err.message : '음성 생성에 실패했습니다.');
    updateTtsForPage();
  }
}

// Refreshes button visibility, button icons, loading state, and the
// "speaking" indicator on the chapter title / TOC entry. Called after
// each renderPage() and after every TTS state change.
function updateTtsForPage() {
  const ctrl     = document.getElementById('ttsControls');
  const playBtn  = document.getElementById('ttsPlayBtn');
  const stopBtn  = document.getElementById('ttsStopBtn');
  if (!ctrl || !playBtn || !stopBtn) return;

  const page = allPages[currentPage] || {};
  const isReadingPage = page.sectionType === 'chapter' || page.sectionType === 'front';
  const isSpeaking    = ttsState !== 'idle';
  const isLoading     = ttsLoadingSection !== -1;

  // Show the floating play / stop bar on chapter & front-matter pages
  // only. On the cover and the TOC the bar is hidden — per-chapter
  // play buttons in the TOC handle starting playback there.
  ctrl.hidden = !isReadingPage;

  // Loading spinner on the global button when fetching audio for the
  // chapter that's actually visible. (For other chapters we surface the
  // spinner on the TOC button instead.)
  const loadingHere = isLoading && page.sectionIdx === ttsLoadingSection;
  playBtn.classList.toggle('is-loading', !!loadingHere);

  // Global play/pause button state
  if (loadingHere) {
    playBtn.innerHTML = '';                    // spinner via ::after
    playBtn.classList.add('is-active');
    playBtn.setAttribute('aria-label', '음성 준비 중');
    stopBtn.disabled = false;                  // user can cancel a load
  } else if (ttsState === 'playing') {
    playBtn.innerHTML = '&#10074;&#10074;';   // ❚❚ pause
    playBtn.classList.add('is-active');
    playBtn.setAttribute('aria-label', '일시정지');
    stopBtn.disabled = false;
  } else if (ttsState === 'paused') {
    playBtn.innerHTML = '&#9654;';             // ▶ resume
    playBtn.classList.add('is-active');
    playBtn.setAttribute('aria-label', '이어서 재생');
    stopBtn.disabled = false;
  } else {
    playBtn.innerHTML = '&#9654;';             // ▶ play
    playBtn.classList.remove('is-active');
    playBtn.setAttribute('aria-label', '음성으로 듣기');
    stopBtn.disabled = !isSpeaking && !isLoading;
  }

  // Speaking indicator on the visible chapter title
  const titleEl = document.querySelector('.book-card .chapter-title');
  if (titleEl) {
    const isCurrent = page.sectionIdx === ttsSectionIdx && isSpeaking;
    titleEl.classList.toggle('is-speaking', !!isCurrent);
  }

  // Speaking indicator on TOC entries
  document.querySelectorAll('.toc-entry').forEach(el => {
    const sIdx = parseInt(el.dataset.section, 10);
    el.classList.toggle('is-speaking',
      Number.isFinite(sIdx) && sIdx === ttsSectionIdx && isSpeaking);
  });

  // Per-chapter play buttons inside the TOC list
  document.querySelectorAll('.toc-tts-btn').forEach(btn => {
    const sIdx     = parseInt(btn.dataset.section, 10);
    const isThis   = Number.isFinite(sIdx) && sIdx === ttsSectionIdx && isSpeaking;
    const isLoadingThis = Number.isFinite(sIdx) && sIdx === ttsLoadingSection;

    btn.classList.toggle('is-loading', !!isLoadingThis);

    if (isLoadingThis) {
      btn.innerHTML = '';                                 // spinner via ::after
      btn.classList.add('is-active');
      btn.setAttribute('aria-label', '음성 준비 중');
    } else if (isThis && ttsState === 'playing') {
      btn.innerHTML = '&#10074;&#10074;';                 // ❚❚
      btn.classList.add('is-active');
      btn.setAttribute('aria-label', '일시정지');
    } else if (isThis && ttsState === 'paused') {
      btn.innerHTML = '&#9654;';
      btn.classList.add('is-active');
      btn.setAttribute('aria-label', '이어서 재생');
    } else {
      btn.innerHTML = '&#9654;';
      btn.classList.remove('is-active');
      btn.setAttribute('aria-label', '이 장 듣기');
    }
  });
}

function showTtsToast(message) {
  const existing = document.getElementById('ttsToast');
  if (existing) existing.remove();
  if (ttsToastTimer) { clearTimeout(ttsToastTimer); ttsToastTimer = null; }

  const toast = document.createElement('div');
  toast.id = 'ttsToast';
  toast.className = 'tts-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  ttsToastTimer = setTimeout(() => {
    toast.remove();
    ttsToastTimer = null;
  }, 3000);
}

initTts();
updateTtsForPage();
