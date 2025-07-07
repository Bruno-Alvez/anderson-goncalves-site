import { useState } from 'react'
import * as S from './styles'

const results = [
  { image: '/images/result1.jpeg', alt: 'Transformação 1' },
  { image: '/images/result2.jpeg', alt: 'Transformação 2' },
  { image: '/images/result3.jpeg', alt: 'Transformação 3' },
  { image: '/images/result4.jpeg', alt: 'Transformação 4' },
  { image: '/images/result5.jpeg', alt: 'Transformação 5' },
  { image: '/images/result6.jpeg', alt: 'Transformação 6' },
  { image: '/images/result7.jpeg', alt: 'Transformação 7' },
  { image: '/images/result8.jpeg', alt: 'Transformação 8' },
  { image: '/images/result10.jpeg', alt: 'Transformação 9' }
]

const Result = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <S.Section>
      <S.Title>Faça parte do <strong>#TeamGoncalves</strong></S.Title>
      <S.Grid>
        {results.map((item, index) => (
          <S.Card key={index} onClick={() => setSelectedImage(item.image)}>
            <img src={item.image} alt={item.alt} />
          </S.Card>
        ))}
      </S.Grid>

      {selectedImage && (
        <S.ModalOverlay onClick={() => setSelectedImage(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="Preview" />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Section>
  )
}

export default Result
