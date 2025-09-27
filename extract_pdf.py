import PyPDF2
import re

def extract_questions_from_pdf():
    try:
        with open('ON TAP MA NGUON MO.pdf', 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            
            # Đọc tất cả các trang
            for page in reader.pages:
                text += page.extract_text() + '\n'
            
            # Tìm các câu hỏi
            questions = []
            
            # Tìm pattern câu hỏi (có thể là "Câu 1:", "1.", "Question 1:", etc.)
            patterns = [
                r'Câu\s+(\d+)[:\.]\s*(.+?)(?=A\.|B\.|C\.|D\.|Câu\s+\d+[:\.]|$)',
                r'(\d+)[:\.]\s*(.+?)(?=A\.|B\.|C\.|D\.|\d+[:\.]|$)',
                r'Question\s+(\d+)[:\.]\s*(.+?)(?=A\.|B\.|C\.|D\.|Question\s+\d+[:\.]|$)'
            ]
            
            for pattern in patterns:
                matches = re.findall(pattern, text, re.DOTALL | re.IGNORECASE)
                for match in matches:
                    if len(match) == 2:
                        question_num, question_text = match
                        questions.append({
                            'number': question_num.strip(),
                            'text': question_text.strip()
                        })
            
            # In ra để kiểm tra
            print(f"Tìm thấy {len(questions)} câu hỏi:")
            for i, q in enumerate(questions[:10]):  # In 10 câu đầu
                print(f"\nCâu {q['number']}: {q['text'][:200]}...")
            
            return questions
            
    except Exception as e:
        print(f"Lỗi: {e}")
        return []

if __name__ == "__main__":
    questions = extract_questions_from_pdf()
