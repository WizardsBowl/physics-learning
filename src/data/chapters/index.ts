import type { Chapter } from '../../types/physics'
import { electromagnetism } from './electromagnetism'
import { mechanics } from './mechanics'
import { modernPhysics } from './modernPhysics'
import { optics } from './optics'
import { oscillations } from './oscillations'
import { thermal } from './thermal'

/** 所有章节，顺序即页面展示顺序 */
export const chapters: Chapter[] = [
  mechanics,
  oscillations,
  thermal,
  electromagnetism,
  optics,
  modernPhysics,
]

/** 章节总数 */
export const chapterCount = chapters.length

/** 知识点总数 */
export const knowledgePointCount = chapters.reduce(
  (total, chapter) => total + chapter.points.length,
  0,
)

/** 按路由参数查找章节 */
export function findChapter(id: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id)
}

/** 查找相邻章节，用于上一章 / 下一章导航 */
export function findChapterNeighbors(id: string): {
  prev: Chapter | null
  next: Chapter | null
} {
  const index = chapters.findIndex((chapter) => chapter.id === id)
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  }
}
