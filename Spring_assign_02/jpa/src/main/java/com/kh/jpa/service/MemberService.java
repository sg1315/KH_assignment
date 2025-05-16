package com.kh.jpa.service;

import com.kh.jpa.dto.MemberDto;

public interface MemberService {
    String createMember(MemberDto.Create createDto);
    MemberDto.Response findMember(String userId);
    MemberDto.Response updateMember(String userId, MemberDto.Update updateDto);
    void deleteMember(String userId);
}
