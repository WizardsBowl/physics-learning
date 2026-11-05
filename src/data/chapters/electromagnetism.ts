import type { Chapter } from '../../types/physics'

export const electromagnetism: Chapter = {
  id: 'electromagnetism',
  title: '电磁学',
  enTitle: 'Electromagnetism',
  accent: '#10b981',
  description: '从库仑定律到麦克斯韦方程组：静电场、导体与电介质、恒定磁场、磁介质与电磁感应。',
  points: [
    {
      id: 'coulomb-law',
      title: '电荷与库仑定律',
      summary: '电荷守恒与量子化是静电现象的基础，库仑定律给出真空中两个点电荷之间的作用力。',
      formulas: [
        {
          latex: String.raw`\vec{F}_{12} = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r^2}\,\hat{r}_{12}`,
          note: '库仑定律：同号相斥、异号相吸，r̂₁₂ 由电荷 1 指向电荷 2',
        },
        { latex: String.raw`\varepsilon_0 = 8.85\times 10^{-12}\ \mathrm{F/m}`, note: '真空介电常数' },
        {
          latex: String.raw`q = \pm ne,\quad e = 1.60\times 10^{-19}\ \mathrm{C}`,
          note: '电荷量子化（n 为整数）与元电荷',
        },
        { latex: String.raw`\sum_i q_i = \mathrm{const}`, note: '电荷守恒定律（孤立系统）' },
      ],
      keyPoints: [
        '库仑定律只适用于真空中的点电荷；实际带电体需先分割为电荷元，再用叠加原理求合力。',
        '电荷的三条基本性质：守恒性、量子化、相对论不变性（与运动状态无关）。',
        '力满足叠加原理：某电荷受到的合力等于其余电荷单独作用于它的力的矢量和。',
        '介质中两点电荷之间的作用力减弱为真空中的 1/ε_r，方向不变。',
      ],
      examples: [],
      level: 1,
    },
    {
      id: 'electric-field',
      title: '电场强度与场强叠加',
      summary: '用电场强度定量描述电场，点电荷场强经矢量叠加可给出任意带电体的场分布。',
      formulas: [
        { latex: String.raw`\vec{E} = \frac{\vec{F}}{q_0}`, note: '场强定义，q₀ 为检验电荷（取 q₀ → 0）' },
        {
          latex: String.raw`\vec{E} = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\,\hat{r}`,
          note: '点电荷的场强，r̂ 由电荷指向场点',
        },
        {
          latex: String.raw`\vec{E} = \int \frac{1}{4\pi\varepsilon_0}\frac{dq}{r^2}\,\hat{r}`,
          note: '连续带电体的场强（矢量积分）',
        },
        { latex: String.raw`dq = \lambda\,dl = \sigma\,dS = \rho\,dV`, note: '线、面、体电荷元' },
        { latex: String.raw`\vec{p}_e = q\vec{l}`, note: '电偶极矩（l 由负电荷指向正电荷）' },
      ],
      keyPoints: [
        '场强是矢量，方向沿正电荷在该点所受电场力的方向，单位 N/C，与 V/m 等价。',
        '电场线起于正电荷、止于负电荷，不闭合、不相交；疏密表示场强大小。',
        '叠加时必须先分解到坐标轴再合成，不能把各电荷场强的大小直接相加。',
        '电偶极子的场强按 1/r³ 衰减，比点电荷的 1/r² 衰减更快，远场可忽略。',
      ],
      examples: [],
      level: 1,
    },
    {
      id: 'gauss-law',
      title: '静电场的高斯定理',
      summary: '闭合面的电通量只由面内净电荷决定，对称分布时可用它直接求出场强。',
      formulas: [
        { latex: String.raw`\Phi_e = \int_S \vec{E}\cdot d\vec{S}`, note: '电通量的定义' },
        {
          latex: String.raw`\oint_S \vec{E}\cdot d\vec{S} = \frac{q_{\mathrm{in}}}{\varepsilon_0}`,
          note: '高斯定理，q_in 为闭合面内的净电荷',
        },
        {
          latex: String.raw`E = \frac{\lambda}{2\pi\varepsilon_0 r}`,
          note: '无限长均匀带电直线（柱对称）',
        },
        { latex: String.raw`E = \frac{\sigma}{2\varepsilon_0}`, note: '无限大均匀带电平面（面对称）' },
        {
          latex: String.raw`E_{\mathrm{out}} = \frac{1}{4\pi\varepsilon_0}\frac{q}{r^2},\quad E_{\mathrm{in}} = 0`,
          note: '均匀带电球面外、内的场强（r > R 时）',
        },
      ],
      keyPoints: [
        '电通量只由面内净电荷决定，但场强由空间所有电荷（含面外）共同决定。',
        '高斯定理对任意闭合曲面恒成立，只有球、柱、面对称时才能用它直接解出 E。',
        '取高斯面的原则：让 E 垂直穿过曲面（或与曲面平行），并使 E 在面上大小处处相等。',
        '通量为零不代表场强为零：无电荷区域仍有场，只是穿入与穿出的通量相抵。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'potential',
      title: '静电场的环路定理与电势',
      summary: '静电力做功与路径无关，可引入电势；电势是标量，计算常比场强简便。',
      formulas: [
        { latex: String.raw`\oint_L \vec{E}\cdot d\vec{l} = 0`, note: '环路定理：静电场是保守场' },
        {
          latex: String.raw`V_a = \int_a^{\infty} \vec{E}\cdot d\vec{l}`,
          note: '电势定义（取无穷远为电势零点）',
        },
        { latex: String.raw`U_{ab} = V_a - V_b = \int_a^b \vec{E}\cdot d\vec{l}`, note: '电势差（电压）' },
        { latex: String.raw`V = \frac{1}{4\pi\varepsilon_0}\frac{q}{r}`, note: '点电荷的电势' },
        { latex: String.raw`W_{ab} = q(V_a - V_b)`, note: '电场力做功与电势差的关系' },
      ],
      keyPoints: [
        '环路定理等价于静电力做功与路径无关，因此可以引入电势能。',
        '电势是标量，叠加时按符号代数相加，比场强的矢量叠加简便。',
        '电势零点可以任选（常用无穷远或大地），但同一问题中只能取一个零点。',
        '沿电场线方向电势降低；场强为零处电势未必为零（如带电球壳内部电势等于表面电势）。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'field-potential-gradient',
      title: '场强与电势梯度的关系',
      summary: '已知电势分布时，用梯度的负值即可求出各点场强，这是电场线与等势面正交的数学表述。',
      formulas: [
        { latex: String.raw`E_l = -\frac{dV}{dl}`, note: '场强沿某一方向 l 的分量' },
        {
          latex: String.raw`\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\vec{i} + \frac{\partial V}{\partial y}\vec{j} + \frac{\partial V}{\partial z}\vec{k}\right)`,
          note: '直角坐标下的梯度关系',
        },
        { latex: String.raw`|\vec{E}| = \left|\frac{dV}{dn}\right|`, note: '场强大小等于沿等势面法向的电势变化率' },
      ],
      keyPoints: [
        '负号表示场强指向电势降低最快的方向，并且垂直于等势面。',
        '已知 V 求 E 用梯度（微分），已知 E 求 V 用线积分（并选定电势零点）。',
        '等势面越密处场强越大；电场线与等势面处处正交。',
        '电势相同不代表场强相同：同一等势面上各点的场强方向、大小可以不同。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'conductor-electrostatic',
      title: '静电场中的导体',
      summary: '静电平衡后导体内部场强为零、整体等势，电荷全部分布在表面，这决定了感应电荷的分布。',
      formulas: [
        { latex: String.raw`\vec{E}_{\mathrm{in}} = 0,\quad V = \mathrm{const}`, note: '静电平衡的两个基本结论' },
        {
          latex: String.raw`E_{\mathrm{surf}} = \frac{\sigma}{\varepsilon_0}`,
          note: '导体表面附近的场强，方向垂直于表面',
        },
        { latex: String.raw`\sigma_1 R_1 = \sigma_2 R_2`, note: '相连两导体球：曲率大（R 小）处电荷面密度大' },
      ],
      keyPoints: [
        '静电平衡三条结论：内部场强为零、整个导体是等势体、净电荷只分布在外表面。',
        '导体表面场强垂直于表面，尖端处电荷最密、场强最强，容易发生尖端放电。',
        '空腔导体内部无电荷时腔内场强为零，可以屏蔽外电场（静电屏蔽）。',
        '腔内有电荷时内表面感应等量异号电荷；若要屏蔽它对腔外的影响，外壳必须接地。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'dielectric',
      title: '静电场中的电介质',
      summary: '电介质被极化后产生束缚电荷，使介质内部场强减弱，并引入电位移矢量 D 简化计算。',
      formulas: [
        { latex: String.raw`\vec{P} = \chi_e\varepsilon_0\vec{E}`, note: '各向同性线性介质的极化强度' },
        { latex: String.raw`\sigma' = P_n = \vec{P}\cdot\hat{n}`, note: '介质表面的极化电荷面密度' },
        { latex: String.raw`\varepsilon_r = 1 + \chi_e`, note: '相对介电常数与极化率的关系' },
        {
          latex: String.raw`\vec{E} = \frac{\vec{E}_0}{\varepsilon_r}`,
          note: '充满均匀介质后场强减弱（E₀ 为自由电荷产生的场）',
        },
        {
          latex: String.raw`\vec{D} = \varepsilon_0\vec{E} + \vec{P} = \varepsilon_0\varepsilon_r\vec{E}`,
          note: '电位移矢量',
        },
      ],
      keyPoints: [
        '无极分子发生位移极化，有极分子发生取向极化；极化电荷（束缚电荷）不能自由移动。',
        '极化电荷总是削弱介质内部的场强，因此 E = E₀/ε_r（ε_r ≥ 1）。',
        '极化电荷只出现在介质表面或不同介质的分界面上，介质内部净电荷为零。',
        'D 线起止于自由电荷，E 线起止于总电荷（自由电荷 + 极化电荷）。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'gauss-law-dielectric',
      title: '有电介质时的高斯定理',
      summary: '把极化电荷并入通量，得到只含自由电荷的 D 高斯定理，是介质中场强计算的标准工具。',
      formulas: [
        {
          latex: String.raw`\oint_S \vec{D}\cdot d\vec{S} = \sum q_{0,\mathrm{in}}`,
          note: '有介质时的高斯定理（只计自由电荷）',
        },
        { latex: String.raw`\vec{D} = \varepsilon_0\varepsilon_r\vec{E}`, note: '线性介质中 D 与 E 的关系' },
        {
          latex: String.raw`\oint_S \vec{E}\cdot d\vec{S} = \frac{q_{0,\mathrm{in}} + q'_{\mathrm{in}}}{\varepsilon_0}`,
          note: '计入极化电荷的原始形式',
        },
        {
          latex: String.raw`D_{1n} = D_{2n},\qquad E_{1t} = E_{2t}`,
          note: '无自由面电荷时，分界面上 D 法向连续、E 切向连续',
        },
      ],
      keyPoints: [
        'D 高斯定理避开了难以直接测量的极化电荷：先求 D，再由 E = D/(ε₀ε_r) 求场强。',
        '只有自由电荷分布具有球、柱、面对称性时，才能由 D 高斯定理直接解出 D。',
        '有介质时静电场仍是有源无旋场，环路定理 ∮E·dl = 0 依然成立。',
        'ε_r 无量纲，真空中 ε_r = 1；导体可看作 ε_r → ∞ 的极限情形。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'capacitance',
      title: '电容与电容器',
      summary: '电容反映导体储存电荷的本领，只由几何结构与介质决定；串联、并联可改变总电容。',
      formulas: [
        { latex: String.raw`C = \frac{Q}{U}`, note: '电容的定义（由结构决定，与 Q、U 无关）' },
        { latex: String.raw`C = \frac{\varepsilon_0\varepsilon_r S}{d}`, note: '平行板电容器' },
        {
          latex: String.raw`C = \frac{2\pi\varepsilon_0\varepsilon_r l}{\ln(R_2/R_1)}`,
          note: '同轴圆柱形电容器（l 为长度）',
        },
        {
          latex: String.raw`C = \frac{4\pi\varepsilon_0\varepsilon_r R_1 R_2}{R_2 - R_1}`,
          note: '同心球形电容器',
        },
        {
          latex: String.raw`\frac{1}{C} = \sum_i \frac{1}{C_i},\qquad C = \sum_i C_i`,
          note: '串联（左）与并联（右）',
        },
      ],
      keyPoints: [
        '电容只由导体的大小、形状、相对位置和介质决定，与是否带电、电压高低无关。',
        '串联时各电容器电荷相同、电压相加；并联时各电容器电压相同、电荷相加。',
        '计算电容的通用步骤：设电荷 Q → 求场强 E → 求电压 U → 由 C = Q/U 得结果。',
        '插入电介质后电容增大 ε_r 倍，同时耐压（击穿电压）也随之提高。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'electrostatic-energy',
      title: '静电场的能量',
      summary: '带电体系的能量储存在电场中，能量密度与场强的平方成正比。',
      formulas: [
        {
          latex: String.raw`W_e = \frac{1}{2}\frac{Q^2}{C} = \frac{1}{2}CU^2 = \frac{1}{2}QU`,
          note: '电容器储能（三式等价）',
        },
        {
          latex: String.raw`w_e = \frac{1}{2}\varepsilon_0\varepsilon_r E^2 = \frac{1}{2}\vec{D}\cdot\vec{E}`,
          note: '静电场能量密度',
        },
        { latex: String.raw`W_e = \int_V w_e\,dV`, note: '总能量等于能量密度的体积分' },
      ],
      keyPoints: [
        '能量储存在电场中，能量密度与 E² 成正比，而不是“储存在电荷上”。',
        '三个储能公式等价，按已知量选用：已知电压用 ½CU²，已知电荷用 ½Q²/C。',
        '充电过程中电源做功，一部分转化为电场能量，另一部分在导线电阻上转为焦耳热。',
        '同一 E 下介质中的能量密度是真空的 ε_r 倍；抽出介质时需要克服电场力做功。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'steady-current',
      title: '恒定电流',
      summary: '电荷定向移动形成电流，用电流密度描述空间的电流分布，欧姆定律的微分形式点点成立。',
      formulas: [
        {
          latex: String.raw`I = \frac{dq}{dt},\qquad I = \int_S \vec{j}\cdot d\vec{S}`,
          note: '电流强度与电流密度的关系',
        },
        { latex: String.raw`\vec{j} = nq\vec{v}_d`, note: '电流密度的微观表达式（v_d 为漂移速度）' },
        { latex: String.raw`\vec{j} = \sigma\vec{E}`, note: '欧姆定律的微分形式（σ 为电导率）' },
        { latex: String.raw`R = \rho\frac{l}{S},\qquad \rho = \frac{1}{\sigma}`, note: '电阻与电阻率' },
        { latex: String.raw`\oint_S \vec{j}\cdot d\vec{S} = 0`, note: '恒定电流的连续性方程（电荷不堆积）' },
      ],
      keyPoints: [
        '恒定电流时导体内部的电荷分布不随时间变化，空间存在恒定的电场。',
        '电流密度是矢量，方向取正电荷的运动方向；I 是 j 穿过截面的通量。',
        '欧姆定律的微分形式逐点成立，可用于非均匀导体与准静态情形。',
        '自由电子的漂移速度很小（约 10⁻⁴ m/s），但电场以光速建立，所以灯泡几乎瞬时变亮。',
      ],
      examples: [],
      level: 1,
    },
    {
      id: 'biot-savart',
      title: '恒定磁场与毕奥–萨伐尔定律',
      summary: '电流在周围空间激发磁场，电流元的磁场由毕奥–萨伐尔定律给出，叠加后可得任意载流导线的磁场。',
      formulas: [
        {
          latex: String.raw`d\vec{B} = \frac{\mu_0}{4\pi}\frac{I\,d\vec{l}\times\hat{r}}{r^2}`,
          note: '毕奥–萨伐尔定律',
        },
        { latex: String.raw`\mu_0 = 4\pi\times 10^{-7}\ \mathrm{T\cdot m/A}`, note: '真空磁导率' },
        { latex: String.raw`B = \frac{\mu_0 I}{2\pi r}`, note: '无限长直载流导线' },
        { latex: String.raw`B = \frac{\mu_0 I}{2R}`, note: '圆环电流在圆心处的磁场' },
        { latex: String.raw`B = \mu_0 n I`, note: '无限长载流螺线管内部（n = N/l）' },
      ],
      keyPoints: [
        '磁感应强度 B 是矢量，方向为该点小磁针 N 极的指向，单位 T（1 T = 10⁴ Gs）。',
        '电流元 Idl 的方向沿电流方向，dl×r̂ 的叉乘顺序不能颠倒，否则方向相反。',
        '磁场同样满足叠加原理：各电流元（或各段导线）产生的 B 直接矢量相加。',
        '毕奥–萨伐尔定律适用于恒定电流；均匀磁介质中把 μ₀ 换成 μ = μ₀μ_r。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'ampere-law',
      title: '磁场的高斯定理与安培环路定理',
      summary: '磁场无源、磁感线闭合；安培环路定理把 B 的环量与所围电流联系起来，是对称磁场求 B 的利器。',
      formulas: [
        { latex: String.raw`\oint_S \vec{B}\cdot d\vec{S} = 0`, note: '磁场的高斯定理：磁场是无源场' },
        {
          latex: String.raw`\oint_L \vec{B}\cdot d\vec{l} = \mu_0\sum_L I_{\mathrm{in}}`,
          note: '安培环路定理（I_in 为穿过环路的电流代数和）',
        },
        { latex: String.raw`B = \frac{\mu_0 N I}{2\pi r}`, note: '螺绕环内部（r 为环内半径）' },
        { latex: String.raw`B = \frac{\mu_0 K}{2}`, note: '无限大均匀载流平面（K 为面电流密度）' },
      ],
      keyPoints: [
        '磁感线闭合、无始无终，说明自然界不存在磁单极子（∮B·dS = 0）。',
        '环路定理右端的电流有正负：与环路绕行方向成右手螺旋的电流取正。',
        '只有 B 在环路上大小相等、方向沿切向时，才能由环路定理直接求出 B。',
        '环路外的电流对环量没有贡献，但它在环路上产生的磁场并不为零。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'charged-particle-motion',
      title: '带电粒子在电磁场中的运动',
      summary: '洛伦兹力决定带电粒子的轨迹：磁场力只改变方向，电场力可以改变速率，组合起来可加速、聚焦与约束粒子。',
      formulas: [
        { latex: String.raw`\vec{F} = q\vec{E} + q\vec{v}\times\vec{B}`, note: '洛伦兹力' },
        {
          latex: String.raw`r = \frac{mv}{qB},\qquad T = \frac{2\pi m}{qB}`,
          note: '垂直入射匀强磁场时的回旋半径与周期',
        },
        { latex: String.raw`h = v_{\parallel}T`, note: '速度含平行分量时螺旋运动的螺距' },
        { latex: String.raw`E_k = \frac{q^2 B^2 r^2}{2m}`, note: '回旋加速器中粒子的动能' },
      ],
      keyPoints: [
        '磁场力始终垂直于速度，只改变速度方向、不做功；电场力可以改变速率与动能。',
        '回旋周期 T 与速率无关，这正是回旋加速器能用固定频率加速的原因。',
        '速度与 B 斜交时分解为平行方向的匀速直线运动与垂直方向的圆周运动，合成螺旋线。',
        '霍尔效应中载流子受洛伦兹力偏转，稳态时横向电场力与磁力平衡，qE = qvB。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'magnetic-force',
      title: '磁场对载流导线的作用与磁力的功',
      summary: '安培力使载流导线受力，磁力矩使线圈转动；磁力做功可用磁通量的变化量计算。',
      formulas: [
        { latex: String.raw`d\vec{F} = I\,d\vec{l}\times\vec{B}`, note: '电流元所受的安培力' },
        { latex: String.raw`\vec{F} = I\vec{L}\times\vec{B}`, note: '匀强磁场中的直导线' },
        {
          latex: String.raw`\vec{m} = I\vec{S},\qquad \vec{M} = \vec{m}\times\vec{B}`,
          note: '磁矩与磁力矩（S 为线圈面积矢量）',
        },
        { latex: String.raw`W = I\Delta\Phi`, note: '磁力（磁力矩）做的功（恒定电流）' },
        {
          latex: String.raw`\frac{F}{l} = \frac{\mu_0 I_1 I_2}{2\pi d}`,
          note: '两根平行长直导线单位长度间的磁力',
        },
      ],
      keyPoints: [
        '安培力方向用左手定则：四指指向电流，磁感线穿入掌心，拇指指向受力方向。',
        '匀强磁场中闭合载流线圈所受合力为零，但一般受力矩作用，使其磁矩趋向与 B 同向。',
        '磁矩方向由右手螺旋定则沿线圈法向确定，与电流的绕行方向对应。',
        '磁力做功 W = IΔΦ 仅对恒定电流成立；磁力矩做功的正负取决于线圈转向。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'magnetic-media',
      title: '磁介质及其磁化',
      summary: '磁介质被磁化后产生附加磁场，引入磁场强度 H 可把安培环路定理写成只含自由电流的形式。',
      formulas: [
        {
          latex: String.raw`\vec{B} = \vec{B}_0 + \vec{B}' = \mu_r\vec{B}_0`,
          note: '磁介质使原磁场增强（顺磁）或减弱（抗磁）',
        },
        {
          latex: String.raw`\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M},\qquad \vec{B} = \mu_0\mu_r\vec{H}`,
          note: '磁场强度与磁化强度',
        },
        {
          latex: String.raw`\oint_L \vec{H}\cdot d\vec{l} = \sum I_{0,\mathrm{in}}`,
          note: '介质中的安培环路定理（只计自由电流）',
        },
        { latex: String.raw`\mu_r = 1 + \chi_m`, note: '相对磁导率与磁化率' },
      ],
      keyPoints: [
        '顺磁质 μ_r 略大于 1，抗磁质 μ_r 略小于 1，铁磁质的 μ_r 可达 10³～10⁵。',
        '磁化电流（束缚电流）由分子电流的取向产生，不能像自由电流那样引出来，也不产生焦耳热。',
        'H 只与自由电流有关：先用 H 的环路定理求 H，再由 B = μ₀μ_r H 求 B。',
        '介质中磁场的高斯定理仍是 ∮B·dS = 0，磁感线依旧闭合。',
      ],
      examples: [],
      level: 3,
    },
    {
      id: 'ferromagnet',
      title: '铁磁质',
      summary: '铁磁质能被强烈磁化且存在磁滞，广泛用于变压器铁芯与永磁体（教材中标为选学内容）。',
      formulas: [
        { latex: String.raw`B = f(H)`, note: '非线性磁化曲线，B 的变化滞后于 H' },
        { latex: String.raw`\mu_r \gg 1`, note: '相对磁导率很大且随 H 变化' },
        { latex: String.raw`W = \oint H\,dB`, note: '单位体积的磁滞损耗（等于磁滞回线的面积）' },
      ],
      keyPoints: [
        '铁磁质在外磁场中可被强烈磁化，撤去外场后仍保留剩磁，即磁滞现象。',
        '磁滞回线的面积代表单位体积每个周期的磁滞损耗，软磁材料要求回线窄、损耗小。',
        '温度超过居里点后铁磁质转变为顺磁质，铁磁性消失。',
        '软磁材料（硅钢、坡莫合金）用于变压器铁芯，硬磁材料（钕铁硼）用于永磁体。',
      ],
      examples: [],
      level: 3,
    },
    {
      id: 'induction',
      title: '电磁感应',
      summary: '磁通量变化产生感应电动势，楞次定律指明感应电流的方向。',
      formulas: [
        { latex: String.raw`\varepsilon = -\frac{d\Phi}{dt}`, note: '法拉第电磁感应定律' },
        { latex: String.raw`\varepsilon = BLv\sin\theta`, note: '动生电动势' },
        {
          latex: String.raw`\varepsilon = -L\frac{dI}{dt},\quad W_m = \frac{1}{2}LI^2`,
          note: '自感电动势与磁场能量',
        },
        { latex: String.raw`\varepsilon = -M\frac{dI}{dt}`, note: '互感电动势' },
      ],
      keyPoints: [
        '感应电流的磁场总是阻碍引起感应电流的磁通量变化（楞次定律）。',
        '动生电动势的非静电力是洛伦兹力，感生电动势的非静电力是涡旋电场。',
        '涡旋电场的电场线闭合，是非保守场。',
        '自感系数 L 只由线圈自身几何结构与介质决定。',
      ],
      examples: [],
      level: 3,
    },
    {
      id: 'maxwell',
      title: '麦克斯韦方程组',
      summary: '位移电流假设使电场与磁场完全对称，预言了电磁波的存在。',
      formulas: [
        { latex: String.raw`\oint_S \vec{D}\cdot d\vec{S} = q_{\mathrm{free}}`, note: '高斯定理（电场）' },
        { latex: String.raw`\oint_S \vec{B}\cdot d\vec{S} = 0`, note: '高斯定理（磁场）' },
        {
          latex: String.raw`\oint_L \vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt}`,
          note: '法拉第电磁感应定律',
        },
        {
          latex: String.raw`\oint_L \vec{H}\cdot d\vec{l} = I + \frac{d\Phi_D}{dt}`,
          note: '全电流安培环路定理',
        },
        { latex: String.raw`c = \frac{1}{\sqrt{\varepsilon_0\mu_0}}`, note: '真空中电磁波速度' },
      ],
      keyPoints: [
        '位移电流 Id = dΦD/dt 的本质是变化的电场，可在真空中存在。',
        '变化电场产生磁场、变化磁场产生电场，二者相互激发形成电磁波。',
        '真空中电磁波速度 c = 1/√(ε₀μ₀) ≈ 3.0×10⁸ m/s。',
        '麦克斯韦方程组是经典电磁学的完整总结，也是狭义相对论的实验基础之一。',
      ],
      examples: [],
      level: 3,
    },
  ],
}
