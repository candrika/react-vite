// CkeditorWithFooter.jsx
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../src/App.css'; // Pastikan untuk menambahkan CSS di langkah berikut

const CkeditorWithFooter = ({ value, onChange }) => {
    return (
        <div className="ckeditor-container">
            <CKEditor
                editor={ClassicEditor}
                data={value || "<p>Type here...</p>"}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    if (onChange) onChange(data);
                }}
                config={{
                    toolbar: [
                        'bold', 'italic', 'underline', '|', 'bulletedList', 'numberedList', '|', 'imageUpload', 'insertTable'
                    ]
                }}
            />
        </div>
    );
};

export default CkeditorWithFooter;
