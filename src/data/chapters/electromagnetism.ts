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
      examples: [
        {
          question:
            '真空中两个点电荷 $q_1 = +2.0\\times10^{-9}\\ \\mathrm{C}$、$q_2 = -4.0\\times10^{-9}\\ \\mathrm{C}$ 相距 $r = 0.30\\ \\mathrm{m}$，求它们之间作用力的大小和方向。',
          answer: '$F = 8.0\\times10^{-7}\\ \\mathrm{N}$，方向沿两电荷连线，互相吸引。',
          explanation:
            '由库仑定律 $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1q_2|}{r^{2}}$，取 $k = 9.0\\times10^{9}\\ \\mathrm{N\\cdot m^{2}/C^{2}}$，得 $F = 9.0\\times10^{9}\\times\\frac{2.0\\times10^{-9}\\times4.0\\times10^{-9}}{0.30^{2}} = 8.0\\times10^{-7}\\ \\mathrm{N}$。两电荷异号，故为引力。',
          difficulty: 1,
        },
        {
          question:
            '三个电荷量均为 $q$ 的正点电荷固定在边长为 $a$ 的等边三角形顶点上，求其中任一电荷所受的合力。',
          answer:
            '$F = \\sqrt{3}\\,\\frac{1}{4\\pi\\varepsilon_0}\\frac{q^{2}}{a^{2}}$，方向沿该顶点与对边中点的连线、背离三角形中心。',
          explanation:
            '另外两个电荷对它的作用力大小均为 $F_0 = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q^{2}}{a^{2}}$，两力夹角为 $60^{\\circ}$，合成后 $F = 2F_0\\cos30^{\\circ} = \\sqrt{3}F_0 = \\sqrt{3}\\,\\frac{q^{2}}{4\\pi\\varepsilon_0a^{2}}$，方向沿夹角平分线向外。',
          difficulty: 2,
        },
      ],
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
      examples: [
        {
          question:
            '电偶极子的电偶极矩 $p = 1.0\\times10^{-6}\\ \\mathrm{C\\cdot m}$，求其轴线延长线上距中心 $r = 0.10\\ \\mathrm{m}$ 处的场强（$r \\gg l$）。',
          answer: '$E \\approx 1.8\\times10^{7}\\ \\mathrm{N/C}$，方向沿轴线。',
          explanation:
            '轴线延长线上的场强 $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^{3}}$，代入 $k = 9.0\\times10^{9}$ 得 $E = 9.0\\times10^{9}\\times\\frac{2\\times1.0\\times10^{-6}}{0.10^{3}} = 1.8\\times10^{7}\\ \\mathrm{N/C}$。可见偶极子场按 $1/r^{3}$ 衰减，比点电荷更快。',
          difficulty: 2,
        },
        {
          question:
            '半径 $R = 0.10\\ \\mathrm{m}$ 的细圆环均匀带电 $q = 3.0\\times10^{-8}\\ \\mathrm{C}$，求轴线上距圆心 $x = 0.20\\ \\mathrm{m}$ 处的场强。',
          answer: '$E \\approx 4.8\\times10^{3}\\ \\mathrm{N/C}$，方向沿轴线、背离圆心（正电荷时）。',
          explanation:
            '取电荷元 $dq$，其场强垂直于轴线的分量因对称性相互抵消，只剩 $dE_x = dE\\cos\\theta$，积分得 $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{qx}{(R^{2}+x^{2})^{3/2}}$。代入数据：$E = 9.0\\times10^{9}\\times\\frac{3.0\\times10^{-8}\\times0.20}{(0.10^{2}+0.20^{2})^{3/2}} \\approx 4.8\\times10^{3}\\ \\mathrm{N/C}$。',
          difficulty: 3,
        },
        {
          question:
            '无限大均匀带正电平面，面电荷密度为 $\\sigma$，在平面上挖去半径为 $R$ 的圆孔。求过孔心垂直于平面的轴线上、距孔心 $x$ 处的场强。',
          answer: '$E = \\frac{\\sigma x}{2\\varepsilon_0\\sqrt{x^{2}+R^{2}}}$，方向沿轴线指向远离孔的一侧。',
          explanation:
            '用补偿法：完整平面的场强为 $\\frac{\\sigma}{2\\varepsilon_0}$，减去被挖去的带电圆盘在轴线上的场强 $\\frac{\\sigma}{2\\varepsilon_0}\\left(1-\\frac{x}{\\sqrt{x^{2}+R^{2}}}\\right)$，得 $E = \\frac{\\sigma x}{2\\varepsilon_0\\sqrt{x^{2}+R^{2}}}$。检验极限：$x \\gg R$ 时 $E \\to \\frac{\\sigma}{2\\varepsilon_0}$，$x \\to 0$ 时 $E \\to 0$，与对称性一致。',
          difficulty: 4,
        },
      ],
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
      examples: [
        {
          question: '半径 $R$、体电荷密度 $\\rho$ 的均匀带电球体，求球内、外的场强分布。',
          answer:
            '球内 $E = \\frac{\\rho r}{3\\varepsilon_0}$（$r<R$）；球外 $E = \\frac{\\rho R^{3}}{3\\varepsilon_0 r^{2}} = \\frac{q}{4\\pi\\varepsilon_0 r^{2}}$（$r>R$），方向沿半径。',
          explanation:
            '取半径为 $r$ 的同心球面为高斯面。球内 $q_{\\mathrm{in}} = \\frac{4}{3}\\pi r^{3}\\rho$，由 $4\\pi r^{2}E = \\frac{q_{\\mathrm{in}}}{\\varepsilon_0}$ 得 $E = \\frac{\\rho r}{3\\varepsilon_0}$；球外 $q_{\\mathrm{in}} = \\frac{4}{3}\\pi R^{3}\\rho$，同理得 $E = \\frac{\\rho R^{3}}{3\\varepsilon_0 r^{2}}$，与全部电荷集中在球心等效。',
          difficulty: 2,
        },
        {
          question: '半径 $R$ 的无限长均匀带电圆柱面，单位长度带电量为 $\\lambda$，求柱面内、外的场强。',
          answer:
            '柱面内 $E = 0$；柱面外 $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$（$r>R$），方向沿径向。',
          explanation:
            '取半径 $r$、高 $l$ 的同轴圆柱面为高斯面：上下底面与 $E$ 平行、通量为零，侧面通量为 $2\\pi rlE$。$r<R$ 时面内无电荷，$E = 0$；$r>R$ 时 $2\\pi rlE = \\frac{\\lambda l}{\\varepsilon_0}$，得 $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$。',
          difficulty: 2,
        },
        {
          question:
            '厚度为 $d$、体电荷密度为 $\\rho$ 的无限大均匀带电平板，求板内距中面 $x$ 处以及板外的场强。',
          answer:
            '板内 $E = \\frac{\\rho x}{\\varepsilon_0}$（$|x|<d/2$）；板外 $E = \\frac{\\rho d}{2\\varepsilon_0}$，方向垂直于板面。',
          explanation:
            '取底面积为 $S$、关于中面对称的高斯柱面，两底面处场强大小相等且垂直于底面，$2SE = \\frac{\\rho\\cdot2xS}{\\varepsilon_0}$，故 $E = \\frac{\\rho x}{\\varepsilon_0}$；当 $x \\ge d/2$ 时面内电荷为 $\\rho dS$，得 $E = \\frac{\\rho d}{2\\varepsilon_0}$，与无限大带电平面结果一致。',
          difficulty: 3,
        },
        {
          question:
            '点电荷 $q$ 放在立方体中心，求通过立方体一个面的电通量；若把 $q$ 移到立方体的一个顶点，求通过整个立方体表面的电通量。',
          answer: '在中心时每个面为 $\\frac{q}{6\\varepsilon_0}$；在顶点时整个立方体表面为 $\\frac{q}{8\\varepsilon_0}$。',
          explanation:
            '通量只由面内电荷决定。在中心时由对称性，六个面平分总通量 $\\frac{q}{\\varepsilon_0}$，每面 $\\frac{q}{6\\varepsilon_0}$；在顶点时立方体只占空间的 $\\frac{1}{8}$，故总通量为 $\\frac{q}{8\\varepsilon_0}$（与该顶点相邻的三个面通量为零，另三个面各承担 $\\frac{q}{24\\varepsilon_0}$）。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '点电荷 $q = 2.0\\times10^{-9}\\ \\mathrm{C}$ 在空间某点 $P$ 产生的电势为 $90\\ \\mathrm{V}$（取无穷远为零），求 $P$ 点到该电荷的距离。',
          answer: '$r = 0.20\\ \\mathrm{m}$。',
          explanation:
            '点电荷的电势 $V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}$，故 $r = \\frac{kq}{V} = \\frac{9.0\\times10^{9}\\times2.0\\times10^{-9}}{90} = 0.20\\ \\mathrm{m}$。',
          difficulty: 1,
        },
        {
          question:
            '电荷 $q = 2.0\\times10^{-6}\\ \\mathrm{C}$ 从电势 $V_a = 100\\ \\mathrm{V}$ 的点移到 $V_b = 20\\ \\mathrm{V}$ 的点，求电场力做的功。',
          answer: '$W = 1.6\\times10^{-4}\\ \\mathrm{J}$（正功）。',
          explanation:
            '电场力做功 $W_{ab} = q(V_a - V_b) = 2.0\\times10^{-6}\\times(100-20) = 1.6\\times10^{-4}\\ \\mathrm{J}$。正电荷由高电势移向低电势时电场力做正功，电势能减少 $1.6\\times10^{-4}\\ \\mathrm{J}$。',
          difficulty: 2,
        },
        {
          question:
            '半径 $R_1 = 0.05\\ \\mathrm{m}$、$R_2 = 0.10\\ \\mathrm{m}$ 的两个同心金属球壳，内球壳带电荷 $q = 1.0\\times10^{-8}\\ \\mathrm{C}$，外球壳接地。求内球壳的电势。',
          answer: '$V_1 = 9.0\\times10^{2}\\ \\mathrm{V}$。',
          explanation:
            '外球壳接地后外表面无电荷，内表面感应 $-q$，两球壳之间只有内球壳产生的场 $E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^{2}}$。沿径向积分：$V_1 = \\int_{R_1}^{R_2}E\\,dr = \\frac{q}{4\\pi\\varepsilon_0}\\left(\\frac{1}{R_1}-\\frac{1}{R_2}\\right) = 9.0\\times10^{9}\\times1.0\\times10^{-8}\\times(20-10) = 9.0\\times10^{2}\\ \\mathrm{V}$。',
          difficulty: 3,
        },
        {
          question:
            '半径 $R$、体电荷密度 $\\rho$ 的均匀带电球体，取无穷远为电势零点，求球心的电势。',
          answer: '$V_0 = \\frac{\\rho R^{2}}{2\\varepsilon_0}$。',
          explanation:
            '球内 $E = \\frac{\\rho r}{3\\varepsilon_0}$，球外 $E = \\frac{\\rho R^{3}}{3\\varepsilon_0r^{2}}$，分段积分：$V_0 = \\int_{0}^{R}\\frac{\\rho r}{3\\varepsilon_0}dr + \\int_{R}^{\\infty}\\frac{\\rho R^{3}}{3\\varepsilon_0r^{2}}dr = \\frac{\\rho R^{2}}{6\\varepsilon_0} + \\frac{\\rho R^{2}}{3\\varepsilon_0} = \\frac{\\rho R^{2}}{2\\varepsilon_0}$。注意球心处场强为零，但电势最大。',
          difficulty: 4,
        },
      ],
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
      examples: [
        {
          question:
            '已知空间电势分布 $V = 3x^{2}y - 2yz^{2}$（SI 单位），求点 $P(1,2,-1)$ 处的场强。',
          answer:
            '$\\vec{E} = (-12\\vec{i}-\\vec{j}-8\\vec{k})\\ \\mathrm{V/m}$，大小约 $14.5\\ \\mathrm{V/m}$。',
          explanation:
            '$E_x = -\\frac{\\partial V}{\\partial x} = -6xy = -12$，$E_y = -\\frac{\\partial V}{\\partial y} = -(3x^{2}-2z^{2}) = -1$，$E_z = -\\frac{\\partial V}{\\partial z} = -(-4yz) = -8$，故 $\\vec{E} = -12\\vec{i}-\\vec{j}-8\\vec{k}\\ \\mathrm{V/m}$，$|\\vec{E}| = \\sqrt{12^{2}+1^{2}+8^{2}} \\approx 14.5\\ \\mathrm{V/m}$。',
          difficulty: 3,
        },
        {
          question:
            '两块无限大平行带电金属板相距 $d = 2.0\\ \\mathrm{cm}$，板间电势差 $U = 100\\ \\mathrm{V}$，求板间的场强。',
          answer: '$E = 5.0\\times10^{3}\\ \\mathrm{V/m}$，方向由高电势板指向低电势板。',
          explanation:
            '板间是匀强电场，$E = \\frac{U}{d} = \\frac{100}{2.0\\times10^{-2}} = 5.0\\times10^{3}\\ \\mathrm{V/m}$；由 $\\vec{E} = -\\nabla V$ 可知场强指向电势降低的方向。',
          difficulty: 2,
        },
      ],
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
      examples: [
        {
          question:
            '半径 $R = 0.10\\ \\mathrm{m}$ 的孤立金属球带电荷 $Q = 3.0\\times10^{-8}\\ \\mathrm{C}$，求球表面处的场强和球的电势（取无穷远为零电势）。',
          answer: '$E = 2.7\\times10^{4}\\ \\mathrm{V/m}$，$V = 2.7\\times10^{3}\\ \\mathrm{V}$。',
          explanation:
            '静电平衡时电荷均匀分布在球面上，球外场强与电荷集中在球心等效：$E = \\frac{Q}{4\\pi\\varepsilon_0R^{2}} = \\frac{9.0\\times10^{9}\\times3.0\\times10^{-8}}{0.10^{2}} = 2.7\\times10^{4}\\ \\mathrm{V/m}$；电势 $V = \\frac{Q}{4\\pi\\varepsilon_0R} = 2.7\\times10^{3}\\ \\mathrm{V}$，球内各点电势与之相同，场强为零。',
          difficulty: 1,
        },
        {
          question:
            '两同心金属球壳，内球壳半径 $R_1 = 0.05\\ \\mathrm{m}$、带电荷 $q = +1.0\\times10^{-8}\\ \\mathrm{C}$；外球壳内、外半径分别为 $R_2 = 0.10\\ \\mathrm{m}$、$R_3 = 0.15\\ \\mathrm{m}$，不带电且与外界绝缘。求外球壳内、外表面的电荷及各区域的场强。',
          answer:
            '内表面 $-1.0\\times10^{-8}\\ \\mathrm{C}$，外表面 $+1.0\\times10^{-8}\\ \\mathrm{C}$；$r<R_1$ 时 $E = 0$；$R_1<r<R_2$ 与 $r>R_3$ 时 $E = \\frac{q}{4\\pi\\varepsilon_0r^{2}}$；$R_2<r<R_3$ 时 $E = 0$。',
          explanation:
            '静电平衡时导体内部场强为零，外球壳内表面须感应 $-q$ 以抵消腔内电荷的场；外球壳原本不带电，由电荷守恒外表面为 $+q$。对半径 $r$ 的同心球面用高斯定理，即可得到上述各区域的场强。',
          difficulty: 3,
        },
        {
          question:
            '半径分别为 $R_1 = 0.02\\ \\mathrm{m}$、$R_2 = 0.05\\ \\mathrm{m}$ 的两个金属球用细导线相连并带电，求两球表面电荷面密度之比和表面场强之比。',
          answer: '$\\sigma_1:\\sigma_2 = 2.5:1$，$E_1:E_2 = 2.5:1$（小球表面电荷更密、场强更强）。',
          explanation:
            '两球相连后等电势，$\\frac{q_1}{4\\pi\\varepsilon_0R_1} = \\frac{q_2}{4\\pi\\varepsilon_0R_2}$ 即 $\\frac{q_1}{R_1} = \\frac{q_2}{R_2}$；又 $\\sigma = \\frac{q}{4\\pi R^{2}}$，得 $\\sigma_1R_1 = \\sigma_2R_2$，故 $\\frac{\\sigma_1}{\\sigma_2} = \\frac{R_2}{R_1} = 2.5$。表面场强 $E = \\frac{\\sigma}{\\varepsilon_0}$，比值相同。',
          difficulty: 2,
        },
      ],
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
      examples: [
        {
          question:
            '平行板电容器极板间充满相对介电常数 $\\varepsilon_r = 4.0$ 的均匀介质，极板上自由电荷面密度 $\\sigma_0 = 1.0\\times10^{-6}\\ \\mathrm{C/m^{2}}$。求介质中的电位移 $D$、场强 $E$ 和极化强度 $P$。',
          answer:
            '$D = 1.0\\times10^{-6}\\ \\mathrm{C/m^{2}}$，$E \\approx 2.8\\times10^{4}\\ \\mathrm{V/m}$，$P \\approx 7.5\\times10^{-7}\\ \\mathrm{C/m^{2}}$。',
          explanation:
            '由 $D$ 的高斯定理得 $D = \\sigma_0 = 1.0\\times10^{-6}\\ \\mathrm{C/m^{2}}$；$E = \\frac{D}{\\varepsilon_0\\varepsilon_r} = \\frac{1.0\\times10^{-6}}{8.85\\times10^{-12}\\times4.0} \\approx 2.8\\times10^{4}\\ \\mathrm{V/m}$；$P = D-\\varepsilon_0E = \\varepsilon_0(\\varepsilon_r-1)E \\approx 7.5\\times10^{-7}\\ \\mathrm{C/m^{2}}$。',
          difficulty: 3,
        },
        {
          question:
            '两个点电荷在真空中相距 $r$ 时相互作用力为 $F_0$。若把它们浸入相对介电常数 $\\varepsilon_r = 2.5$ 的均匀介质中且距离不变，求它们之间的作用力，并指出介质表面极化电荷的符号。',
          answer:
            '$F = \\frac{F_0}{2.5} = 0.40F_0$；靠近正电荷的介质表面带负极化电荷，靠近负电荷的表面带正极化电荷。',
          explanation:
            '介质中的库仑力 $F = \\frac{1}{4\\pi\\varepsilon_0\\varepsilon_r}\\frac{|q_1q_2|}{r^{2}} = \\frac{F_0}{\\varepsilon_r}$。极化电荷产生的附加场总是削弱介质中的总场，因此极化电荷与产生场的自由电荷异号。',
          difficulty: 2,
        },
      ],
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
      examples: [
        {
          question:
            '半径 $R$ 的金属球带自由电荷 $Q$，球外紧套一层外半径为 $R_2$、相对介电常数为 $\\varepsilon_r$ 的均匀介质层，介质层外为真空。求介质层内、外的 $D$ 和 $E$。',
          answer:
            '$R<r<R_2$：$D = \\frac{Q}{4\\pi r^{2}}$，$E = \\frac{Q}{4\\pi\\varepsilon_0\\varepsilon_r r^{2}}$；$r>R_2$：$D = \\frac{Q}{4\\pi r^{2}}$，$E = \\frac{Q}{4\\pi\\varepsilon_0r^{2}}$。',
          explanation:
            '取半径 $r$ 的同心球面为高斯面，包围的自由电荷始终只有 $Q$，故各区域 $D = \\frac{Q}{4\\pi r^{2}}$（$D$ 的法向分量在介质分界面上连续）；再由 $E = \\frac{D}{\\varepsilon_0\\varepsilon_r}$ 分别求介质内、外的场强。',
          difficulty: 2,
        },
        {
          question:
            '平行板电容器板间充满两层介质：厚度 $d_1 = 2.0\\ \\mathrm{mm}$、$\\varepsilon_{r1} = 2.0$，厚度 $d_2 = 3.0\\ \\mathrm{mm}$、$\\varepsilon_{r2} = 4.0$。极板自由电荷面密度 $\\sigma_0 = 2.0\\times10^{-6}\\ \\mathrm{C/m^{2}}$，求两层介质中的场强和板间电压。',
          answer:
            '$E_1 \\approx 1.1\\times10^{5}\\ \\mathrm{V/m}$，$E_2 \\approx 5.6\\times10^{4}\\ \\mathrm{V/m}$，$U \\approx 4.0\\times10^{2}\\ \\mathrm{V}$。',
          explanation:
            '两层介质中 $D$ 相同（界面无自由电荷），$D = \\sigma_0 = 2.0\\times10^{-6}\\ \\mathrm{C/m^{2}}$，故 $E_1 = \\frac{D}{\\varepsilon_0\\varepsilon_{r1}} \\approx 1.1\\times10^{5}\\ \\mathrm{V/m}$、$E_2 = \\frac{D}{\\varepsilon_0\\varepsilon_{r2}} \\approx 5.6\\times10^{4}\\ \\mathrm{V/m}$；$U = E_1d_1 + E_2d_2 \\approx 226 + 170 \\approx 4.0\\times10^{2}\\ \\mathrm{V}$。',
          difficulty: 3,
        },
        {
          question:
            '两层均匀介质的分界面上没有自由电荷，$\\varepsilon_{r1} = 2.0$、$\\varepsilon_{r2} = 4.0$。若介质 1 中的场强与界面法线成 $30^{\\circ}$，求介质 2 中场强与法线的夹角。',
          answer: '$\\theta_2 \\approx 49^{\\circ}$。',
          explanation:
            '界面条件为 $D_{1n} = D_{2n}$、$E_{1t} = E_{2t}$，即 $\\varepsilon_{r1}E_1\\cos\\theta_1 = \\varepsilon_{r2}E_2\\cos\\theta_2$、$E_1\\sin\\theta_1 = E_2\\sin\\theta_2$。两式相除得 $\\tan\\theta_2 = \\frac{\\varepsilon_{r2}}{\\varepsilon_{r1}}\\tan\\theta_1 = 2\\tan30^{\\circ} \\approx 1.15$，故 $\\theta_2 \\approx 49^{\\circ}$。',
          difficulty: 4,
        },
      ],
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
      examples: [
        {
          question:
            '平行板电容器极板面积 $S = 2.0\\times10^{-2}\\ \\mathrm{m^{2}}$，板间距 $d = 1.0\\ \\mathrm{mm}$，板间为空气。求电容；若充满 $\\varepsilon_r = 4.0$ 的介质，电容变为多少？',
          answer:
            '$C_0 \\approx 1.8\\times10^{-10}\\ \\mathrm{F}$（约 $177\\ \\mathrm{pF}$），充介质后 $C \\approx 7.1\\times10^{-10}\\ \\mathrm{F}$。',
          explanation:
            '$C_0 = \\frac{\\varepsilon_0S}{d} = \\frac{8.85\\times10^{-12}\\times2.0\\times10^{-2}}{1.0\\times10^{-3}} \\approx 1.8\\times10^{-10}\\ \\mathrm{F}$；充满介质后 $C = \\varepsilon_rC_0 \\approx 7.1\\times10^{-10}\\ \\mathrm{F}$，即增大到原来的 4 倍。',
          difficulty: 1,
        },
        {
          question:
            '同轴圆柱形电容器内、外半径分别为 $R_1 = 5.0\\ \\mathrm{mm}$、$R_2 = 15\\ \\mathrm{mm}$，长度 $l = 0.20\\ \\mathrm{m}$，中间为空气。求电容。',
          answer: '$C \\approx 1.0\\times10^{-11}\\ \\mathrm{F}$（约 $10\\ \\mathrm{pF}$）。',
          explanation:
            '设内导体单位长度带电量 $\\lambda$，则 $R_1<r<R_2$ 时 $E = \\frac{\\lambda}{2\\pi\\varepsilon_0r}$，电压 $U = \\int_{R_1}^{R_2}E\\,dr = \\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln\\frac{R_2}{R_1}$，故 $C = \\frac{\\lambda l}{U} = \\frac{2\\pi\\varepsilon_0l}{\\ln(R_2/R_1)} = \\frac{2\\pi\\times8.85\\times10^{-12}\\times0.20}{\\ln3} \\approx 1.0\\times10^{-11}\\ \\mathrm{F}$。',
          difficulty: 2,
        },
        {
          question:
            '$C_1 = 4.0\\ \\mu\\mathrm{F}$ 与 $C_2 = 4.0\\ \\mu\\mathrm{F}$、$C_3 = 8.0\\ \\mu\\mathrm{F}$ 的并联组合串联，接到 $U = 12\\ \\mathrm{V}$ 的电源上。求总电容以及每个电容器的电压和电荷。',
          answer:
            '$C = 3.0\\ \\mu\\mathrm{F}$，总电荷 $Q = 36\\ \\mu\\mathrm{C}$；$U_1 = 9.0\\ \\mathrm{V}$、$Q_1 = 36\\ \\mu\\mathrm{C}$；$U_2 = U_3 = 3.0\\ \\mathrm{V}$、$Q_2 = 12\\ \\mu\\mathrm{C}$、$Q_3 = 24\\ \\mu\\mathrm{C}$。',
          explanation:
            '$C_2$、$C_3$ 并联得 $12\\ \\mu\\mathrm{F}$，再与 $C_1$ 串联：$C = \\frac{4\\times12}{4+12} = 3.0\\ \\mu\\mathrm{F}$，总电荷 $Q = CU = 36\\ \\mu\\mathrm{C}$。串联部分电荷相同，$U_1 = \\frac{Q}{C_1} = 9.0\\ \\mathrm{V}$，并联部分电压 $12-9.0 = 3.0\\ \\mathrm{V}$，于是 $Q_2 = C_2U^{\\prime} = 12\\ \\mu\\mathrm{C}$、$Q_3 = C_3U^{\\prime} = 24\\ \\mu\\mathrm{C}$。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '电容 $C = 100\\ \\mu\\mathrm{F}$ 的电容器充电到 $U = 200\\ \\mathrm{V}$，求储存的电场能量；若电压降为 $100\\ \\mathrm{V}$，能量减少了多少？',
          answer: '$W = 2.0\\ \\mathrm{J}$；降到 $100\\ \\mathrm{V}$ 时能量为 $0.50\\ \\mathrm{J}$，减少 $1.5\\ \\mathrm{J}$。',
          explanation:
            '$W = \\frac{1}{2}CU^{2} = \\frac{1}{2}\\times1.0\\times10^{-4}\\times200^{2} = 2.0\\ \\mathrm{J}$；$U^{\\prime} = 100\\ \\mathrm{V}$ 时 $W^{\\prime} = \\frac{1}{2}\\times1.0\\times10^{-4}\\times100^{2} = 0.50\\ \\mathrm{J}$，减少的能量消耗在外电路与导线电阻上。',
          difficulty: 2,
        },
        {
          question:
            '空气平行板电容器内的场强 $E = 1.0\\times10^{6}\\ \\mathrm{V/m}$，求电场的能量密度；若极板面积 $S = 0.020\\ \\mathrm{m^{2}}$、间距 $d = 1.0\\ \\mathrm{mm}$，求总能量。',
          answer: '$w_e \\approx 4.4\\ \\mathrm{J/m^{3}}$，$W_e \\approx 8.8\\times10^{-8}\\ \\mathrm{J}$。',
          explanation:
            '$w_e = \\frac{1}{2}\\varepsilon_0E^{2} = \\frac{1}{2}\\times8.85\\times10^{-12}\\times(1.0\\times10^{6})^{2} \\approx 4.4\\ \\mathrm{J/m^{3}}$；场区体积 $V = Sd = 2.0\\times10^{-5}\\ \\mathrm{m^{3}}$，故 $W_e = w_eV \\approx 8.8\\times10^{-8}\\ \\mathrm{J}$。',
          difficulty: 2,
        },
      ],
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
      examples: [
        {
          question:
            '直径 $d = 1.0\\ \\mathrm{mm}$ 的铜导线中通过电流 $I = 2.0\\ \\mathrm{A}$，铜的自由电子数密度 $n = 8.5\\times10^{28}\\ \\mathrm{m^{-3}}$，电子电荷量 $e = 1.6\\times10^{-19}\\ \\mathrm{C}$。求电子的漂移速度。',
          answer: '$v_d \\approx 1.9\\times10^{-4}\\ \\mathrm{m/s}$。',
          explanation:
            '截面积 $S = \\frac{\\pi d^{2}}{4} \\approx 7.85\\times10^{-7}\\ \\mathrm{m^{2}}$，电流密度 $j = \\frac{I}{S} \\approx 2.55\\times10^{6}\\ \\mathrm{A/m^{2}}$，由 $j = nev_d$ 得 $v_d = \\frac{j}{ne} \\approx 1.9\\times10^{-4}\\ \\mathrm{m/s}$，远小于电子热运动速率。',
          difficulty: 3,
        },
        {
          question:
            '长 $l = 1.0\\ \\mathrm{m}$、直径 $d = 1.0\\ \\mathrm{mm}$ 的铜导线，电阻率 $\\rho = 1.7\\times10^{-8}\\ \\Omega\\cdot\\mathrm{m}$，求其电阻。',
          answer: '$R \\approx 2.2\\times10^{-2}\\ \\Omega$。',
          explanation:
            '$R = \\rho\\frac{l}{S} = 1.7\\times10^{-8}\\times\\frac{1.0}{7.85\\times10^{-7}} \\approx 2.2\\times10^{-2}\\ \\Omega$。由欧姆定律的微分形式 $\\vec{j} = \\sigma\\vec{E}$ 还可以求出导线内的场强 $E = \\frac{j}{\\sigma} \\approx 4.3\\times10^{-2}\\ \\mathrm{V/m}$。',
          difficulty: 1,
        },
      ],
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
      examples: [
        {
          question: '无限长直导线载流 $I = 10\\ \\mathrm{A}$，求距导线 $r = 0.10\\ \\mathrm{m}$ 处的磁感应强度。',
          answer: '$B = 2.0\\times10^{-5}\\ \\mathrm{T}$（即 $20\\ \\mu\\mathrm{T}$）。',
          explanation:
            '$B = \\frac{\\mu_0I}{2\\pi r} = \\frac{4\\pi\\times10^{-7}\\times10}{2\\pi\\times0.10} = 2.0\\times10^{-5}\\ \\mathrm{T}$，方向由右手螺旋定则确定：拇指沿电流方向，四指环绕方向即磁感线方向。',
          difficulty: 1,
        },
        {
          question: '半径 $R = 0.10\\ \\mathrm{m}$ 的圆环载流 $I = 5.0\\ \\mathrm{A}$，求圆心处的磁感应强度。',
          answer: '$B = 3.1\\times10^{-5}\\ \\mathrm{T}$。',
          explanation:
            '圆环上各电流元到圆心等距、且 $d\\vec{l}\\perp\\hat{r}$，各 $d\\vec{B}$ 同向叠加：$B = \\frac{\\mu_0I}{2R} = \\frac{4\\pi\\times10^{-7}\\times5.0}{2\\times0.10} \\approx 3.1\\times10^{-5}\\ \\mathrm{T}$，方向垂直于环面，由右手螺旋定则判断。',
          difficulty: 2,
        },
        {
          question:
            '两根平行的无限长直导线相距 $d = 0.20\\ \\mathrm{m}$，载有同向电流 $I_1 = 10\\ \\mathrm{A}$ 与 $I_2 = 20\\ \\mathrm{A}$。求两导线之间磁感应强度为零的点到 $I_1$ 的距离。',
          answer: '距 $I_1$ 约 $0.067\\ \\mathrm{m}$。',
          explanation:
            '两电流同向，它们在两导线之间的磁场方向相反。设该点到 $I_1$ 的距离为 $x$，则到 $I_2$ 的距离为 $d-x$，令 $\\frac{\\mu_0I_1}{2\\pi x} = \\frac{\\mu_0I_2}{2\\pi(d-x)}$，得 $x = \\frac{I_1}{I_1+I_2}d = \\frac{10}{30}\\times0.20 \\approx 0.067\\ \\mathrm{m}$，即零点在两导线之间、靠近电流较小的一侧。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '半径 $R$ 的无限长圆柱形导体载有电流 $I$，电流在横截面上均匀分布。求导体内、外的磁感应强度。',
          answer:
            '导体内 $B = \\frac{\\mu_0Ir}{2\\pi R^{2}}$（$r<R$）；导体外 $B = \\frac{\\mu_0I}{2\\pi r}$（$r>R$），方向沿同心圆的切线。',
          explanation:
            '取半径 $r$ 的同心圆为安培环路。$r<R$ 时环路包围的电流为 $I\\frac{r^{2}}{R^{2}}$，由 $2\\pi rB = \\mu_0I\\frac{r^{2}}{R^{2}}$ 得 $B = \\frac{\\mu_0Ir}{2\\pi R^{2}}$，在轴线处为零、表面处最大；$r>R$ 时包围全部电流，$B = \\frac{\\mu_0I}{2\\pi r}$。',
          difficulty: 2,
        },
        {
          question:
            '螺绕环共 $N = 1000$ 匝，环内平均半径 $r = 0.10\\ \\mathrm{m}$，通以电流 $I = 2.0\\ \\mathrm{A}$。求环内的磁感应强度。',
          answer: '$B = 4.0\\times10^{-3}\\ \\mathrm{T}$。',
          explanation:
            '取环内半径为 $r$ 的圆周为安培环路，环外磁场为零、环内磁场沿切向，故 $2\\pi rB = \\mu_0NI$，得 $B = \\frac{\\mu_0NI}{2\\pi r} = \\frac{4\\pi\\times10^{-7}\\times1000\\times2.0}{2\\pi\\times0.10} = 4.0\\times10^{-3}\\ \\mathrm{T}$。',
          difficulty: 2,
        },
        {
          question:
            '同轴电缆内导体半径为 $R_1$，外导体内、外半径分别为 $R_2$、$R_3$。内导体载电流 $I$，外导体载大小相等、方向相反且均匀分布的电流。求 $r<R_1$、$R_1<r<R_2$、$R_2<r<R_3$ 与 $r>R_3$ 各区域的磁感应强度（内导体电流均匀分布）。',
          answer:
            '$B = \\frac{\\mu_0Ir}{2\\pi R_1^{2}}$（$r<R_1$）；$B = \\frac{\\mu_0I}{2\\pi r}$（$R_1<r<R_2$）；$B = \\frac{\\mu_0I}{2\\pi r}\\left[1-\\frac{r^{2}-R_2^{2}}{R_3^{2}-R_2^{2}}\\right]$（$R_2<r<R_3$）；$B = 0$（$r>R_3$）。',
          explanation:
            '对每个区域取半径 $r$ 的同轴圆为安培环路，$\\oint\\vec{B}\\cdot d\\vec{l} = 2\\pi rB = \\mu_0I_{\\mathrm{in}}$。外导体中的反向电流按面积比例计入；$r>R_3$ 时环路内电流的代数和为零，故 $B = 0$，这正是同轴电缆能屏蔽外磁场的原因。',
          difficulty: 4,
        },
      ],
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
      examples: [
        {
          question:
            '电子以 $v = 1.0\\times10^{7}\\ \\mathrm{m/s}$ 垂直进入 $B = 0.010\\ \\mathrm{T}$ 的匀强磁场，电子质量 $m = 9.1\\times10^{-31}\\ \\mathrm{kg}$、电荷量 $e = 1.6\\times10^{-19}\\ \\mathrm{C}$。求电子做圆周运动的半径和周期。',
          answer: '$r \\approx 5.7\\times10^{-3}\\ \\mathrm{m}$，$T \\approx 3.6\\times10^{-9}\\ \\mathrm{s}$。',
          explanation:
            '洛伦兹力提供向心力，$\\frac{mv^{2}}{r} = evB$，故 $r = \\frac{mv}{eB} = \\frac{9.1\\times10^{-31}\\times1.0\\times10^{7}}{1.6\\times10^{-19}\\times0.010} \\approx 5.7\\times10^{-3}\\ \\mathrm{m}$；$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{eB} \\approx 3.6\\times10^{-9}\\ \\mathrm{s}$，与速率无关。',
          difficulty: 2,
        },
        {
          question: '上题中的电子若以与磁场成 $30^{\\circ}$ 的方向射入，求其螺旋运动的螺距（设速率不变）。',
          answer: '$h \\approx 3.1\\times10^{-2}\\ \\mathrm{m}$。',
          explanation:
            '分解速度：$v_{\\parallel} = v\\cos30^{\\circ} = 8.7\\times10^{6}\\ \\mathrm{m/s}$，该分量不受磁场力，做匀速直线运动；垂直分量做圆周运动，周期仍为 $T \\approx 3.6\\times10^{-9}\\ \\mathrm{s}$。故 $h = v_{\\parallel}T = 8.7\\times10^{6}\\times3.6\\times10^{-9} \\approx 3.1\\times10^{-2}\\ \\mathrm{m}$。',
          difficulty: 3,
        },
        {
          question:
            '厚 $d = 1.0\\ \\mathrm{mm}$ 的金属箔载有电流 $I = 10\\ \\mathrm{A}$，垂直置于 $B = 0.50\\ \\mathrm{T}$ 的磁场中，测得霍尔电压 $U_H = 2.0\\times10^{-6}\\ \\mathrm{V}$。求载流子数密度。',
          answer: '$n \\approx 1.6\\times10^{28}\\ \\mathrm{m^{-3}}$。',
          explanation:
            '稳态时横向电场力与洛伦兹力平衡 $qE_H = qvB$，结合 $I = nqvd$（$d$ 为沿磁场方向的厚度）可得 $U_H = \\frac{IB}{nqd}$，故 $n = \\frac{IB}{qU_Hd} = \\frac{10\\times0.50}{1.6\\times10^{-19}\\times2.0\\times10^{-6}\\times1.0\\times10^{-3}} \\approx 1.6\\times10^{28}\\ \\mathrm{m^{-3}}$。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '长 $L = 0.20\\ \\mathrm{m}$ 的直导线载流 $I = 5.0\\ \\mathrm{A}$，置于 $B = 0.50\\ \\mathrm{T}$ 的匀强磁场中，导线与磁场方向成 $30^{\\circ}$。求导线所受的安培力。',
          answer: '$F = 0.25\\ \\mathrm{N}$。',
          explanation:
            '$F = BIL\\sin\\theta = 0.50\\times5.0\\times0.20\\times\\sin30^{\\circ} = 0.25\\ \\mathrm{N}$，方向由左手定则判断：四指指向电流、磁感线穿入掌心，拇指指向受力方向。导线与磁场平行时不受力。',
          difficulty: 2,
        },
        {
          question:
            '边长 $a = 0.10\\ \\mathrm{m}$ 的正方形线圈共 $N = 100$ 匝，载流 $I = 2.0\\ \\mathrm{A}$，置于 $B = 0.50\\ \\mathrm{T}$ 的匀强磁场中。求线圈所受的最大磁力矩。',
          answer: '$M_{\\max} = 1.0\\ \\mathrm{N\\cdot m}$。',
          explanation:
            '磁矩 $m = NIS = 100\\times2.0\\times(0.10)^{2} = 2.0\\ \\mathrm{A\\cdot m^{2}}$，磁力矩 $M = mB\\sin\\theta$，当线圈平面与磁场平行（磁矩与磁场垂直）时最大：$M_{\\max} = mB = 2.0\\times0.50 = 1.0\\ \\mathrm{N\\cdot m}$。',
          difficulty: 3,
        },
        {
          question:
            '两根平行的长直导线相距 $d = 0.10\\ \\mathrm{m}$，载有同向电流 $I_1 = I_2 = 10\\ \\mathrm{A}$。求单位长度导线受到的磁力，并说明是吸引还是排斥。',
          answer: '$\\frac{F}{l} = 2.0\\times10^{-4}\\ \\mathrm{N/m}$，相互吸引。',
          explanation:
            '每根导线处于另一根导线产生的磁场 $B = \\frac{\\mu_0I}{2\\pi d}$ 中，故 $\\frac{F}{l} = \\frac{\\mu_0I_1I_2}{2\\pi d} = \\frac{4\\pi\\times10^{-7}\\times100}{2\\pi\\times0.10} = 2.0\\times10^{-4}\\ \\mathrm{N/m}$。同向电流相互吸引，反向电流相互排斥。',
          difficulty: 2,
        },
        {
          question:
            '面积 $S = 0.020\\ \\mathrm{m^{2}}$ 的平面线圈载流 $I = 3.0\\ \\mathrm{A}$，在 $B = 0.50\\ \\mathrm{T}$ 的匀强磁场中从线圈平面平行于磁场转到垂直于磁场。求磁力做的功。',
          answer: '$W = 3.0\\times10^{-2}\\ \\mathrm{J}$。',
          explanation:
            '初态磁通量为零，末态 $\\Phi = BS = 0.50\\times0.020 = 1.0\\times10^{-2}\\ \\mathrm{Wb}$，故 $W = I\\Delta\\Phi = 3.0\\times1.0\\times10^{-2} = 3.0\\times10^{-2}\\ \\mathrm{J}$。电流恒定时才能直接用 $W = I\\Delta\\Phi$ 计算。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '相对磁导率 $\\mu_r = 5000$ 的均匀磁介质充满螺绕环，环上每米绕 $n = 1000$ 匝，通以电流 $I = 2.0\\ \\mathrm{A}$。求介质中的磁场强度 $H$ 与磁感应强度 $B$。',
          answer: '$H = 2.0\\times10^{3}\\ \\mathrm{A/m}$，$B \\approx 12.6\\ \\mathrm{T}$。',
          explanation:
            '由介质中的安培环路定理 $\\oint\\vec{H}\\cdot d\\vec{l} = \\sum I_0$ 得 $H = nI = 1000\\times2.0 = 2.0\\times10^{3}\\ \\mathrm{A/m}$，与介质无关；再由 $B = \\mu_0\\mu_rH = 4\\pi\\times10^{-7}\\times5000\\times2.0\\times10^{3} \\approx 12.6\\ \\mathrm{T}$。',
          difficulty: 2,
        },
        {
          question:
            '在上一题条件下，求介质的磁化率 $\\chi_m$ 与磁化强度 $M$，并说明 $M$ 的物理意义。',
          answer: '$\\chi_m = 4999 \\approx 5.0\\times10^{3}$，$M \\approx 1.0\\times10^{7}\\ \\mathrm{A/m}$。',
          explanation:
            '$\\chi_m = \\mu_r - 1 \\approx 5.0\\times10^{3}$；由 $\\vec{H} = \\frac{\\vec{B}}{\\mu_0}-\\vec{M}$ 得 $M = (\\mu_r-1)H = \\chi_mH \\approx 4999\\times2.0\\times10^{3} \\approx 1.0\\times10^{7}\\ \\mathrm{A/m}$。磁化强度在数值上等于介质表面单位长度的磁化电流，它产生的附加磁场使 $B$ 远大于 $\\mu_0H$。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '某铁磁质在 $H = 200\\ \\mathrm{A/m}$ 时 $B = 1.2\\ \\mathrm{T}$，求其相对磁导率；若每个磁化周期单位体积的磁滞损耗为 $300\\ \\mathrm{J/m^{3}}$，工作频率为 $50\\ \\mathrm{Hz}$，求单位体积的磁滞损耗功率。',
          answer: '$\\mu_r \\approx 4.8\\times10^{3}$，$P \\approx 1.5\\times10^{4}\\ \\mathrm{W/m^{3}}$。',
          explanation:
            '$\\mu_r = \\frac{B}{\\mu_0H} = \\frac{1.2}{4\\pi\\times10^{-7}\\times200} \\approx 4.8\\times10^{3} \\gg 1$，这正是铁磁质的特征；磁滞损耗功率等于单位体积每周期损耗乘以频率，$P = wf = 300\\times50 = 1.5\\times10^{4}\\ \\mathrm{W/m^{3}}$。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '面积 $S = 0.020\\ \\mathrm{m^{2}}$ 的 100 匝线圈置于匀强磁场中，磁场方向与线圈平面垂直。若磁感应强度在 $0.10\\ \\mathrm{s}$ 内由 $0.20\\ \\mathrm{T}$ 均匀增加到 $0.60\\ \\mathrm{T}$，求线圈中的感应电动势。',
          answer: '$\\varepsilon = 8.0\\ \\mathrm{V}$。',
          explanation:
            '磁通量变化 $\\Delta\\Phi = S\\Delta B = 0.020\\times0.40 = 8.0\\times10^{-3}\\ \\mathrm{Wb}$，由法拉第电磁感应定律 $\\varepsilon = N\\frac{\\Delta\\Phi}{\\Delta t} = 100\\times\\frac{8.0\\times10^{-3}}{0.10} = 8.0\\ \\mathrm{V}$；由楞次定律，感应电流的磁场阻碍原磁通量的增加。',
          difficulty: 1,
        },
        {
          question:
            '长 $L = 0.50\\ \\mathrm{m}$ 的导体棒在 $B = 0.50\\ \\mathrm{T}$ 的匀强磁场中以 $v = 2.0\\ \\mathrm{m/s}$ 运动，棒、速度与磁场三者互相垂直。求棒两端的动生电动势。',
          answer: '$\\varepsilon = 0.50\\ \\mathrm{V}$。',
          explanation:
            '$\\varepsilon = BLv = 0.50\\times0.50\\times2.0 = 0.50\\ \\mathrm{V}$。动生电动势的非静电力是洛伦兹力，方向可用右手定则判断：让磁感线穿入掌心、拇指指向速度方向，四指指向正电荷受力（即高电势）端。',
          difficulty: 2,
        },
        {
          question:
            '自感 $L = 0.20\\ \\mathrm{H}$ 的线圈中电流在 $0.10\\ \\mathrm{s}$ 内由 $2.0\\ \\mathrm{A}$ 均匀减小到 $0.50\\ \\mathrm{A}$。求自感电动势的大小，以及电流为 $2.0\\ \\mathrm{A}$ 时线圈储存的磁场能量。',
          answer: '$|\\varepsilon| = 3.0\\ \\mathrm{V}$，$W_m = 0.40\\ \\mathrm{J}$。',
          explanation:
            '$|\\varepsilon| = L\\frac{|\\Delta I|}{\\Delta t} = 0.20\\times\\frac{1.5}{0.10} = 3.0\\ \\mathrm{V}$，方向与原电流方向相同（阻碍电流减小）；$W_m = \\frac{1}{2}LI^{2} = \\frac{1}{2}\\times0.20\\times2.0^{2} = 0.40\\ \\mathrm{J}$。',
          difficulty: 3,
        },
        {
          question:
            '两根平行导轨相距 $l = 0.40\\ \\mathrm{m}$，处于垂直于导轨平面的 $B = 0.50\\ \\mathrm{T}$ 匀强磁场中。导体棒以 $v = 1.5\\ \\mathrm{m/s}$ 沿导轨匀速滑动，回路总电阻 $R = 0.20\\ \\Omega$。求感应电流、安培力以及维持匀速运动所需外力的功率。',
          answer: '$I = 1.5\\ \\mathrm{A}$，$F = 0.30\\ \\mathrm{N}$，$P = 0.45\\ \\mathrm{W}$。',
          explanation:
            '$\\varepsilon = Blv = 0.50\\times0.40\\times1.5 = 0.30\\ \\mathrm{V}$，$I = \\frac{\\varepsilon}{R} = 1.5\\ \\mathrm{A}$；安培力 $F = BIl = 0.50\\times1.5\\times0.40 = 0.30\\ \\mathrm{N}$，方向阻碍相对运动。匀速时外力与安培力平衡，$P = Fv = 0.30\\times1.5 = 0.45\\ \\mathrm{W}$，恰好等于焦耳热功率 $I^{2}R$。',
          difficulty: 3,
        },
      ],
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
      examples: [
        {
          question:
            '平行板电容器极板面积 $S = 0.010\\ \\mathrm{m^{2}}$，板间为真空。若板间电场的变化率 $\\frac{dE}{dt} = 1.0\\times10^{12}\\ \\mathrm{V/(m\\cdot s)}$，求板间的位移电流。',
          answer: '$I_d \\approx 8.9\\times10^{-2}\\ \\mathrm{A}$。',
          explanation:
            '位移电流 $I_d = \\frac{d\\Phi_D}{dt} = \\varepsilon_0\\frac{d\\Phi_E}{dt} = \\varepsilon_0S\\frac{dE}{dt} = 8.85\\times10^{-12}\\times0.010\\times1.0\\times10^{12} \\approx 8.9\\times10^{-2}\\ \\mathrm{A}$。位移电流的本质是变化的电场，它和传导电流一样能在周围激发磁场。',
          difficulty: 2,
        },
        {
          question:
            '用真空介电常数 $\\varepsilon_0 = 8.85\\times10^{-12}\\ \\mathrm{F/m}$ 与真空磁导率 $\\mu_0 = 4\\pi\\times10^{-7}\\ \\mathrm{H/m}$ 计算真空中电磁波的速度。',
          answer: '$c \\approx 3.0\\times10^{8}\\ \\mathrm{m/s}$。',
          explanation:
            '$c = \\frac{1}{\\sqrt{\\varepsilon_0\\mu_0}} = \\frac{1}{\\sqrt{8.85\\times10^{-12}\\times4\\pi\\times10^{-7}}} \\approx 3.0\\times10^{8}\\ \\mathrm{m/s}$，与实验测得的光速一致，说明光就是电磁波。',
          difficulty: 1,
        },
      ],
      level: 3,
    },
  ],
}
