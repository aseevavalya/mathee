/* Explicit TeX keeps grouping and mathematical meaning independent of prose. */
const tex = String.raw;
const mathContent = [
{
formula:tex`a(b+c)=ab+ac`,
rows:tex`$3x+2;\quad a(b-4)$ ~ Ein Ausdruck aus Zahlen, Variablen und Rechenzeichen.
$a+b=b+a$<br>$ab=ba$ ~ Gilt für Addition und Multiplikation.
$(a+b)+c=a+(b+c)$<br>$(ab)c=a(bc)$ ~ Summen und Produkte beliebig klammern.
$a(b+c)=ab+ac$ ~ Jeden Summanden mit $a$ multiplizieren.
$a+(b-c)=a+b-c$ ~ Die Vorzeichen bleiben gleich.
$a-(b-c)=a-b+c$ ~ Alle Vorzeichen in der Klammer wechseln.
Klammern → Potenzen → Punkt → Strich ~ Bei gleicher Priorität von links nach rechts.`,
example:[tex`Vereinfache: $3(2x-4)-(x-5)$`,tex`$$6x-12-x+5=5x-7$$`],
warning:tex`Nur gleichartige Terme lassen sich zusammenfassen: $3x+2x=5x$, aber $3x+2$ bleibt unverändert.`
},
{
formula:tex`x^m\cdot x^n=x^{m+n}`,
rows:tex`$a^n=\underbrace{a\cdot a\cdots a}_{n\text{ Faktoren}}$ ~ $n\ge1$; zusätzlich $a^0=1$ für $a\ne0$.
$a^ma^n=a^{m+n}$<br>$\dfrac{a^m}{a^n}=a^{m-n}$ ~ Beim Teilen: $a\ne0$; hier $m\ge n$.
$(a^m)^n=a^{mn}$ ~ Exponenten multiplizieren.
$(ab)^n=a^nb^n$<br>$\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$ ~ Beim Quotienten: $b\ne0$.
$2x\cdot3x^2y=6x^3y$ ~ Zahlenfaktor zuerst; gleiche Variablen zusammenfassen. Grad: $3+1=4$.
$(2x^2y)(-3xy^3)=-6x^3y^4$ ~ Koeffizienten multiplizieren, Exponenten addieren.
$(-2x^2y)^3=-8x^6y^3$ ~ Jeden Faktor potenzieren.
$(3x^2+x)-(x^2-2x)$<br>$=2x^2+3x$ ~ Klammern öffnen, Gleichartiges zusammenfassen.
$2x(x^2-3x+1)$<br>$=2x^3-6x^2+2x$ ~ Jeden Summanden multiplizieren.
$(x+2)(x+3)=x^2+5x+6$ ~ Jeder Summand mit jedem Summanden.
$\dfrac{6x^3}{2x}=3x^2$<br>$\dfrac{6x^3+4x^2}{2x}=3x^2+2x$ ~ $x\ne0$; jeden Summanden einzeln teilen.`,
example:[tex`Multipliziere: $(2x-1)(x+4)$`,tex`$$2x^2+8x-x-4=2x^2+7x-4$$`],
warning:tex`$(a+b)^2$ ist im Allgemeinen nicht $a^2+b^2$. Potenzregeln für Produkte darfst du nicht auf Summen übertragen.`
},
{
formula:tex`ab+ac=a(b+c)`,
rows:tex`$6x^3+9x^2=3x^2(2x+3)$ ~ Größter gemeinsamer Zahlenfaktor und kleinste gemeinsame Potenz.
$-x^2+3x=-x(x-3)$ ~ Alle Vorzeichen im Inneren ändern sich.
$ax+ay+bx+by$<br>$=a(x+y)+b(x+y)$ ~ Gruppen mit gemeinsamen Faktoren bilden.
$a(x+y)+b(x+y)$<br>$=(a+b)(x+y)$ ~ Auch eine ganze Klammer kann ein Faktor sein.
$3x^2(2x+3)=6x^3+9x^2$ ~ Zur Probe wieder ausmultiplizieren.`,
example:[tex`Faktorisiere: $x^3+2x^2+3x+6$`,tex`$$\begin{aligned}x^3+2x^2+3x+6&=x^2(x+2)+3(x+2)\\&=(x+2)(x^2+3)\end{aligned}$$`],
warning:tex`Ausklammern teilt jeden Summanden durch den ausgeklammerten Faktor. Beispiel: $x^2+x=x(x+1)$, nicht $x(x+x)$.`
},
{
formula:tex`(a+b)^2=a^2+2ab+b^2`,
rows:tex`$(a+b)^2=a^2+2ab+b^2$ ~ Erste binomische Formel.
$(a-b)^2=a^2-2ab+b^2$ ~ Zweite binomische Formel.
$a^2-b^2=(a-b)(a+b)$ ~ Dritte binomische Formel.
$a^3+b^3=(a+b)(a^2-ab+b^2)$ ~ Im zweiten Faktor steht $-ab$.
$a^3-b^3=(a-b)(a^2+ab+b^2)$ ~ Im zweiten Faktor steht $+ab$.
$(a+b)^3$<br>$=a^3+3a^2b+3ab^2+b^3$ ~ Koeffizienten: $1,3,3,1$.
$(a-b)^3$<br>$=a^3-3a^2b+3ab^2-b^3$ ~ Die Vorzeichen wechseln.
$2x^3-8x=2x(x^2-4)$<br>$=2x(x-2)(x+2)$ ~ Erst ausklammern, dann eine Formel anwenden.`,
example:[tex`Faktorisiere: $9x^2-12x+4$`,tex`$$\begin{aligned}9x^2-12x+4&=(3x)^2-2\cdot3x\cdot2+2^2\\&=(3x-2)^2\end{aligned}$$`],
warning:tex`Bei $(a-b)^2$ ist das letzte Glied $+b^2$. Prüfe immer auch den gemischten Term $\pm2ab$.`
},
{
formula:tex`\frac ab+\frac cb=\frac{a+c}{b}`,
rows:tex`$\dfrac1{x-2}:\quad x\ne2$ ~ Nenner dürfen nie null sein. Vor dem Kürzen prüfen!
$\dfrac{x^2-9}{x-3}=x+3,\quad x\ne3$ ~ Zähler faktorisieren: $(x-3)(x+3)$.
$\dfrac ac\pm\dfrac bc=\dfrac{a\pm b}{c}$ ~ $c\ne0$; nur Zähler addieren oder subtrahieren.
$\dfrac ab+\dfrac cd=\dfrac{ad+bc}{bd}$ ~ $b,d\ne0$; möglichst den kleinsten gemeinsamen Nenner wählen.
$\dfrac ab\cdot\dfrac cd=\dfrac{ac}{bd}$ ~ $b,d\ne0$; gemeinsame Faktoren vorher kürzen.
$\dfrac ab:\dfrac cd=\dfrac{ad}{bc}$ ~ $b,c,d\ne0$; mit dem Kehrwert multiplizieren.
$\dfrac1x+\dfrac1{x+1}=\dfrac{2x+1}{x(x+1)}$ ~ $x\ne0$ und $x\ne-1$.
Klammern → Potenzen → Punkt → Strich ~ Definitionsmenge notieren, faktorisieren, kürzen, rechnen.`,
example:[tex`Vereinfache: $\dfrac{x^2-4}{x+2}\cdot\dfrac3x$`,tex`Es gilt $x\ne-2$ und $x\ne0$.$$\frac{(x-2)(x+2)}{x+2}\cdot\frac3x=\frac{3(x-2)}x$$Die ursprünglichen Ausschlüsse bleiben gültig.`],
warning:tex`Man kürzt Faktoren, keine Summanden: $\dfrac{x+2}{x}$ lässt sich nicht zu $2$ kürzen.`
},
{
formula:tex`y=mx+b`,
rows:tex`$f(x)=mx+b$ ~ Der Graph ist eine Gerade; $m$ und $b$ sind reelle Zahlen.
$m=\dfrac{y_2-y_1}{x_2-x_1}$ ~ $x_1\ne x_2$; positiv: steigend, negativ: fallend, null: waagerecht.
$f(0)=b$ ~ Schnittpunkt mit der vertikalen Achse: $(0\mid b)$.
$x_0=-\dfrac bm\quad(m\ne0)$ ~ $y=0$ setzen. Für $m=0$: keine Nullstelle bei $b\ne0$, alle $x$ bei $b=0$.
$(0\mid b)\;\longrightarrow\;(1\mid b+m)$ ~ Vom Achsenabschnitt eine Einheit nach rechts, dann um $m$ nach oben (bei negativem $m$ nach unten).
$y=mx$ ~ $b=0$: Die Gerade geht durch den Ursprung.
$m_1=m_2,\quad b_1\ne b_2$ ~ Gleiche Steigung, unterschiedliche Achsenabschnitte.`,
example:[tex`Bestimme die Gerade durch $A(1\mid3)$ und $B(3\mid7)$.`,tex`$$m=\frac{7-3}{3-1}=2$$Mit $A$: $3=2\cdot1+b$, also $b=1$. Ergebnis: $y=2x+1$.`],
warning:tex`Die Steigung ist $\dfrac{\Delta y}{\Delta x}$, nicht $\dfrac{\Delta x}{\Delta y}$. Eine senkrechte Gerade $x=c$ ist kein Funktionsgraph $y=f(x)$.`
},
{
formula:tex`\begin{cases}2x+y=5\\x-y=1\end{cases}`,
rows:tex`$(x\mid y)$ erfüllt beide Gleichungen ~ Immer in beide ursprünglichen Gleichungen einsetzen.
$x-y=1\;\Rightarrow\;y=x-1$ ~ In $2x+y=5$ einsetzen: $2x+x-1=5$.
$3x=6\;\Rightarrow\;x=2\;\Rightarrow\;y=1$ ~ Erst eine, dann die andere Unbekannte bestimmen.
$(2x+y)+(x-y)=5+1$ ~ Die Terme mit $y$ fallen weg. Bei Bedarf Gleichungen vorher passend multiplizieren.
$y=5-2x;\quad y=x-1$ ~ Geraden zeichnen. Schnittpunkt $S(2\mid1)$ ist die Lösung.
$m_1\ne m_2$ ~ Zwei Geraden schneiden sich.
$m_1=m_2,\quad b_1\ne b_2$ ~ Parallele Geraden; beim Rechnen entsteht z. B. $0=3$.
$m_1=m_2,\quad b_1=b_2$ ~ Identische Geraden; beim Rechnen entsteht $0=0$.`,
example:[tex`Löse: $\begin{cases}3x+2y=12\\x-2y=4\end{cases}$`,tex`Addieren: $4x=16\Rightarrow x=4$. Dann $4-2y=4\Rightarrow y=0$. Probe: $12+0=12$ und $4-0=4$.`],
warning:tex`Grafisches Ablesen liefert oft nur Näherungen. Eine exakte Lösung erhältst du mit Einsetzen oder Addieren.`
},
{
formula:tex`\sqrt{ab}=\sqrt a\cdot\sqrt b`,
rows:tex`$\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R$ ~ Hier $\mathbb N=\{1,2,3,\ldots\}$; $\mathbb Z$ enthält auch $0$ und negative ganze Zahlen.
$\mathbb Q=\left\{\dfrac pq:p,q\in\mathbb Z,\;q\ne0\right\}$ ~ Dezimaldarstellung endlich oder periodisch, z. B. $0{,}75$; $0{,}\overline3$.
$\mathbb R\setminus\mathbb Q:\quad\sqrt2,\;\pi$ ~ Unendliche, nicht periodische Dezimaldarstellung.
$\sqrt a\ge0;\quad(\sqrt a)^2=a$ ~ Für $a\ge0$ ist $\sqrt a$ die nichtnegative Zahl, deren Quadrat $a$ ist.
$x=\begin{cases}\pm\sqrt a&a>0\\0&a=0\end{cases}$ ~ Für $a<0$ gibt es keine reelle Lösung.
$y=\sqrt x;\quad x\ge0;\quad y\ge0$ ~ Punkte: $(0\mid0)$, $(1\mid1)$, $(4\mid2)$, $(9\mid3)$.
$\sqrt{ab}=\sqrt a\cdot\sqrt b$ ~ Gültig für $a\ge0$ und $b\ge0$.
$\sqrt{\dfrac ab}=\dfrac{\sqrt a}{\sqrt b}$ ~ Gültig für $a\ge0$ und $b>0$.
$\sqrt{a^2}=|a|;\quad\sqrt{a^{2n}}=|a^n|$ ~ Der Betrag sichert ein nichtnegatives Ergebnis.
$\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$ ~ Allgemein: $\sqrt{c^2a}=|c|\sqrt a$ für $a\ge0$.
$c\sqrt a=\sqrt{c^2a}\quad(c\ge0)$ ~ $a\ge0$. Bei $c<0$ bleibt das Minus davor: $-2\sqrt3=-\sqrt{12}$.
$3\sqrt2+5\sqrt2=8\sqrt2$ ~ Nur gleiche Wurzelteile zusammenfassen.
$\dfrac1{\sqrt2}=\dfrac{\sqrt2}2$ ~ Mit $\sqrt2$ erweitern. Bei $\dfrac1{\sqrt a+\sqrt b}$ hilft $\sqrt a-\sqrt b$, sofern zulässig.`,
example:[tex`Vereinfache: $\sqrt{50}+\sqrt8-\sqrt{18}$`,tex`$$5\sqrt2+2\sqrt2-3\sqrt2=4\sqrt2$$`],
warning:tex`$\sqrt{a+b}$ ist im Allgemeinen nicht $\sqrt a+\sqrt b$. Außerdem ist $\sqrt9=3$, während $x^2=9$ die zwei Lösungen $x=\pm3$ hat.`
},
{
formula:tex`x_{1,2}=\frac{-b\pm\sqrt D}{2a}`,
rows:tex`$ax^2+bx+c=0;\quad a\ne0$ ~ Zuerst alle Terme auf eine Seite bringen.
$ax^2+bx=x(ax+b)=0$ ~ Nullprodukt: $x_1=0$, $x_2=-\dfrac ba$.
$ax^2+c=0\;\Rightarrow\;x^2=-\dfrac ca$ ~ Je nach Vorzeichen von $-\dfrac ca$: zwei, eine oder keine reelle Lösung.
$x=0$ ~ Eine doppelte Nullstelle.
$D=b^2-4ac$ ~ $D>0$: zwei; $D=0$: eine doppelte; $D<0$: keine reelle Lösung.
$x_{1,2}=\dfrac{-b\pm\sqrt D}{2a}$ ~ Für $D\ge0$. Der gesamte Zähler wird durch $2a$ geteilt.
$x_1+x_2=-\dfrac ba;\quad x_1x_2=\dfrac ca$ ~ Bei $x^2+px+q=0$: Summe $-p$ und Produkt $q$.
$a+b+c=0$<br>$\Rightarrow\;x_1=1,\quad x_2=\dfrac ca$ ~ Weil Einsetzen von $x=1$ null ergibt.
$a-b+c=0$<br>$\Rightarrow\;x_1=-1,\quad x_2=-\dfrac ca$ ~ Weil Einsetzen von $x=-1$ null ergibt.
$ax^4+bx^2+c=0$<br>$\longrightarrow\;at^2+bt+c=0$ ~ Substitution $t=x^2$, also $t\ge0$.
$x=\begin{cases}\pm\sqrt t&t>0\\0&t=0\end{cases}$ ~ Negative Werte für $t$ ergeben keine reellen Lösungen für $x$.`,
example:[tex`Löse: $x^4-5x^2+4=0$.`,tex`Setze $t=x^2$.$$t^2-5t+4=(t-1)(t-4)=0$$Also $t=1$ oder $t=4$. Rücksubstitution: $$x\in\{-2,-1,1,2\}$$`],
warning:tex`$a$ muss ungleich null sein. Bei der Substitution $t=x^2$ sind nur nichtnegative Werte für $t$ zulässig. Vergiss bei der Rücksubstitution das $\pm$ nicht.`
}
];
function enrichMath(topics){
  topics.forEach((topic,i)=>{
    const data=mathContent[i];
    topic.rawRows=topic.rows.map(row=>[...row]);
    topic.searchText=[topic.title,topic.desc,topic.formula,...topic.tags,...topic.rows.flat()].join(' ');
    const rows=data.rows.split('\n').map(line=>line.split(' ~ '));
    if(rows.length!==topic.rows.length)throw Error(`Row count mismatch: ${topic.title}`);
    topic.rows=topic.rows.map((row,j)=>[row[0],...rows[j]]);
    Object.assign(topic,{formula:data.formula,example:data.example,warning:data.warning});
  });
  topics[5].rows[2][0]=tex`$y$-Achsenabschnitt`;
  topics[7].rows[4][0]=tex`Gleichung $x^2=a$`;
  topics[8].rows[1][0]=tex`Unvollständig: $c=0$`;
  topics[8].rows[2][0]=tex`Unvollständig: $b=0$`;
  topics[8].rows[3][0]=tex`Nur $ax^2=0$`;
}
function math(expression,displayMode=false){return katex.renderToString(expression,{displayMode,throwOnError:true,strict:'error',output:'htmlAndMathml',trust:false});}
function rich(source){return source.replace(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g,(_,block,inline)=>block?`<span class="math-line">${math(block,true)}</span>`:math(inline));}
