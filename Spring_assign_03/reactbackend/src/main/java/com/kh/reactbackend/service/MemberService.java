package com.kh.reactbackend.service;

import com.kh.reactbackend.dto.MemberDto;
import com.kh.reactbackend.entity.Member;

public interface MemberService {
    String createMember(MemberDto.Create createDto);
    MemberDto.Response login(String userId, String userPassword);
    MemberDto.Response findMember(String userId);
    MemberDto.Response updateMember(String userId, MemberDto.Update updateDto);
    void deleteMember(String userId);
}
