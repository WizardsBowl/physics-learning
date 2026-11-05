import type { Chapter } from '../../types/physics'

export const optics: Chapter = {
  id: 'optics',
  title: '光学',
  enTitle: 'Optics',
  accent: '#06b6d4',
  description: '干涉、衍射与偏振体现光的波动性，几何光学是波动光学的短波极限。',
  points: [
    {
      id: 'interference',
      title: '光的干涉',
      summary: '相干光叠加形成稳定的明暗条纹，光程差决定加强或减弱。',
      formulas: [
        { expression: 'δ = n r₂ − n r₁（光程差）', note: '光程 = 几何路程 × 折射率' },
        { expression: 'δ = kλ 明纹，δ = (2k+1)λ/2 暗纹', note: '干涉判据' },
        { expression: 'Δy = Dλ/d', note: '双缝干涉相邻明纹间距' },
        { expression: 'δ = 2nd cos r + λ/2', note: '薄膜干涉（含反射半波损失）' },
      ],
      keyPoints: [
        '相干光可由分波阵面（杨氏双缝）或分振幅（薄膜）获得。',
        '光程的物理意义是把光在介质中的路程折算为真空中的等效路程。',
        '增透膜、增反膜利用薄膜干涉，膜厚量级为 λ/4 的奇数倍或偶数倍。',
        '等厚干涉（劈尖、牛顿环）条纹间距随膜厚变化，可用于检测表面平整度。',
      ],
      level: 2,
    },
    {
      id: 'diffraction',
      title: '光的衍射',
      summary: '光遇到与波长相当的障碍物时偏离直线传播，单缝与光栅是最基本的模型。',
      formulas: [
        { expression: 'a sinθ = kλ', note: '单缝夫琅禾费衍射暗纹条件' },
        { expression: 'd sinθ = kλ', note: '光栅主极大条件（光栅方程）' },
        { expression: 'θ₁ ≈ 1.22λ/D', note: '圆孔衍射艾里斑半角宽度' },
        { expression: 'R = λ/Δλ = kN', note: '光栅分辨本领' },
      ],
      keyPoints: [
        '菲涅耳衍射（近场）与夫琅禾费衍射（远场）的区别在于光源与观察屏是否在有限距离。',
        '单缝衍射中央明纹宽度是其他明纹宽度的两倍。',
        '缺级现象：光栅主极大位置恰为单缝衍射暗纹时该级消失。',
        '衍射限制了光学仪器的分辨极限。',
      ],
      level: 3,
    },
    {
      id: 'polarization',
      title: '光的偏振',
      summary: '光是横波，偏振现象证明电场振动方向垂直于传播方向。',
      formulas: [
        { expression: 'I = I₀ cos²α', note: '马吕斯定律' },
        { expression: 'tan i₀ = n₂/n₁', note: '布儒斯特定律' },
        { expression: 'I = ½I₀', note: '自然光通过理想偏振片后的强度' },
      ],
      keyPoints: [
        '自然光、线偏振光、部分偏振光与圆偏振光的区别在于电场振动方向的分布。',
        '反射光是部分偏振光，以布儒斯特角入射时反射光为完全线偏振光。',
        '偏振片既是起偏器也是检偏器，两片正交时透射光强度为零。',
        '光的偏振说明光是横波，是电磁波横波性的直接证据。',
      ],
      level: 2,
    },
    {
      id: 'geometric-optics',
      title: '几何光学',
      summary: '在波长远小于系统尺度时，用光线模型处理反射、折射与成像。',
      formulas: [
        { expression: 'n₁ sin i = n₂ sin r', note: '折射定律' },
        { expression: '1/u + 1/v = 1/f', note: '薄透镜成像公式（符号约定按教材）' },
        { expression: 'n = c/v', note: '介质折射率' },
      ],
      keyPoints: [
        '全反射条件：光从光密介质射向光疏介质且入射角大于临界角 sinC = n₂/n₁。',
        '薄透镜成像公式与横向放大率须与教材的符号约定配套使用。',
        '光程与等光程原理是几何光学与波动光学的桥梁。',
        '光纤通信利用全反射把光限制在纤芯中传输。',
      ],
      level: 1,
    },
  ],
}
