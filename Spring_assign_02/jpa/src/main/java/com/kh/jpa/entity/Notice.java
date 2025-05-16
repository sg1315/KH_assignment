package com.kh.jpa.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Getter
@Table(name = "NOTICE")
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_no")
    private Long noticeNo;

    @Column(name = "notice_title", nullable = false, length = 100)
    private String noticeTitle;

    @Column(name = "notice_content", nullable = false, length = 200)
    private String noticeContent;

    @Column(name = "create_date", updatable = false) //최초생성시간은 변경이 불가하도록
    private LocalDateTime createDate;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "notice_writer", nullable = false)
    private Member member;

    @PrePersist
    protected void prePersist() {
        this.createDate = LocalDateTime.now();
    }
}
