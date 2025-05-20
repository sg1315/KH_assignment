package com.kh.jpa.utils;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Template {
    public static String saveFile(MultipartFile file, HttpSession session, String path) {
        //파일원본명
        String originName = file.getOriginalFilename();

        //확장자
        String ext = originName.substring(originName.lastIndexOf("."));

        // 오늘 날짜
        String dateStr = new SimpleDateFormat("yyyyMMdd").format(new Date());
        String prefix = "img_" + dateStr;

        //첨부파일을 저장할 폴더의 물리적 경로
        String savePath = session.getServletContext().getRealPath(path);
        File folder = new File(savePath);

        // 같은 날짜의 파일 개수를 기반으로 순번 결정
        int count = 1;
        File[] files = folder.listFiles();
        if (files != null) {
            for (File f : files) {
                if (f.getName().startsWith(prefix)) {
                    count++;
                }
            }
        }

        String countStr = String.format("%02d", count);
        String changeName = prefix + countStr + ext;

        try {
            file.transferTo(new File(savePath + changeName));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return changeName;
    }
}
