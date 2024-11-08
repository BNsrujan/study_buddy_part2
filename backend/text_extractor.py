import sys
import PyPDF2

def extract_text(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

if __name__ == "__main__":
    pdf_path = sys.argv[1]
    print(extract_text(pdf_path))
