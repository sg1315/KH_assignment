package com.kh.jpa.entity;

import jakarta.persistence.*;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Table(name = "NOTICE")
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_no")
    private Long noticeNo;

    @Column(name = "notice_title", nullable = false, length = 100)
    private String noticeTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "notice_writer", nullable = false)
    private Member member;

    @Column(name = "notice_content", nullable = false, length = 200)
    private String noticeContent;

    @CreationTimestamp //엔티티가 처음 저장될 때 자동으로 현재 시간 저장
    @Column(name = "create_date", updatable = false) //최초생성시간은 변경이 불가하도록
    private LocalDateTime createDate;
}
