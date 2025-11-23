export const tasksData = [
  {
    id: 1,
    source: "matematyka-2002-maj-matura-podstawowa.pdf",
    title: "Zadanie 3. (3 pkt)",
    question:
      "W klasie liczącej 30 uczniów, dziewięciu obejrzało film pt. „Nasz XXI wiek”. Wychowawca\nklasy otrzymał 4 bilety i zamierza wylosować uczniów, których zaprosi na projekcję tego\nfilmu. Oblicz prawdopodobieństwo zdarzenia, że wśród czterech wylosowanych z tej klasy\nuczniów nie ma ucznia, który już ten film oglądał.",
    answer: "19/87",
    solution:
      "Losujemy 4 osoby bez zwracania, więc korzystamy z modelu hipergeometrycznego. Spośród 21 uczniów, którzy nie widzieli filmu, wybieramy 4: C(21,4). Wszystkich czteroosobowych grup jest C(30,4). Zatem P = C(21,4)/C(30,4) = 19/87.",
    year: 2002,
    status: "complete",
  },
  {
    id: 2,
    source: "matematyka-2003-maj-matura-podstawowa.pdf",
    title: "Zadanie 10. (2 pkt )",
    question:
      "Kupując los loterii można wygrać nagrodę główną, którą jest zestaw płyt kompaktowych\nlub jedną z 10 nagród książkowych. Przy zakupie jednego losu prawdopodobieństwo\n1\nwygrania nagrody książkowej jest równe . Oblicz, ile jest losów pustych.\n7",
    answer: "59 losów pustych",
    solution:
      "Jeśli prawdopodobieństwo nagrody książkowej wynosi 1/7, to 10/N = 1/7, stąd N = 70 losów. Wygranych jest łącznie 11 losów (10 nagród książkowych i jedna główna), więc pustych musi być 70 - 11 = 59.",
    year: 2003,
    status: "complete",
  },
  {
    id: 3,
    source: "matematyka-2003-styczen-probna-podstawowa.pdf",
    title: "Zadanie 8. (3 pkt)",
    question:
      "Spośród wszystkich wierzchołków sześcianu wybieramy jednocześnie trzy wierzchołki.\nOblicz prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy wierzchołki\ntrójkąta równobocznego.",
    answer: "1/7",
    solution:
      "W sześcianie trójkąty równoboczne mają boki długości √2 i powstają z każdej trójki wierzchołków postaci (0,0,0), (1,1,0), (1,0,1) itp. Takich trójkątów jest 8. Wszystkich trójek wierzchołków jest C(8,3)=56, więc P = 8/56 = 1/7.",
    year: 2003,
    status: "complete",
  },
  {
    id: 4,
    source: "matematyka-2004-styczen-probna-podstawowa.pdf",
    title: "Zadanie 10. (6 pkt)",
    question:
      "W pudełku znajdują się żetony. Wśród nich jest 6 żetonów o nominale 5 zł oraz n żetonów o nominale 10\nzł. Losujemy z pudełka dwa żetony. Prawdopodobieństwo zdarzenia polegającego na wylosowaniu obu\n1\nżetonów o nominale 10 zł jest równe . Oblicz n.\n2",
    answer: "n = 15",
    solution:
      "Prawdopodobieństwo dwóch żetonów dziesięciozłotowych to C(n,2)/C(n+6,2) i ma być równe 1/2. Po uproszczeniu dostajemy równanie 2n(n-1) = (n+6)(n+5), czyli n^2 - 13n - 30 = 0. Dodatnim rozwiązaniem jest n = 15.",
    year: 2004,
    status: "complete",
  },
  {
    id: 5,
    source: "matematyka-2005-maj-matura-podstawowa.pdf",
    title: "Zadanie 1. (3 pkt)",
    question:
      "W pudełku są trzy kule białe i pięć kul czarnych. Do pudełka można albo dołożyć jedną kulę\nbiałą albo usunąć z niego jedną kulę czarną, a następnie wylosować z tego pudełka jedną kulę.\nW którym z tych przypadków wylosowanie kuli białej jest bardziej prawdopodobne?\nWykonaj odpowiednie obliczenia.",
    answer: "Dodanie kuli białej jest korzystniejsze",
    solution:
      "Po dodaniu białej kuli mamy 4 białe i 5 czarnych, więc P(biała) = 4/9. Po usunięciu czarnej zostaje 3 białe i 4 czarne, czyli P(biała) = 3/7. Ponieważ 4/9 > 3/7, większą szansę daje dodanie białej kuli.",
    year: 2005,
    status: "complete",
  },
  {
    id: 6,
    source: "matematyka-2005-styczen-probna-podstawowa.pdf",
    title: "Zadanie 10. (4 pkt.)",
    question:
      "Właściciel sklepu spożywczego w przypadku każdego nowego produktu przeprowadza test\npolegający na tym, że 50 losowo wybranych osób ocenia ten produkt w skali od 0 do 5\npunktów, w trzech kategoriach: C – ceny, S – smaku, i W – wyglądu opakowania. Następnie\nwłaściciel oblicza średnią ważoną z następujących liczb: s1 średniej liczby punktów",
    answer: "Brak rozwiązania – treść zadania w pliku jest ucięta",
    solution:
      "Udostępniony fragment zatrzymuje się na opisie średniej ważonej, dlatego nie mamy potrzebnych danych, by policzyć konkretny wynik. W aplikacji zadanie jest oznaczone jako wymagające uzupełnienia treści.",
    year: 2005,
    status: "needs-data",
  },
  {
    id: 7,
    source: "matematyka-2006-listopad-probna-podstawowa.pdf",
    title: "Zadanie 6. (5 pkt)",
    question:
      "W urnie znajdują się kule z kolejnymi liczbami 10, 11, 12, 13, ..., 50, przy czym kul\nz liczbą 10 jest 10, kul z liczbą 11 jest 11 itd., a kul z liczbą 50 jest 50. Z urny tej losujemy\njedną kulę. Oblicz prawdopodobieństwo, że wylosujemy kulę z liczbą parzystą.",
    answer: "21/41",
    solution:
      "Każda liczba k w przedziale 10–50 występuje k razy, więc liczba kul to suma 10+11+…+50 = 1230. Kule z liczbami parzystymi dają sumę 10+12+…+50 = 630. Stąd P(parzysta) = 630/1230 = 21/41.",
    year: 2006,
    status: "complete",
  },
  {
    id: 8,
    source: "matematyka-2006-maj-matura-podstawowa.pdf",
    title: "Zadanie 2. (3 pkt)",
    question:
      "W wycieczce szkolnej bierze udział 16 uczniów, wśród których tylko czworo zna okolicę.\nWychowawca chce wybrać w sposób losowy 3 osoby, które mają pójść do sklepu. Oblicz\nprawdopodobieństwo tego, że wśród wybranych trzech osób będą dokładnie dwie znające\nokolicę.",
    answer: "9/70",
    solution:
      "Dokładnie dwie osoby znające okolicę wybieramy na C(4,2), a trzecią z pozostałych 12 na C(12,1). Wszystkich trójek jest C(16,3). Zatem P = [C(4,2)·C(12,1)] / C(16,3) = 72/560 = 9/70.",
    year: 2006,
    status: "complete",
  },
  {
    id: 9,
    source: "matematyka-2006-styczen-probna-podstawowa.pdf",
    title: "Zadanie 2. (3 pkt)",
    question:
      "Po Wiadomościach z kraju i ze świata telewizja TVG ma nadać pięć reklam: trzy reklamy\nróżnych proszków do prania oraz dwie reklamy różnych past do zębów. Kolejność nadawania\nreklam jest ustalona losowo. Oblicz prawdopodobieństwo, że dwie reklamy produktów tego\nsamego rodzaju nie będą nadane bezpośrednio jedna po drugiej. Wynik podaj w postaci\nnieskracalnego ułamka zwykłego.",
    answer: "1/10",
    solution:
      "Jedyny dozwolony układ typów reklam to naprzemienne D P D P D. Dla trzech proszków i dwóch past otrzymujemy 3!·2! = 12 ustawień bez zakazanych sąsiedztw. Wszystkich permutacji jest 5! = 120, więc P = 12/120 = 1/10.",
    year: 2006,
    status: "complete",
  },
  {
    id: 10,
    source: "matematyka-2007-maj-matura-podstawowa.pdf",
    title: "Zadanie 8. (4 pkt)",
    question:
      "Na stole leżało 14 banknotów: 2 banknoty o nominale 100 zł, 2 banknoty o nominale 50 zł\ni 10 banknotów o nominale 20 zł. Wiatr zdmuchnął na podłogę 5 banknotów. Oblicz\nprawdopodobieństwo tego, że na podłodze leży dokładnie 130 zł. Odpowiedź podaj w postaci\nułamka nieskracalnego.",
    answer: "30/143",
    solution:
      "Suma 130 zł powstaje tylko przy 1 banknocie 50 zł i 4 banknotach 20 zł. Liczba takich zestawów wynosi C(2,1)·C(10,4) = 420. Wszystkich możliwych zestawów pięciu banknotów jest C(14,5) = 2002, zatem P = 420/2002 = 30/143.",
    year: 2007,
    status: "complete",
  },
  {
    id: 11,
    source: "matematyka-2007-operon-probna-podstawowa.pdf",
    title: "Zadanie 7. (7 pkt)",
    question:
      "Z urny, w której są 3 kule białe i n czarnych, wylosowano dwie kule. Prawdopodobieństwo,\nŜe wylosowano dwie kule czarne, jest takie samo jak tego, Ŝe wylosowano kulę białą i czarną.\nWyznacz liczbę n .",
    answer: "n = 7",
    solution:
      "Równość P(2 czarne) = P(biała i czarna) daje C(n,2)/C(n+3,2) = 3n/C(n+3,2). Mamy n(n-1)/2 = 3n, więc n-1 = 6 i n = 7 czarnych kul.",
    year: 2007,
    status: "complete",
  },
  {
    id: 12,
    source: "matematyka-2008-maj-matura-podstawowa.pdf",
    title: "Zadanie 12. (4 pkt)",
    question:
      "Rzucamy dwa razy symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo\nkażdego z następujących zdarzeń:\na) A – w każdym rzucie wypadnie nieparzysta liczba oczek.\nb) B – suma oczek otrzymanych w obu rzutach jest liczbą większą od 9.\nc) C – suma oczek otrzymanych w obu rzutach jest liczbą nieparzystą i większą od 9.",
    answer: "a) 1/4, b) 1/6, c) 1/18",
    solution:
      "Każdy rzut sześcienną kostką daje 36 par wyników. a) Obie liczby nieparzyste: (3/6)^2 = 1/4. b) Suma większa od 9 oznacza sumy 10,11,12 – razem 6 par, więc 6/36 = 1/6. c) Suma nieparzysta i >9 to tylko 11, stąd 2/36 = 1/18.",
    year: 2008,
    status: "complete",
  },
  {
    id: 13,
    source: "matematyka-2008-marzec-probna-podstawowa-2.pdf",
    title: "Zadanie 11. (3 pkt)",
    question:
      "Dane są zbiory liczb całkowitych: {1, 2, 3, 4, 5 } i {1, 2, 3, 4, 5, 6, 7 } . Z każdego z tych\nzbiorów wybieramy losowo po jednej liczbie. Oblicz prawdopodobieństwo, że suma\nwylosowanych liczb będzie podzielna przez 5.",
    answer: "1/5",
    solution:
      "Wybieramy po jednej liczbie ze zbiorów {1,…,5} i {1,…,7}. Liczymy pary, których suma jest wielokrotnością 5 – otrzymujemy 7 par z 35 możliwych, więc P = 7/35 = 1/5.",
    year: 2008,
    status: "complete",
  },
  {
    id: 14,
    source: "matematyka-2008-marzec-probna-podstawowa.pdf",
    title: "Zadanie 3. (3 pkt)",
    question:
      "Każdej karcie bankomatowej jest przypisany numer identyfikacyjny zwany kodem PIN. Kod\nten składa się z czterech cyfr (cyfry mogą się powtarzać, ale kodem PIN nie może być 0000).\nOblicz prawdopodobieństwo, że w losowo utworzonym kodzie PIN żadna cyfra się nie\npowtórzy. Wynik podaj w postaci ułamka nieskracalnego.",
    answer: "560/1111",
    solution:
      "Kod PIN ma 4 cyfry, ale 0000 jest niedozwolone, więc ogółem 10^4 - 1 = 9999 kodów. Z różnymi cyframi mamy permutację 10·9·8·7 = 5040 kodów. P = 5040/9999 = 560/1111.",
    year: 2008,
    status: "complete",
  },
  {
    id: 15,
    source: "matematyka-2008-operon-probna-podstawowa.pdf",
    title: "Zadanie 10. (4 pkt)",
    question:
      "Rzucamy dwiema symetrycznymi kostkami w kszta∏cie czworoĘcianu foremnego o ponumerowanych Ęcianach od 1 do 4 i obliczamy sum´ otrzymanych oczek.\na) Skonstruuj tabel´, tak aby przedstawia∏a wszystkie mo˝liwe wyniki tego doĘwiadczenia.\nb) Oblicz prawdopodobieƒstwo zdarzenia, ˝e suma wyrzuconych cyfr jest mniejsza od 5.",
    answer: "3/8",
    solution:
      "Dwie czworościenne kostki dają 16 wyników. Sumy mniejsze od 5 to 2 (1 para), 3 (2 pary) i 4 (3 pary), razem 6. Zatem P = 6/16 = 3/8.",
    year: 2008,
    status: "complete",
  },
  {
    id: 16,
    source: "matematyka-2009-listopad-probna-podstawowa.pdf",
    title: "Zadanie 25. (1 pkt)",
    question:
      "Wybieramy liczbę a ze zbioru A = {2,3, 4,5} oraz liczbę b ze zbioru B = {1, 4} . Ile jest takich par\n( a, b ) , że iloczyn a ⋅ b jest liczbą nieparzystą?\nA. 2",
    answer: "2 pary",
    solution:
      "Iloczyn jest nieparzysty tylko wtedy, gdy obie liczby są nieparzyste. Z A wybieramy 3 lub 5, a z B wyłącznie 1, więc otrzymujemy pary (3,1) i (5,1).",
    year: 2009,
    status: "complete",
  },
  {
    id: 17,
    source: "matematyka-2009-maj-matura-podstawowa.pdf",
    title: "Zadanie 10. (5 pkt)",
    question:
      "Tabela przedstawia wyniki części teoretycznej egzaminu na prawo jazdy. Zdający uzyskał\nwynik pozytywny, jeżeli popełnił co najwyżej dwa błędy.\nliczba błędów\nliczba zdających\n\n0\n8\n\n1\n5\n\n2\n8\n\n3\n5\n\n4\n2\n\n5\n1\n\n6\n0\n\n7\n0\n\n8\n1\n\na) Oblicz średnią arytmetyczną liczby błędów popełnionych przez zdających ten egzamin.\nWynik podaj w zaokrągleniu do całości.\nb) Oblicz prawdopodobieństwo, że wśród dwóch losowo wybranych zdających tylko jeden\nuzyskał wynik pozytywny. Wynik zapisz w postaci ułamka zwykłego nieskracalnego.",
    answer: "a) 2 błędy, b) 63/145",
    solution:
      "a) Średnia liczba błędów to (0·8 + 1·5 + 2·8 + 3·5 + 4·2 + 5·1 + 8·1)/30 = 57/30 ≈ 1,9, czyli po zaokrągleniu 2. b) Dokładnie jeden zdający z wynikiem pozytywnym w parze: 21·9 sposobów. Dzielimy przez C(30,2)=435 i otrzymujemy 189/435 = 63/145.",
    year: 2009,
    status: "complete",
  },
  {
    id: 18,
    source: "matematyka-2009-styczen-probna-podstawowa.pdf",
    title: "Zadanie 2. (3 pkt)",
    question:
      "Spośród cyfr 1, 2, 3, 4, 5, 6 losujemy kolejno dwa razy po jednej cyfrze ze zwracaniem.\nTworzymy liczbę dwucyfrową w ten sposób, że pierwsza z wylosowanych cyfr jest cyfrą\ndziesiątek, a druga cyfrą jedności tej liczby. Oblicz prawdopodobieństwo utworzenia liczby\nwiększej od 52.",
    answer: "5/18",
    solution:
      "Tworzymy liczbę dwucyfrową z cyfr 1–6 ze zwracaniem, więc 36 wyników. Większe od 52 są kombinacje: dziesiątki 6 (6 liczb) lub dziesiątki 5 i jedności 3–6 (4 liczby). Razem 10 liczb, więc 10/36 = 5/18.",
    year: 2009,
    status: "complete",
  },
  {
    id: 19,
    source: "matematyka-2010-listopad-probna-podstawowa.pdf",
    title: "Zadanie 24. (1 pkt)",
    question:
      "W karcie dań jest 5 zup i 4 drugie dania. Na ile sposobów można zamówić obiad składający się\nz jednej zupy i jednego drugiego dania?\nA. 25",
    answer: "20 sposobów",
    solution:
      "Zupa wybierana jest na 5 sposobów, drugie danie na 4 sposoby, więc 5·4 = 20 kompletów obiadu.",
    year: 2010,
    status: "complete",
  },
  {
    id: 20,
    source: "matematyka-2010-listopad-probna-podstawowa.pdf",
    title: "Zadanie 31. (2 pkt)",
    question:
      "Oblicz, ile jest liczb naturalnych czterocyfrowych, w których zapisie pierwsza cyfra jest\nparzysta, a pozostałe nieparzyste.",
    answer: "500 liczb",
    solution:
      "Pierwsza cyfra (parzysta) ma 4 możliwości: 2,4,6,8. Pozostałe trzy miejsca muszą być nieparzyste – każdorazowo 5 opcji. Daje to 4·5^3 = 500 liczb.",
    year: 2010,
    status: "complete",
  },
  {
    id: 21,
    source: "matematyka-2010-maj-matura-podstawowa.pdf",
    title: "Zadanie 33. (4 pkt)",
    question:
      "Doświadczenie losowe polega na dwukrotnym rzucie symetryczną sześcienną kostką do gry.\nOblicz prawdopodobieństwo zdarzenia A polegającego na tym, że w pierwszym rzucie\notrzymamy parzystą liczbę oczek i iloczyn liczb oczek w obu rzutach będzie podzielny przez 12.\nWynik przedstaw w postaci ułamka zwykłego nieskracalnego.",
    answer: "1/6",
    solution:
      "Pierwszy rzut musi dać liczbę parzystą (2,4,6). W przypadku 2 druga kostka musi pokazać 6, dla 4 – 3 lub 6, dla 6 – dowolną liczbę parzystą. Razem 6 sprzyjających par z 36 możliwych, czyli 1/6.",
    year: 2010,
    status: "complete",
  },
  {
    id: 22,
    source: "matematyka-2010-styczen-probna-podstawowa.pdf",
    title: "Zadanie 18. (1 pkt)",
    question:
      "Pan Jakub ma 4 marynarki, 7 par róŜnych spodni i 10 róŜnych koszul. Na ile róŜnych\nsposobów moŜe się ubrać, jeśli zawsze zakłada marynarkę, spodnie i koszulę.\nA. 280",
    answer: "280 strojów",
    solution:
      "Każdy strój to wybór marynarki, spodni i koszuli: 4·7·10 = 280 sposobów.",
    year: 2010,
    status: "complete",
  },
  {
    id: 23,
    source: "matematyka-2010-styczen-probna-podstawowa.pdf",
    title: "Zadanie 20. (1 pkt)",
    question:
      "Na loterii jest 10 losów, z których 4 są wygrywające. Kupujemy jeden los.\nPrawdopodobieństwo zdarzenia, Ŝe nie wygramy nagrody jest równe\n5\n2\n1\n3\nB.\nC.\nD.\nA.\n6\n3\n6\n5",
    answer: "3/5",
    solution:
      "Szansa przegranej to liczba losów przegrywających do ogółu: 6/10 = 3/5.",
    year: 2010,
    status: "complete",
  },
  {
    id: 24,
    source: "matematyka-2010-styczen-probna-podstawowa.pdf",
    title: "Zadanie 23. (2 pkt)",
    question:
      "Rzucamy czerwoną i zieloną sześcienną kostką do gry. Oblicz prawdopodobieństwo\nzdarzenia polegającego na wyrzuceniu takiej samej liczby oczek na obu kostkach.",
    answer: "1/6",
    solution:
      "Para wyników z dwóch kostek ma 36 możliwości. Jednakowe liczby oczek pojawiają się w 6 parach (1,1), …, (6,6), więc P = 6/36 = 1/6.",
    year: 2010,
    status: "complete",
  },
  {
    id: 25,
    source: "matematyka-2011-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 22. (1 pkt)",
    question:
      "Jeżeli A jest zdarzeniem losowym takim, że P ( A ) = 6 ⋅ P ( A′ ) , oraz A′ jest zdarzeniem\nprzeciwnym do zdarzenia A, to prawdopodobieństwo zdarzenia A jest równe\nA. 5/6\n\nB. 1/6\n\nC. 1/7\n\nD. 6/7",
    answer: "6/7",
    solution:
      "Z równania P(A) = 6·P(A') i tożsamości P(A') = 1 - P(A) dostajemy P = 6·(1-P). Stąd 7P = 6 i P = 6/7.",
    year: 2011,
    status: "complete",
  },
  {
    id: 26,
    source: "matematyka-2011-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 29. (2 pkt)",
    question:
      "Rzucamy dwa razy symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo\nzdarzenia A polegającego na tym, że liczba oczek w pierwszym rzucie jest o 1 mniejsza od\nliczby oczek w drugim rzucie.",
    answer: "5/36",
    solution:
      "Warunek b = a + 1 spełnia 5 par: (1,2)…(5,6). Dzielenie przez 36 możliwych par daje 5/36.",
    year: 2011,
    status: "complete",
  },
  {
    id: 27,
    source: "matematyka-2011-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 31. (4 pkt)",
    question:
      "Oblicz sumę wszystkich liczb trzycyfrowych zapisanych wyłącznie za pomocą cyfr 1, 2, 3, 4\n(cyfry mogą się powtarzać).",
    answer: "17760",
    solution:
      "Każde z 4 miejsc (setki, dziesiątki, jedności) otrzymuje po równo każdą cyfrę zbioru {1,2,3,4}. W setkach każda cyfra występuje 16 razy, więc wkład to (1+2+3+4)·16·100. Analogicznie dla kolejnych miejsc. Po zsumowaniu otrzymujemy 17760.",
    year: 2011,
    status: "complete",
  },
  {
    id: 28,
    source: "matematyka-2011-maj-matura-podstawowa.pdf",
    title: "Zadanie 22. (1 pkt)",
    question:
      "Rzucamy dwa razy symetryczną sześcienną kostką do gry. Prawdopodobieństwo otrzymania\nsumy oczek równej trzy wynosi\nA. 1/6\n\nB. 1/9\n\nC. 1/12\n\nD. 1/18",
    answer: "1/18",
    solution:
      "Suma 3 pojawia się tylko w parach (1,2) i (2,1), więc 2/36 = 1/18.",
    year: 2011,
    status: "complete",
  },
  {
    id: 29,
    source: "matematyka-2011-maj-matura-podstawowa.pdf",
    title: "Zadanie 30. (2 pkt)",
    question:
      "Ze zbioru liczb {1, 2, 3,..., 7} losujemy kolejno dwa razy po jednej liczbie ze zwracaniem.\nOblicz prawdopodobieństwo wylosowania liczb, których suma jest podzielna przez 3.",
    answer: "16/49",
    solution:
      "W zbiorze {1,…,7} mamy 2 liczby podzielne przez 3, 3 liczby o reszcie 1 i 2 liczby o reszcie 2. Suma podzielna przez 3 wymaga par (0,0), (1,2) lub (2,1). Liczymy kombinacje i dzielimy przez 7^2, otrzymując 16/49.",
    year: 2011,
    status: "complete",
  },
  {
    id: 30,
    source: "matematyka-2011-operon-probna-podstawowa.pdf",
    title: "Zadanie 25. (1 pkt)",
    question:
      "Cztery dziewczynki i sześciu chłopców siedzą na tym samym pniu zwalonego dębu. Dziewczynki siedzą\nobok siebie i chłopcy również siedzą obok siebie. Wszystkich możliwych sposobów posadzenia dzieci\nw ten sposób jest\nA. 4 $ 6\nB. 2 $ 4 $ 1 $ 2 $ 3 $ 4 $ 5 $ 6\nC. 1 $ 2 $ 3 $ 4 $ 6 $ 5 $ 4 $ 3 $ 2 $ 1\n\nD. 1 $ 2 $ 3 $ 4 $ 6 $ 5 $ 4 $ 3 $ 2 $ 1 $ 2",
    answer: "34560 ustawień",
    solution:
      "Dziewczynki tworzą blok 4!, chłopcy blok 6!, a całe bloki można ułożyć na 2 sposoby. Zatem 2·4!·6! = 34560.",
    year: 2011,
    status: "complete",
  },
  {
    id: 31,
    source: "matematyka-2011-operon-probna-podstawowa.pdf",
    title: "Zadanie 33. (4 pkt)",
    question:
      "Rzucamy dwukrotnie kostką do gry. Jakie jest prawdopodobieństwo tego, że liczba oczek otrzymana\nw pierwszym rzucie jest większa od liczby oczek otrzymanej w drugim rzucie?",
    answer: "5/12",
    solution:
      "W parach wyników a > b stanowi połowę różnicy między wszystkimi parami a parami równymi. Po odjęciu 6 par równych z 36 i podzieleniu przez 2 dostajemy 15 par spełniających warunek, co daje 15/36 = 5/12.",
    year: 2011,
    status: "complete",
  },
  {
    id: 32,
    source: "matematyka-2011-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 19. (1 pkt)",
    question:
      "Ze zbioru dwucyfrowych liczb naturalnych wybieramy losowo\nPrawdopodobieństwo otrzymania liczby podzielnej przez 30 jest równe\nA. 1/90\n\nB. 2/90\n\nC. 3/90\n\nD.\n\njedną\n\nliczbę.\n\n10\n90",
    answer: "3/90 (czyli 1/30)",
    solution:
      "Dwucyfrowe wielokrotności 30 to 30, 60 i 90. Dzieląc liczbę korzystnych wyników przez 90 dwucyfrowych liczb otrzymujemy 3/90 = 1/30.",
    year: 2011,
    status: "complete",
  },
  {
    id: 33,
    source: "matematyka-2011-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 30. (2 pkt)",
    question:
      "Dane są dwa pudełka: czerwone i niebieskie. W każdym z tych pudełek znajduje się 10 kul\nponumerowanych liczbami od 1 do 10. Z każdego pudełka losujemy jedną kulę. Oblicz\nprawdopodobieństwo zdarzenia polegającego na tym, że numer kuli wylosowanej\nz czerwonego pudełka jest mniejszy od numeru kuli wylosowanej z niebieskiego pudełka.",
    answer: "9/20",
    solution:
      "Wszystkich par (a,b) jest 100. Par z a<b jest tyle samo co z a>b i łącznie stanowią 100−10 = 90 par (po odjęciu równych). Dzieląc 90/2 przez 100 otrzymujemy 45/100 = 9/20.",
    year: 2011,
    status: "complete",
  },
  {
    id: 34,
    source: "matematyka-2012-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 23. (1 pkt)",
    question:
      "Jeżeli A i B są zdarzeniami losowymi, B jest zdarzeniem przeciwnym do B, P  A   0,3 ,\nP  B   0, 4 oraz A  B   , to P  A  B  jest równe\nA. 0,12\n\nB. 0,18\n\nC. 0,6\n\nD. 0,9",
    answer: "0,9",
    solution:
      "Zdarzenia A i B są rozłączne, więc P(A ∪ B) = P(A) + P(B). Mając P(A) = 0,3 i P(B) = 1 - P(B') = 0,6 dostajemy 0,9.",
    year: 2012,
    status: "complete",
  },
  {
    id: 35,
    source: "matematyka-2012-maj-matura-podstawowa.pdf",
    title: "Zadanie 31. (2 pkt)",
    question:
      "Ze zbioru liczb 1, 2,3, 4,5, 6, 7 losujemy dwa razy po jednej liczbie ze zwracaniem. Oblicz\nprawdopodobieństwo zdarzenia A, polegającego na wylosowaniu liczb, których iloczyn jest\npodzielny przez 6.",
    answer: "17/49",
    solution:
      "Niech X – iloczyn niepodzielny przez 2, a Y – niepodzielny przez 3. P(X) = (4/7)^2, P(Y) = (5/7)^2, P(X∩Y) = (3/7)^2. Po zastosowaniu zasady włączeń otrzymujemy P(podzielny przez 6) = 1 - 32/49 = 17/49.",
    year: 2012,
    status: "complete",
  },
  {
    id: 36,
    source: "matematyka-2012-marzec-probna-podstawowa-2.pdf",
    title: "Zadanie 22. (1 pkt)",
    question:
      "Ze zbioru {1,2,3,4,5,6,7} losujemy kolejno cztery liczby bez zwracania i układamy je\nw kolejności losowania w liczbę czterocyfrową. Liczb czterocyfrowych podzielnych przez\n5 otrzymamy:\nA. 216\n\nB.",
    answer: "120 liczb",
    solution:
      "Liczba ma być podzielna przez 5, więc ostatnią cyfrą (losowaną jako czwarta) musi być 5. Pozostałe trzy miejsca obsadzamy permutacją 6 dostępnych cyfr – 6·5·4 = 120 liczb.",
    year: 2012,
    status: "complete",
  },
  {
    id: 37,
    source: "matematyka-2012-marzec-probna-podstawowa-2.pdf",
    title: "Zadanie 34. (4 pkt)",
    question:
      "W koszu znajdują się owoce: 12 jabłek i 8 pomarańczy. Wyjmujemy kolejno trzy owoce, nie\nodkładając ich do kosza. Jakie jest prawdopodobieństwo, że wylosujemy dokładnie dwie\npomarańcze.",
    answer: "28/95",
    solution:
      "Losujemy bez zwracania 3 owoce z 12 jabłek i 8 pomarańczy. Dokładnie dwie pomarańcze: C(8,2)·C(12,1) korzystnych zestawów, wszystkich C(20,3). P = 336/1140 = 28/95.",
    year: 2012,
    status: "complete",
  },
  {
    id: 38,
    source: "matematyka-2012-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 25. (1 pkt)",
    question:
      "Ze zbioru liczb {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11} wybieramy losowo jedną liczbę. Niech p oznacza\nprawdopodobieństwo wybrania liczby będącej wielokrotnością liczby 3. Wówczas\nA.\n\np < 0,3\n\nB.\n\np = 0,3\n\nC.\n\np = 0, 4\n\nD.\n\np > 0, 4",
    answer: "p = 3/11 < 0,3",
    solution:
      "W zbiorze 1–11 wielokrotności 3 to 3,6,9. Zatem p = 3/11 ≈ 0,27, co spełnia odpowiedź „p < 0,3”.",
    year: 2012,
    status: "complete",
  },
  {
    id: 39,
    source: "matematyka-2012-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 32. (4 pkt)",
    question:
      "Rzucamy dwukrotnie sześcienną kostką do gry. Oblicz prawdopodobieństwo zdarzenia\npolegającego na tym, że suma liczb oczek otrzymanych na obu kostkach jest większa od 6\ni iloczyn tych liczb jest nieparzysty.",
    answer: "1/12",
    solution:
      "Iloczyn ma być nieparzysty, więc obie kostki muszą pokazać liczby nieparzyste (1,3,5). Spośród 9 takich par tylko trzy mają sumę większą od 6: (3,5), (5,3), (5,5). P = 3/36 = 1/12.",
    year: 2012,
    status: "complete",
  },
  {
    id: 40,
    source: "matematyka-2013-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 24. (1 pkt)",
    question:
      "Rzucamy trzykrotnie symetryczną monetą. Prawdopodobieństwo, że w trzecim rzucie\nwypadnie orzeł jest równe\nA. 1/4\n\nB. 3/8\n\nC. 1/2\n\nD. 3/4",
    answer: "1/2",
    solution:
      "Trzeci rzut monety jest niezależny od poprzednich, więc P(orzł) = 1/2.",
    year: 2013,
    status: "complete",
  },
  {
    id: 41,
    source: "matematyka-2013-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 29. (2 pkt)",
    question:
      "Oblicz, ile jest liczb naturalnych czterocyfrowych, w których cyfra jedności jest o 3 większa\nod cyfry setek.",
    answer: "630 liczb",
    solution:
      "Cyfra setek może przyjmować wartości 0–6 (tak, aby jedności = setki + 3 było ≤ 9). Wybór tysięcy (1–9) to 9 opcji, cyfr dziesiątek (0–9) – 10 opcji, a setki – 7 opcji. Łącznie 9·7·10 = 630 liczb.",
    year: 2013,
    status: "complete",
  },
  {
    id: 42,
    source: "matematyka-2013-maj-matura-podstawowa.pdf",
    title: "Zadanie 22. (1 pkt)",
    question:
      "Rzucamy dwa razy symetryczną sześcienną kostką do gry. Niech p oznacza\nprawdopodobieństwo zdarzenia, że iloczyn liczb wyrzuconych oczek jest równy 5. Wtedy\np\n\nA. 1/36\n\nB.\n\np\n\n1\n18\n\nC.\n\np\n\n1\n12\n\n1\n9\n\nD.\n\np",
    answer: "1/18",
    solution:
      "Iloczyn 5 uzyskamy tylko w parach (1,5) lub (5,1), więc 2/36 = 1/18.",
    year: 2013,
    status: "complete",
  },
  {
    id: 43,
    source: "matematyka-2014-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 19. (1 pkt)",
    question:
      "Ze zbioru kolejnych liczb naturalnych\n\n1, 2, 3, 4, ... , 30\n\nlosujemy jedną liczbę.\n\nPrawdopodobieństwo zdarzenia polegającego na tym, że wylosowana liczba jest kwadratem\nliczby całkowitej, jest równe\nA. 4/30\n\nB. 5/30\n\nC. 6/30\n\nD. 10/30",
    answer: "5/30 (czyli 1/6)",
    solution:
      "Kwadraty liczb całkowitych nieprzekraczające 30 to 1,4,9,16,25. Mamy 5 liczb z 30, więc prawdopodobieństwo wynosi 5/30.",
    year: 2014,
    status: "complete",
  },
  {
    id: 44,
    source: "matematyka-2014-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 30. (2 pkt)",
    question:
      "Dane są dwa podzbiory zbioru liczb całkowitych:\nK  {4,  1, 1, 5, 6} i L  {3,  2, 2, 3, 4} .\nZ każdego z nich losujemy jedną liczbę. Oblicz prawdopodobieństwo zdarzenia polegającego\nna wylosowaniu liczb, których iloczyn jest dodatni.",
    answer: "13/25",
    solution:
      "Iloczyn dodatni otrzymujemy dla par liczb o tym samym znaku. Kombinacje dodatnie: 3·3, kombinacje ujemne: 2·2. Razem 13 z 25 par, co daje 13/25.",
    year: 2014,
    status: "complete",
  },
  {
    id: 45,
    source: "matematyka-2014-maj-matura-podstawowa.pdf",
    title: "Zadanie 23. (1 pkt)",
    question:
      "Jeżeli A jest zdarzeniem losowym, a A '  zdarzeniem przeciwnym do zdarzenia A oraz\nzachodzi równość P( A)  2  P( A ') , to\nA. P( A) \n\n2\n3\n\nB. P( A) \n\n1\n2\n\nC. P( A) \n\n1\n3\n\nD. P( A) \n\n1\n6",
    answer: "2/3",
    solution: "Równanie P = 2·(1-P) prowadzi do 3P = 2, więc P = 2/3.",
    year: 2014,
    status: "complete",
  },
  {
    id: 46,
    source: "matematyka-2014-maj-matura-podstawowa.pdf",
    title: "Zadanie 24. (1 pkt)",
    question:
      "Na ile sposobów można wybrać dwóch graczy spośród 10 zawodników?\nA. 100\nB. 90\nC. 45\nD. 20",
    answer: "45 sposobów",
    solution: "Wybór 2 graczy spośród 10 to kombinacja C(10,2) = 45.",
    year: 2014,
    status: "complete",
  },
  {
    id: 47,
    source: "matematyka-2014-maj-matura-podstawowa.pdf",
    title: "Zadanie 30. (2 pkt)",
    question:
      "Ze zbioru liczb 1, 2, 3, 4, 5, 6, 7, 8 losujemy dwa razy po jednej liczbie ze zwracaniem.\nOblicz prawdopodobieństwo zdarzenia A, polegającego na wylosowaniu liczb, z których\npierwsza jest większa od drugiej o 4 lub 6.",
    answer: "3/32",
    solution:
      "Losujemy ze zwracaniem z {1,…,8}. Warunek a = b + 4 daje 4 pary, a a = b + 6 daje 2 pary. Łącznie 6 z 64 par, więc 3/32.",
    year: 2014,
    status: "complete",
  },
  {
    id: 48,
    source: "matematyka-2014-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 34. (4 pkt)",
    question:
      "Zbiór M tworzą wszystkie liczby naturalne dwucyfrowe, w zapisie których występują dwie\nróżne cyfry spośród: 1, 2, 3, 4, 5. Ze zbioru M losujemy jedną liczbę, przy czym każda liczba\nz tego zbioru może być wylosowana z tym samym prawdopodobieństwem. Oblicz\nprawdopodobieństwo, że wylosujemy liczbę większą od 20, w której cyfra dziesiątek jest\nmniejsza od cyfry jedności.",
    answer: "3/10",
    solution:
      "Ze zbioru liczb dwucyfrowych tworzonych z cyfr 1–5 (bez powtórzeń) otrzymujemy 5·4 = 20 liczb. Wymóg >20 eliminuje dziesiątki równe 1. Warunek „dziesiątki < jedności” spełnia 6 liczb, więc 6/20 = 3/10.",
    year: 2014,
    status: "complete",
  },
  {
    id: 49,
    source: "matematyka-2015-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "Na loterię przygotowano pulę 100 losów, w tym 4 wygrywające. Po wylosowaniu pewnej\nliczby losów, wśród których był dokładnie jeden wygrywający, szansa na wygraną była taka\nsama jak przed rozpoczęciem loterii. Stąd wynika, że wylosowano\nA. 4 losy.\n\nB. 20 losów.\n\nC. 50 losów.",
    answer: "Wylosowano 25 losów",
    solution:
      "Po zabraniu m losów, w tym jednej wygranej, pozostaje 3 wygrywające na 100 - m losów. Równanie 3/(100-m) = 4/100 daje m = 25.",
    year: 2015,
    status: "complete",
  },
  {
    id: 50,
    source: "matematyka-2015-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Ze zbioru liczb naturalnych dwucyfrowych losowo wybieramy jedną liczbę. Oblicz\nprawdopodobieństwo zdarzenia A polegającego na tym, że otrzymamy liczbę podzielną\nprzez 8 lub liczbę podzielną przez 12 .",
    answer: "1/6",
    solution:
      "Dwucyfrowe wielokrotności 8 lub 12 liczymy metodą włączeń: 11 + 8 − 4 = 15 liczb. Dzieląc przez 90 otrzymujemy 15/90 = 1/6.",
    year: 2015,
    status: "complete",
  },
  {
    id: 51,
    source: "matematyka-2015-maj-matura-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "W każdym z trzech pojemników znajduje się para kul, z których jedna jest czerwona,\na druga – niebieska. Z każdego pojemnika losujemy jedną kulę. Niech p oznacza\nprawdopodobieństwo zdarzenia polegającego na tym, że dokładnie dwie z trzech\nwylosowanych kul będą czerwone. Wtedy\nA.\n\np=\n\n1\n4\n\nB.\n\np=\n\n3\n8\n\nC.\n\np=\n\n1\n2\n\nD.\n\np=\n\n2\n3",
    answer: "3/8",
    solution:
      "Każdy pojemnik daje kulę czerwoną z prawdopodobieństwem 1/2. Dokładnie dwie czerwone w trzech losowaniach to wynik dwumianowy: C(3,2)(1/2)^3 = 3/8.",
    year: 2015,
    status: "complete",
  },
  {
    id: 52,
    source: "matematyka-2015-maj-matura-podstawowa.pdf",
    title: "Zadanie 33. (0–4)",
    question:
      "Wśród 115 osób przeprowadzono badania ankietowe, związane z zakupami w pewnym\nkiosku. W poniższej tabeli przedstawiono informacje o tym, ile osób kupiło bilety\ntramwajowe ulgowe oraz ile osób kupiło bilety tramwajowe normalne.\nRodzaj kupionych\nbiletów\nulgowe\nnormalne\n\nLiczba osób\n76\n41\n\nUwaga! 27 osób spośród ankietowanych kupiło oba rodzaje biletów.\nOblicz prawdopodobieństwo zdarzenia polegającego na tym, że osoba losowo wybrana\nspośród ankietowanych nie kupiła żadnego biletu. Wynik przedstaw w formie nieskracalnego\nułamka.",
    answer: "5/23",
    solution:
      "Łącznie zakupów dokonało 76 + 41 − 27 = 90 osób, więc 25 osób nie kupiło żadnego biletu. P = 25/115 = 5/23.",
    year: 2015,
    status: "complete",
  },
  {
    id: 53,
    source: "matematyka-2015-nowa-era-probna-podstawowa.pdf",
    title: "Zadanie 26. (0–2)",
    question:
      "W pudełku znajduje się 10 piłeczek: 3 białe i 7 czarnych. Z pudełka losujemy kolejno dwie piłeczki bez\nzwracania. Oblicz prawdopodobieństwo, że obie będą czarne.",
    answer: "7/15",
    solution: "P(2 czarne) = C(7,2)/C(10,2) = 21/45 = 7/15.",
    year: 2015,
    status: "complete",
  },
  {
    id: 54,
    source: "matematyka-2015-operon-probna-podstawowa.pdf",
    title: "Zadanie 18. (1 pkt)",
    question: "Mediana danych: - 4 , 2 , 6 , 0 , 1 jest równa\nA. 6\n\nB. 0",
    answer: "Mediana = 1",
    solution: "Po uporządkowaniu danych (-4,0,1,2,6) środkowa wartość to 1.",
    year: 2015,
    status: "complete",
  },
  {
    id: 55,
    source: "matematyka-2015-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 27. (0–2)",
    question:
      "Mamy dwa pudełka: w pierwszym znajduje się 6 kul ponumerowanych kolejnymi liczbami od\n1 do 6, a w drugim – 8 kul ponumerowanych kolejnymi liczbami od 1 do 8. Losujemy po jednej\nkuli z każdego pudełka i tworzymy liczbę dwucyfrową w ten sposób, że numer kuli\nwylosowanej z pierwszego pudełka jest cyfrą dziesiątek, a numer kuli wylosowanej z drugiego\n– cyfrą jedności tej liczby. Oblicz prawdopodobieństwo, że utworzona liczba jest podzielna\nprzez 11.",
    answer: "1/8",
    solution:
      "Warunek podzielności przez 11 oznacza b ≡ a (mod 11). Dopuszczalne są tylko pary (a,b) z jednakowymi liczbami 1–6, co daje 6 korzystnych przypadków z 48, czyli 1/8.",
    year: 2015,
    status: "complete",
  },
  {
    id: 56,
    source: "matematyka-2016-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 21. (0–1)",
    question:
      "Rzucamy trzy razy symetryczną monetą. Niech p oznacza prawdopodobieństwo otrzymania\ndokładnie jednego orła w tych trzech rzutach. Wtedy\nA. 0 ≤ p < 0, 25\n\nB.\n\n0, 25 ≤ p ≤ 0, 4\n\nC. 0, 4 < p ≤ 0,5\n\nD.\n\np > 0,5",
    answer: "p = 3/8 ≈ 0,375 (przedział B)",
    solution:
      "Dokładnie jeden orzeł w trzech rzutach monety ma prawdopodobieństwo C(3,1)/2^3 = 3/8 ≈ 0,375, co mieści się w zakresie 0,25 ≤ p ≤ 0,4.",
    year: 2016,
    status: "complete",
  },
  {
    id: 57,
    source: "matematyka-2016-maj-matura-podstawowa.pdf",
    title: "Zadanie 22. (1 pkt)",
    question:
      "DUPLIKAT - Rzucamy dwa razy symetryczną sześcienną kostką do gry. Prawdopodobieństwo otrzymania\nsumy oczek równej trzy wynosi\nA. 1/6\n\nB. 1/9\n\nC. 1/12\n\nD. 1/18",
    answer: "1/18",
    solution: "Jak wcześniej: suma 3 powstaje w dwóch parach, więc 1/18.",
    year: 2016,
    status: "complete",
  },
  {
    id: 58,
    source: "matematyka-2016-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 9. (0–4)",
    question:
      "Rzucamy dwa razy symetryczną sześcienną kostką do gry. Oblicz prawdopodobieństwo\nzdarzenia A polegającego na tym, że liczba oczek w drugim rzucie jest o 1 większa od liczby\noczek w pierwszym rzucie.",
    answer: "5/36",
    solution:
      "Drugi wynik większy o 1 oznacza pary (1,2)…(5,6) – pięć możliwości z 36.",
    year: 2016,
    status: "complete",
  },
  {
    id: 59,
    source: "matematyka-2017-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Ze zbioru liczb {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15} losujemy bez zwracania dwa razy\npo jednej liczbie. Wylosowane liczby tworzą parę ( a, b ) , gdzie a jest wynikiem pierwszego\nlosowania, b jest wynikiem drugiego losowania. Oblicz, ile jest wszystkich par ( a, b ) takich,\nże iloczyn a ⋅ b jest liczbą parzystą.",
    answer: "154 par",
    solution:
      "Par (a,b) jest 15·14 = 210. Obie liczby nieparzyste dają 56 par, więc par z iloczynem parzystym jest 210−56 = 154.",
    year: 2017,
    status: "complete",
  },
  {
    id: 60,
    source: "matematyka-2017-maj-matura-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "Ze zbioru dwudziestu czterech kolejnych liczb naturalnych od 1 do 24 losujemy jedną liczbę.\nNiech A oznacza zdarzenie, że wylosowana liczba będzie dzielnikiem liczby 24. Wtedy\nprawdopodobieństwo zdarzenia A jest równe\nA. 1/4\n\nB. 1/3\n\nC. 1/8\n\nD. 1/6",
    answer: "1/3",
    solution: "Dzielniki 24 wśród liczb 1–24 to 8 liczb, więc 8/24 = 1/3.",
    year: 2017,
    status: "complete",
  },
  {
    id: 61,
    source: "matematyka-2017-maj-matura-podstawowa.pdf",
    title: "Zadanie 33. (2 pkt)",
    question:
      "Ze zbioru wszystkich liczb naturalnych dwucyfrowych losujemy jedną liczbę. Oblicz\nprawdopodobieństwo zdarzenia, że wylosujemy liczbę, która jest równocześnie mniejsza od\n40 i podzielna przez 3. Wynik zapisz w postaci ułamka zwykłego nieskracalnego.",
    answer: "1/9",
    solution:
      "Dwucyfrowych liczb < 40 i podzielnych przez 3 jest 10. Dzielenie przez 90 daje 10/90 = 1/9.",
    year: 2017,
    status: "complete",
  },
  {
    id: 62,
    source: "matematyka-2017-operon-probna-podstawowa.pdf",
    title: "Zadanie 18. (0–1)",
    question:
      "Rzucono cztery razy monetą. Prawdopodobieństwo tego, że wypadnie co najwyżej 1 orzeł, jest\nrówne:\n2\n5\n4\n4\nB. \t\t\nC. \t\t\nD.\nA. \t\t\n8\n16\n8\n16",
    answer: "5/16",
    solution:
      "Co najwyżej jeden orzeł przy 4 rzutach to sumarycznie P(0) + P(1) = 1/16 + 4/16 = 5/16.",
    year: 2017,
    status: "complete",
  },
  {
    id: 63,
    source: "matematyka-2017-operon-probna-podstawowa.pdf",
    title: "Zadanie 29. (0–2)",
    question:
      "Rzucono trzy razy sześcienną kostką do gry. Oblicz prawdopodobieństwo tego, że suma wyrzuconych oczek jest równa co najmniej 16.",
    answer: "5/108",
    solution:
      "Suma co najmniej 16 przy 3 kostkach to sumy 16,17,18 z częstościami 6,3,1. Razem 10 wyników z 216, więc 5/108.",
    year: 2017,
    status: "complete",
  },
  {
    id: 64,
    source: "matematyka-2017-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 23. (0–1)",
    question:
      "Ze zbioru 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 wybieramy losowo jedną liczbę. Niech\np oznacza prawdopodobieństwo otrzymania liczby podzielnej przez 4. Wówczas\nA.\n\np\n\n1\n5\n\nB.\n\np\n\n1\n5\n\nC.\n\np\n\n1\n4\n\nD.\n\np\n\n1\n4",
    answer: "p = 1/5",
    solution:
      "W zbiorze 1–15 wielokrotności 4 to 4,8,12 (3 liczby). P = 3/15 = 1/5, więc właściwa jest odpowiedź B.",
    year: 2017,
    status: "complete",
  },
  {
    id: 65,
    source: "matematyka-2018-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Rzucamy cztery razy symetryczną monetą. Po przeprowadzonym doświadczeniu zapisujemy\nliczbę uzyskanych orłów (od 0 do 4) i liczbę uzyskanych reszek (również od 0 do 4). Oblicz\nprawdopodobieństwo zdarzenia polegającego na tym, że w tych czterech rzutach liczba\nuzyskanych orłów będzie większa niż liczba uzyskanych reszek.",
    answer: "5/16",
    solution:
      "Liczba orłów musi być większa od liczby reszek → 3 lub 4 orły. P = C(4,3)/16 + C(4,4)/16 = 4/16 + 1/16 = 5/16.",
    year: 2018,
    status: "complete",
  },
  {
    id: 66,
    source: "matematyka-2018-maj-matura-podstawowa.pdf",
    title: "Zadanie 33. (0–4)",
    question:
      "Dane są dwa zbiory: A = {100, 200, 300, 400, 500, 600, 700} i B = {10,11, 12, 13,14,15, 16} .\nZ każdego z nich losujemy jedną liczbę. Oblicz prawdopodobieństwo zdarzenia polegającego\nna tym, że suma wylosowanych liczb będzie podzielna przez 3. Obliczone\nprawdopodobieństwo zapisz w postaci nieskracalnego ułamka zwykłego.",
    answer: "16/49",
    solution:
      "Sprowadzamy zadanie do reszt modulo 3. Kombinacje dające sumę podzielną przez 3 policzono jako 16 z 49 możliwości.",
    year: 2018,
    status: "complete",
  },
  {
    id: 67,
    source: "matematyka-2018-operon-probna-podstawowa.pdf",
    title: "Zadanie 21. (0–1)",
    question:
      "Rzucono trzy razy monetą symetryczną. Prawdopodobieństwo uzyskania jednej reszki wynosi:\n1\n3\n7\n1\nA. \t\t\nB. \t\t\nC. \t\t\nD.\n2\n8\n8\n8",
    answer: "3/8",
    solution: "Jedna reszka w trzech rzutach monety: C(3,1)/8 = 3/8.",
    year: 2018,
    status: "complete",
  },
  {
    id: 68,
    source: "matematyka-2018-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 24. (0–1)",
    question:
      "Wszystkich liczb naturalnych pięciocyfrowych, w których zapisie dziesiętnym występują\ndokładnie trzy cyfry nieparzyste, jest\nA.\n\n( )⋅5 ⋅ 4\n5\n3\n\n3\n\nB.\n\n2\n\n( )⋅ 5 ⋅5\n5\n3\n\n3\n\n2\n\nC.\n\n( )⋅5 ⋅ 4\n5\n2\n\n2\n\nD.\n\n3\n\n( )⋅5 ⋅5\n5\n2\n\n2\n\n3",
    answer: "28750 liczb",
    solution:
      "Wymagamy dokładnie trzech cyfr nieparzystych w pięciocyfrowej liczbie. Jeśli pierwsza cyfra jest nieparzysta, dwa pozostałe miejsca na cyfry nieparzyste wybieramy spośród pozostałych czterech, co daje C(4,2) układów, a każdą cyfrę obsadzamy na 5 sposobów. Gdy pierwsza cyfra jest parzysta (może być 2,4,6,8), wybieramy trzy pozycje na cyfry nieparzyste wśród pozostałych miejsc. Sumując przypadki otrzymujemy 6·5^5 + 16·5^4 = 28750 liczb.",
    year: 2018,
    status: "complete",
  },
  {
    id: 69,
    source: "matematyka-2019-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Doświadczenie losowe polega na trzykrotnym rzucie symetryczną sześcienną kostką do gry.\nOblicz prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy sumę oczek równą 16.",
    answer: "1/36",
    solution:
      "Suma 16 dla trzech kostek występuje w 6 konfiguracjach, więc 6/216 = 1/36.",
    year: 2019,
    status: "complete",
  },
  {
    id: 70,
    source: "matematyka-2019-maj-matura-podstawowa.pdf",
    title: "Zadanie 30. (2 pkt)",
    question:
      "Ze zbioru liczb {1, 2, 3, 4, 5} losujemy dwa razy po jednej liczbie ze zwracaniem. Oblicz\nprawdopodobieństwo zdarzenia A polegającego na wylosowaniu liczb, których iloczyn jest\nliczbą nieparzystą.",
    answer: "9/25",
    solution:
      "Iloczyn nieparzysty wymaga dwóch liczb nieparzystych (1,3,5). Kombinacji jest 3·3 = 9 na 25 możliwych.",
    year: 2019,
    status: "complete",
  },
  {
    id: 71,
    source: "matematyka-2019-nowa-era-probna-podstawowa.pdf",
    title: "Zadanie 31. (0–3)",
    question:
      "Na ściankach symetrycznej dwunastościennej kostki do gry zapisano liczby\n1, 2, 3, …, 12 (jak na rysunku). Rzucamy tą kostką trzy razy i zapisujemy\nwyrzucone liczby w kolejności otrzymywania, tworząc ciąg trójwyrazowy.\nOblicz prawdopodobieństwo zdarzenia, że utworzymy w ten sposób ciąg\ngeometryczny o ilorazie całkowitym.\nUwaga. Ciąg stały jest ciągiem geometrycznym.",
    answer: "1/108",
    solution:
      "Ciąg geometryczny o całkowitym ilorazie na dodatnich liczbach długości 3 możemy uzyskać dla q = 1 (12 ciągów), q = 2 (3 ciągi) oraz q = 3 (1 ciąg). Łącznie 16 cięgów z 12^3 = 1728 wyników, czyli 1/108.",
    year: 2019,
    status: "complete",
  },
  {
    id: 72,
    source: "matematyka-2019-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 33. (0–4)",
    question:
      "Rzucamy dwa razy symetryczną, sześcienną kostką do gry. Oblicz prawdopodobieństwo\nzdarzenia A polegającego na tym, że co najmniej jedna z liczb oczek otrzymanych w obu\nrzutach jest równa 1 i iloczyn liczb oczek otrzymanych w obu rzutach jest większy od 4.",
    answer: "1/9",
    solution:
      "Warunki: co najmniej jedno „1” i iloczyn > 4. Jedynki muszą wystąpić z liczbą 5 lub 6 – pary (1,5), (1,6), (5,1), (6,1). 4 korzystne pary dają P = 4/36 = 1/9.",
    year: 2019,
    status: "complete",
  },
  {
    id: 73,
    source: "matematyka-2020-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "W pudełku jest 40 kul. Wśród nich jest 35 kul białych, a pozostałe to kule czerwone.\nPrawdopodobieństwo wylosowania każdej kuli jest takie samo. Z pudełka losujemy jedną\nkulę. Prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy kulę czerwoną, jest\nrówne\nA. 1/8\n\nB. 1/5\n\nC. 1/40\n\nD. 1/35",
    answer: "1/8",
    solution:
      "W pudełku jest 5 kul czerwonych na 40 ogółem, więc P(czerwona) = 5/40 = 1/8.",
    year: 2020,
    status: "complete",
  },
  {
    id: 74,
    source: "matematyka-2020-czerwiec-matura-stara-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "DUPLIKAT - W pudełku jest 40 kul. Wśród nich jest 35 kul białych, a pozostałe to kule czerwone.\nPrawdopodobieństwo wylosowania każdej kuli jest takie samo. Z pudełka losujemy jedną\nkulę. Prawdopodobieństwo zdarzenia polegającego na tym, że otrzymamy kulę czerwoną, jest\nrówne\nA. 1/8\n\nB. 1/5\n\nC. 1/40\n\nD. 1/35",
    answer: "1/8",
    solution: "Treść identyczna jak w arkuszu czerwcowym – wynik to 1/8.",
    year: 2020,
    status: "complete",
  },
  {
    id: 75,
    source: "matematyka-2020-kwiecien-probna-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "W pudełku jest 50 kuponów, wśród których jest 15 kuponów przegrywających, a pozostałe\nkupony są wygrywające. Z tego pudełka w sposób losowy wyciągamy jeden kupon.\nPrawdopodobieństwo zdarzenia polegającego na tym, że wyciągniemy kupon wygrywający, jest\nrówne\nA. 15/35\n\nB. 1/50\n\nC. 15/50\n\nD. 35/50",
    answer: "7/10",
    solution: "35 z 50 kuponów wygrywa, więc P(wygrana) = 35/50 = 7/10.",
    year: 2020,
    status: "complete",
  },
  {
    id: 76,
    source: "matematyka-2020-lipiec-matura-podstawowa.pdf",
    title: "Zadanie 24. (0–1)",
    question:
      "Wszystkich liczb naturalnych czterocyfrowych parzystych, w których występują wyłącznie\ncyfry 1, 2, 3, jest\nA. 54\n\nB. 81\n\nC. 8\n\nD. 27",
    answer: "27 liczb",
    solution:
      "Jedyna parzysta cyfra w zbiorze {1,2,3} to 2, więc trzeba umieścić ją w jedności. Pozostałe trzy pozycje wybieramy dowolnie spośród 1,2,3 (łącznie 3^3 = 27 liczb).",
    year: 2020,
    status: "complete",
  },
  {
    id: 77,
    source: "matematyka-2020-operon-probna-podstawowa.pdf",
    title: "Zadanie 21. (0–1)",
    question:
      "W turnieju bilardowym, w którym zawodnicy grali każdy z każdym, rozegrano 28 partii. Liczba zawodników biorących udział w tym turnieju wynosi:\nA. 6\nB. 7\nC. 8\nD. 9",
    answer: "8 zawodników",
    solution:
      "W turnieju każdy z każdym rozgrywa C(n,2) partii. Równanie n(n-1)/2 = 28 daje n = 8.",
    year: 2020,
    status: "complete",
  },
  {
    id: 78,
    source: "matematyka-2021-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 27. (0–1)",
    question:
      "W pudełku znajdują się tylko kule białe i czarne. Stosunek liczby kul białych do liczby kul\nczarnych jest równy 3 ∶ 4. Z pudełka losujemy jedną kulę.\nPrawdopodobieństwo wylosowania kuli białej jest równe\nA. 4/7\n\nB. 3/7\n\nC. 1/4\n\nD. 1/3",
    answer: "3/7",
    solution:
      "Stosunek białych do czarnych 3:4 oznacza udział białych 3/(3+4) = 3/7.",
    year: 2021,
    status: "complete",
  },
  {
    id: 79,
    source: "matematyka-2021-maj-matura-podstawowa.pdf",
    title: "Zadanie 34. (0–2)",
    question:
      "Gracz rzuca dwukrotnie symetryczną sześcienną kostką do gry i oblicza sumę liczb\nwyrzuconych oczek. Oblicz prawdopodobieństwo zdarzenia 𝐴 polegającego na tym, że suma\nliczb wyrzuconych oczek jest równa 4 lub 5, lub 6.",
    answer: "1/3",
    solution:
      "Sumy 4,5,6 dla dwóch kostek mają odpowiednio 3,4,5 konfiguracji. P = (3+4+5)/36 = 12/36 = 1/3.",
    year: 2021,
    status: "complete",
  },
  {
    id: 80,
    source: "matematyka-2021-marzec-probna-podstawowa.pdf",
    title: "Zadanie 27. (0–1)",
    question:
      "Ze zbioru liczb naturalnych dwucyfrowych losujemy jedną liczbę. Prawdopodobieństwo\nzdarzenia polegającego na tym, że wylosowana liczba jest podzielna przez 5, jest równe\nA. 2/5\n\nB. 5/100\n\nC. 5/90\n\nD. 18/90",
    answer: "1/5",
    solution:
      "Dwucyfrowych liczb podzielnych przez 5 jest 18, więc 18/90 = 1/5.",
    year: 2021,
    status: "complete",
  },
  {
    id: 81,
    source: "matematyka-2021-operon-probna-podstawowa.pdf",
    title: "Zadanie 27. (0–1)",
    question:
      "Wyniki dwukrotnego rzutu sześcienną kostką do gry zapisujemy jako liczby dwucyfrowe.\nPrawdopodobieństwo otrzymania liczby podzielnej przez 4 wynosi:\n1\n1\n3\n2\nA.\nB.\nC.\nD.\n3\n4\n4\n3",
    answer: "1/4",
    solution:
      "Zapisując wyniki jako dwucyfrową liczbę uzyskujemy 36 możliwości. Liczby podzielne przez 4 w tym zakresie to 9 przypadków, więc 9/36 = 1/4.",
    year: 2021,
    status: "complete",
  },
  {
    id: 82,
    source: "matematyka-2021-operon-probna-podstawowa.pdf",
    title: "Zadanie 28. (0–1)",
    question:
      "Rzucamy dwa razy monetą i dwa razy sześcienną kostką do gry. Wyniki zapisujemy w kolejności rzutów: moneta, moneta, kostka, kostka. Prawdopodobieństwo otrzymania dokładnie\ndwóch orłów i tych samych liczb oczek wynosi:\n1\n1\n1\n1\nA.\nB.\nC.\nD.\n24\n72\n6\n12",
    answer: "1/24",
    solution:
      "Dokładnie dwa orły przy dwóch rzutach monetą oznaczają HH z prawdopodobieństwem 1/4. Dwie kostki muszą pokazać tę samą liczbę (6 wyników z 36). Łącznie 1/4 · 1/6 = 1/24.",
    year: 2021,
    status: "complete",
  },
  {
    id: 83,
    source: "matematyka-2021-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 34. (0–2)",
    question:
      "Ze zbioru pięciu liczb {−5, −4, 1, 2, 3} losujemy kolejno ze zwracaniem dwa razy po jednej\nliczbie. Zdarzenie 𝐴 polega na wylosowaniu dwóch liczb, których iloczyn jest ujemny.\nOblicz prawdopodobieństwo zdarzenia 𝐴.",
    answer: "12/25",
    solution:
      "Aby iloczyn był ujemny, jedna liczba musi być ujemna, druga dodatnia. Daj to 2·3 + 3·2 = 12 kombinacji na 25 możliwych, więc 12/25.",
    year: 2021,
    status: "complete",
  },
  {
    id: 84,
    source: "matematyka-2022-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 27. (0–2)",
    question:
      "W tabeli przedstawiono roczne przyrosty wysokości pewnej sosny w ciągu sześciu kolejnych\nlat.\nkolejne lata\nprzyrost (w cm)\n\n1\n\n2\n\n3\n\n4\n\n5\n\n6\n\n10\n\n10\n\n7\n\n8\n\n8\n\n7\n\nOblicz średni roczny przyrost wysokości tej sosny w badanym okresie sześciu lat. Otrzymany\nwynik zaokrąglij do 1 cm. Oblicz błąd względny otrzymanego przybliżenia. Podaj ten błąd\nw procentach.",
    answer: "Średni przyrost 8 cm, błąd względny 4%",
    solution:
      "Suma przyrostów to 50 cm, więc średnia dokładna 50/6 ≈ 8,33 cm. Po zaokrągleniu do 1 cm otrzymujemy 8 cm. Błąd względny = |8,33−8| / 8,33 ≈ 0,04 = 4%.",
    year: 2022,
    status: "complete",
  },
  {
    id: 85,
    source: "matematyka-2022-grudzien-probna-podstawowa.pdf",
    title: "Zadanie 32. (0–1)",
    question:
      "Na loterii stosunek liczby losów wygrywających do liczby losów przegrywających jest\nrówny 2 ∶ 7. Zakupiono jeden los z tej loterii.\nDokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.\nPrawdopodobieństwo zdarzenia polegającego na tym, że zakupiony los jest wygrywający,\njest równe\nA. 1/9\n\nB. 1/2\n\nC. 2/9\n\nD. 2/7",
    answer: "2/9",
    solution: "Stosunek losów 2:7 oznacza 2 wygrane na 9, więc P = 2/9.",
    year: 2022,
    status: "complete",
  },
  {
    id: 86,
    source: "matematyka-2022-maj-matura-podstawowa.pdf",
    title: "Zadanie 27. (0–1)",
    question:
      "W pudełku znajdują się tylko kule białe i kule czerwone. Stosunek liczby kul białych do liczby\nkul czerwonych jest równy 3 ∶ 4. Z pudełka losujemy jedną kulę.\nPrawdopodobieństwo wylosowania kuli białej jest równe\nA. 4/9\n\nB. 4/5\n\nC. 1/9\n\nD. 1/4",
    answer: "3/7",
    solution:
      "Opisana proporcja 3:4 (białe do czerwonych) daje P(biała) = 3/7, choć w zaznaczonych odpowiedziach brak tej wartości. W aplikacji zadanie opatrzono komentarzem o rozbieżności z oryginalnym arkuszem.",
    year: 2022,
    status: "complete",
  },
  {
    id: 87,
    source: "matematyka-2022-maj-matura-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Ze zbioru wszystkich liczb naturalnych dwucyfrowych, których cyfra dziesiątek należy do\nzbioru {3, 4, 5, 6, 7, 8}, a cyfra jedności należy do zbioru {0, 1, 2, 3, 4}, losujemy jedną liczbę.\nOblicz prawdopodobieństwo zdarzenia polegającego na tym, że wylosujemy liczbę\ndwucyfrową, która jest podzielna przez 4.",
    answer: "3/10",
    solution:
      "Dziesiątki mogą przyjmować wartości 3–8 (6 opcji), a jedności 0–4 (5 opcji), więc mamy 30 liczb. Warunek podzielności przez 4 spełniają układy, w których 2t + u jest wielokrotnością 4. Sumując dopuszczalne pary (t,u) otrzymujemy 9 liczb, co daje 9/30 = 3/10.",
    year: 2022,
    status: "complete",
  },
  {
    id: 88,
    source: "matematyka-2022-operon-probna-podstawowa.pdf",
    title: "Zadanie 22.2. (0–3)",
    question:
      "Spośród uczniów tej szkoły wylosowano jedną osobę, a następnie z pozostałych wylosowano\ndrugą osobę.\nOblicz prawdopodobieństwo zdarzenia A polegającego na tym, że przynajmniej jedna z wylosowanych osób ma co najmniej 18 lat. Wynik przedstaw w postaci ułamka dziesiętnego, zaokrąglając go do części setnych. Zapisz swoje obliczenia.",
    answer: "Brak – zadanie wymaga danych z poprzedniej części arkusza",
    solution:
      "Konieczne liczebności uczniów w grupach wiekowych nie znajdują się w udostępnionym fragmencie, dlatego nie można obliczyć prawdopodobieństwa.",
    year: 2022,
    status: "needs-data",
  },
  {
    id: 89,
    source: "matematyka-2022-sierpien-poprawkowa-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "W pudełku jest 8 kul, z czego 5 białych i 3 czarne. Do tego pudełka dołożono n kul białych.\nDoświadczenie polega na losowaniu jednej kuli z tego pudełka. Prawdopodobieństwo, że\nbędzie to kula biała, jest równe . Oblicz n.",
    answer: "Brak – nie podano docelowego prawdopodobieństwa",
    solution:
      "Warunek „prawdopodobieństwo … jest równe …” urywa się przed wartością liczbową, więc równanie na n nie może zostać zapisane.",
    year: 2022,
    status: "needs-data",
  },
  {
    id: 90,
    source: "matematyka-2022-wrzesien-probna-podstawowa.pdf",
    title: "Zadanie 32. (0–2)",
    question:
      "Ze zbioru ośmiu kolejnych liczb naturalnych – od 1 do 8 – losujemy kolejno bez zwracania\ndwa razy po jednej liczbie.\nNiech 𝐴 oznacza zdarzenie polegające na tym, że suma wylosowanych liczb jest\ndzielnikiem liczby 8.\nOblicz prawdopodobieństwo zdarzenia 𝑨. Zapisz obliczenia.",
    answer: "1/7",
    solution:
      "Suma ma być dzielnikiem 8, czyli 4 lub 8 (3 jest minimalną sumą dwóch liczb). Pary bez powtórzeń dają 8 korzystnych wyników z 56 możliwych, więc 1/7.",
    year: 2022,
    status: "complete",
  },
  {
    id: 91,
    source: "matematyka-2023-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 29. (0–1)",
    question:
      "Wszystkich liczb naturalnych trzycyfrowych, w których zapisie dziesiętnym cyfry się\nnie powtarzają, jest\nA. 9 ⋅ 10 ⋅ 10 ⋅ 10 ⋅ 10\n\nB. 9 ⋅ 9 ⋅ 9 ⋅ 9\n\nC. 10 ⋅ 9 ⋅ 8 ⋅ 7\n\nD. 9 ⋅ 9 ⋅ 8 ⋅ 7",
    answer: "648 liczb",
    solution:
      "Pierwsza cyfra (1–9) ma 9 opcji, druga (0–9 z wyłączeniem pierwszej) 9 opcji, trzecia 8. Łącznie 9·9·8 = 648 liczb.",
    year: 2023,
    status: "complete",
  },
  {
    id: 92,
    source: "matematyka-2023-grudzien-probna-podstawowa.pdf",
    title: "Zadanie 28. (0–1)",
    question:
      "Doświadczenie losowe polega na dwukrotnym rzucie symetryczną sześcienną kostką do gry,\nktóra na każdej ściance ma inną liczbę oczek – od jednego oczka do sześciu oczek.\nDokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.\nPrawdopodobieństwo zdarzenia polegającego na tym, że iloczyn liczb wyrzuconych oczek\njest liczbą nieparzystą, jest równe\nA. 1/2\n\nB. 1/5\n\nC. 1/4\n\nD. 3/4",
    answer: "1/4",
    solution:
      "Iloczyn liczb oczek jest nieparzysty tylko przy dwóch liczbach nieparzystych. Udział par nieparzystych to (3/6)^2 = 1/4.",
    year: 2023,
    status: "complete",
  },
  {
    id: 93,
    source: "matematyka-2023-maj-matura-stara-podstawowa.pdf",
    title: "Zadanie 25. (0–1)",
    question:
      "W pewnej klasie stosunek liczby dziewcząt do liczby chłopców jest równy 4 : 5 . Losujemy\njedną osobę z tej klasy. Prawdopodobieństwo tego, że będzie to dziewczyna, jest równe\nA. 4/5\n\nB. 4/9\n\nC. 1/4\n\nD. 1/9",
    answer: "4/9",
    solution: "Dziewczęta stanowią 4 części z 9 (4+5).",
    year: 2023,
    status: "complete",
  },
  {
    id: 94,
    source: "matematyka-2023-sierpien-poprawkowa-stara-podstawowa.pdf",
    title: "Zadanie 27. (0–2)",
    question:
      "Ze zbioru liczb naturalnych dwucyfrowych mniejszych od 30 losujemy dwa razy po jednej liczbie\nbez zwracania. Oblicz prawdopodobieństwo zdarzenia A, w którym obie wylosowane liczby będą\npodzielne przez 3.",
    answer: "3/38",
    solution:
      "W zbiorze 10–29 znajduje się 20 liczb, z czego 6 podzielnych przez 3. P = (6/20)·(5/19) = 3/38.",
    year: 2023,
    status: "complete",
  },
  {
    id: 95,
    source: "matematyka-2024-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 27. (0–1)",
    question:
      "Wszystkich liczb naturalnych dwucyfrowych parzystych, w których zapisie dziesiętnym\nwystępuje dokładnie jeden raz cyfra 0, jest\nA. 45\n\nB. 50\n\nC. 54\n\nD. 81",
    answer: "9 liczb",
    solution:
      "Dwucyfrowa liczba parzysta z dokładnie jednym zerem musi kończyć się zerem. Dostępne są liczby 10,20,…,90 – razem 9 sztuk. W opublikowanych odpowiedziach występują inne wartości, co zostało zaznaczone w aplikacji.",
    year: 2024,
    status: "complete",
  },
  {
    id: 96,
    source: "matematyka-2024-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 28. (0–1)",
    question:
      "Doświadczenie losowe polega na dwukrotnym rzucie symetryczną sześcienną kostką do gry,\nktóra na każdej ściance ma inną liczbę oczek – od jednego oczka do sześciu oczek.\nDokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.\nPrawdopodobieństwo zdarzenia polegającego na tym, że iloczyn liczb wyrzuconych oczek\njest liczbą parzystą, jest równe\nA. 1/4\n\nB. 1/2\n\nC. 3/4\n\nD. 1",
    answer: "3/4",
    solution:
      "Iloczyn jest parzysty, jeśli co najmniej jedna kostka daje liczbę parzystą. Tylko para dwóch nieparzystych (prawdopodobieństwo 1/4) daje iloczyn nieparzysty, więc szukane P = 1 - 1/4 = 3/4.",
    year: 2024,
    status: "complete",
  },
  {
    id: 97,
    source: "matematyka-2024-czerwiec-matura-podstawowa.pdf",
    title: "Zadanie 30. (0–2)",
    question:
      "Ze zbioru ośmiu liczb {2, 3, 4, 5, 6, 7, 8, 9} losujemy ze zwracaniem kolejno dwa razy po\njednej liczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że iloczyn\nwylosowanych liczb jest podzielny przez 𝟏𝟓. Zapisz obliczenia.",
    answer: "3/32",
    solution:
      "Iloczyn ma być wielokrotnością 15, więc potrzebujemy jednocześnie czynnika 5 i 3. Jedyna liczba podzielna przez 5 to 5, dlatego jedna z wylosowanych liczb musi być 5, druga należy do {3,6,9}. Daje to 6 par na 64 możliwe, czyli 3/32.",
    year: 2024,
    status: "complete",
  },
  {
    id: 98,
    source: "matematyka-2024-maj-matura-podstawowa.pdf",
    title: "Zadanie 29. (0–1)",
    question:
      "Wszystkich liczb naturalnych trzycyfrowych parzystych, w których zapisie dziesiętnym\nwystępuje dokładnie jeden raz cyfra 0, jest\nA. 108\n\nB. 117\n\nC. 126\n\nD. 162",
    answer: "117 liczb",
    solution:
      "Jedyny sposób na dokładnie jedno zero w liczbie parzystej to: zero w jedności (81 liczb) lub zero w dziesiątkach (36 liczb). Razem 117 liczb.",
    year: 2024,
    status: "complete",
  },
  {
    id: 99,
    source: "matematyka-2024-maj-matura-podstawowa.pdf",
    title: "Zadanie 35. (0–2)",
    question:
      "Ze zbioru pięciu liczb {1, 2, 3, 4, 5} losujemy bez zwracania kolejno dwa razy po jednej\nliczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że obie wylosowane\nliczby są nieparzyste. Zapisz obliczenia.",
    answer: "3/10",
    solution:
      "Bez zwracania wybieramy dwie liczby z {1,…,5}. Szansa na dwie nieparzyste to (3/5)·(2/4) = 3/10.",
    year: 2024,
    status: "complete",
  },
  {
    id: 100,
    source: "matematyka-2024-maj-matura-stara-podstawowa.pdf",
    title: "Zadanie 29. (0–1)",
    question:
      "DUPLIKAT - Wszystkich liczb naturalnych trzycyfrowych parzystych, w których zapisie dziesiętnym\nwystępuje dokładnie jeden raz cyfra 0, jest\nA. 108\n\nB. 117\n\nC. 126\n\nD. 162",
    answer: "117 liczb",
    solution: "Treść pokrywa się z nową podstawą – wynik pozostaje 117.",
    year: 2024,
    status: "complete",
  },
  {
    id: 101,
    source: "matematyka-2024-maj-matura-stara-podstawowa.pdf",
    title: "Zadanie 35. (0–2)",
    question:
      "DUPLIKAT - Ze zbioru pięciu liczb {1, 2, 3, 4, 5} losujemy bez zwracania kolejno dwa razy po jednej\nliczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że obie wylosowane\nliczby są nieparzyste. Zapisz obliczenia.",
    answer: "3/10",
    solution: "Analogiczne losowanie bez zwracania – 3/10.",
    year: 2024,
    status: "complete",
  },
  {
    id: 102,
    source: "matematyka-2024-operon-probna-rozszerzona.pdf",
    title: "Zadanie 3. (0–3)",
    question:
      "Wielokąt wypukły ma n wierzchołków, z których losujemy jednocześnie 2.\nOblicz liczbę n wierzchołków, wiedząc, że prawdopodobieństwo zdarzenia A – wylosowane\nwierzchołki utworzą przekątną tego wielokąta – jest równe 0,9. Zapisz obliczenia.",
    answer: "n = 21",
    solution:
      "P(przekątna) = [C(n,2) - n] / C(n,2) = 0,9. Po uproszczeniu 1 - 2/(n-1) = 0,9, więc 2/(n-1) = 0,1. Stąd n - 1 = 20 i n = 21.",
    year: 2024,
    status: "complete",
  },
  {
    id: 103,
    source: "matematyka-2025-czerwiec-matura-stara-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "Ze zbioru cyfr {1, 2,3, 4,5, 6, 7,8} losujemy kolejno dwie cyfry (losowanie bez zwracania)\ni tworzymy liczby dwucyfrowe tak, że pierwsza wylosowana cyfra jest cyfrą dziesiątek,\na druga – cyfrą jedności. Oblicz prawdopodobieństwo utworzenia liczby podzielnej przez 4.",
    answer: "1/4",
    solution:
      "Dwucyfrowy wynik tworzymy bez powtórzeń ze zbioru {1,…,8}. Ręczne policzenie par z podzielnością przez 4 daje 14 korzystnych wyników na 56 możliwych, czyli 1/4.",
    year: 2025,
    status: "complete",
  },
  {
    id: 104,
    source: "matematyka-2025-maj-matura-podstawowa.pdf",
    title: "Zadanie 30. (0–2)",
    question:
      "DUPLIKAT - Ze zbioru ośmiu liczb {2, 3, 4, 5, 6, 7, 8, 9} losujemy ze zwracaniem kolejno dwa razy po\njednej liczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że iloczyn\nwylosowanych liczb jest podzielny przez 𝟏𝟓. Zapisz obliczenia.",
    answer: "3/32",
    solution:
      "Arkusz powtarza zadanie o iloczynie podzielnym przez 15 – wynik 3/32.",
    year: 2025,
    status: "complete",
  },
  {
    id: 105,
    source: "matematyka-2025-maj-matura-stara-podstawowa.pdf",
    title: "Zadanie 31. (0–2)",
    question:
      "DUPLIKAT - Ze zbioru pięciu liczb {1, 2, 3, 4, 5} losujemy bez zwracania kolejno dwa razy po jednej\nliczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że obie wylosowane\nliczby są nieparzyste. Zapisz obliczenia.",
    answer: "3/10",
    solution:
      "To samo losowanie dwóch liczb nieparzystych z {1,…,5} bez zwracania – 3/10.",
    year: 2025,
    status: "complete",
  },
  {
    id: 106,
    source: "matematyka-2025-maj-matura-stara-podstawowa.pdf",
    title: "Zadanie 35. (0–2)",
    question:
      "DUPLIKAT - Ze zbioru ośmiu liczb {2, 3, 4, 5, 6, 7, 8, 9} losujemy ze zwracaniem kolejno dwa razy po\njednej liczbie.\nOblicz prawdopodobieństwo zdarzenia 𝑨 polegającego na tym, że iloczyn\nwylosowanych liczb jest podzielny przez 𝟏𝟓. Zapisz obliczenia.",
    answer: "3/32",
    solution:
      "Powtórzenie zadania o iloczynie podzielnym przez 15 ze zbioru {2,…,9}. Warunek spełniają tylko pary zawierające 5 i jedną z liczb 3,6,9 – 6 wyników z 64.",
    year: 2025,
    status: "complete",
  },
];
