import type { Chapter } from '../../types/physics'

export const thermal: Chapter = {
  id: 'thermal',
  title: '热学',
  enTitle: 'Thermodynamics',
  accent: '#f97316',
  description: '从微观分子运动到宏观热力学定律，理解内能、功与熵。',
  points: [
    {
      id: 'kinetic-theory',
      title: '气体动理论',
      summary: '把宏观压强、温度与分子平均平动动能联系起来。',
      formulas: [
        { latex: String.raw`pV = \nu RT = \frac{m}{M}RT`, note: '理想气体状态方程' },
        { latex: String.raw`p = \frac{2}{3}n\bar{\varepsilon}_k`, note: '压强的微观本质' },
        { latex: String.raw`\bar{\varepsilon}_k = \frac{3}{2}kT`, note: '分子平均平动动能' },
        { latex: String.raw`v_{\mathrm{rms}} = \sqrt{\frac{3RT}{M}}`, note: '方均根速率' },
      ],
      keyPoints: [
        '温度是分子平均平动动能的量度，是大量分子热运动的统计结果。',
        '自由度 i：单原子 3，刚性双原子 5，刚性多原子 6；平均总动能 = (i/2)kT。',
        '三种速率大小关系：v_p < v̄ < v_rms（最概然、平均、方均根）。',
        '真实气体在高温低压下才近似为理想气体。',
      ],
      level: 1,
    },
    {
      id: 'first-law',
      title: '热力学第一定律',
      summary: '能量守恒在热现象中的表述：Q = ΔU + W（W 为系统对外做功）。',
      formulas: [
        { latex: String.raw`Q = \Delta U + W`, note: '本库采用“W 为系统对外做功”的符号约定' },
        { latex: String.raw`W = \int p\,dV`, note: '准静态过程系统对外做功' },
        { latex: String.raw`\Delta U = \nu C_V \Delta T`, note: '理想气体内能只与温度有关' },
        {
          latex: String.raw`C_V = \frac{i}{2}R,\quad C_p = C_V + R`,
          note: '定体摩尔热容与定压摩尔热容',
        },
      ],
      keyPoints: [
        '内能是状态量，功和热量是过程量，二者都与路径有关。',
        '等值过程必须记清条件：等体 W=0、等温 ΔU=0、等压 W=pΔV、绝热 Q=0。',
        '绝热过程方程：pV^γ = 常量，γ = Cp/Cv。',
        '循环过程中 ΔU = 0，净功等于净吸热。',
      ],
      level: 2,
    },
    {
      id: 'cycles',
      title: '循环过程与热机效率',
      summary: '热机把部分吸热转化为功，效率受高温热源与低温热源温度限制。',
      formulas: [
        {
          latex: String.raw`\eta = \frac{W_{\mathrm{net}}}{Q_{\mathrm{in}}} = 1 - \frac{|Q_{\mathrm{out}}|}{Q_{\mathrm{in}}}`,
          note: '热机效率',
        },
        { latex: String.raw`\eta_{\mathrm{Carnot}} = 1 - \frac{T_2}{T_1}`, note: '卡诺循环（T 为热力学温度）' },
        {
          latex: String.raw`e = \frac{Q_2}{W_{\mathrm{net}}} = \frac{T_2}{T_1 - T_2}`,
          note: '卡诺制冷系数',
        },
      ],
      keyPoints: [
        'p–V 图中循环曲线所围面积等于净功，顺时针为正循环（热机）。',
        '卡诺循环由两个等温过程和两个绝热过程组成，效率只取决于热源温度。',
        '任何热机效率都不可能达到或超过同温区间的卡诺效率。',
        '制冷机与热泵的本质是用外界做功把热量从低温传向高温。',
      ],
      level: 2,
    },
    {
      id: 'entropy',
      title: '热力学第二定律与熵',
      summary: '自发过程具有方向性，熵是系统无序度的量度，孤立系统熵不减少。',
      formulas: [
        { latex: String.raw`dS = \frac{dQ_{\mathrm{rev}}}{T}`, note: '熵的定义（可逆过程）' },
        { latex: String.raw`\Delta S = \nu R\ln\frac{V_2}{V_1}`, note: '理想气体等温过程' },
        { latex: String.raw`\Delta S_{\mathrm{iso}} \ge 0`, note: '孤立系统熵增原理' },
      ],
      keyPoints: [
        '第二定律的两种经典表述：开尔文表述（不可能制成单一热源热机）与克劳修斯表述（热量不能自发地从低温传向高温）。',
        '熵是状态量，计算不可逆过程熵变时需设计连接初末态的可逆路径。',
        '熵增原理给出了自发过程的方向与限度。',
        '热力学第二定律的统计意义：孤立系统总是从概率小的宏观态向概率大的宏观态演化。',
      ],
      level: 3,
    },
  ],
}
